const navToggle = document.querySelector('.nav__toggle'),
  navToggleImg = navToggle.querySelector('img');
const navList = document.querySelector('.nav__list');
const navBg = document.querySelector('.nav__bg');

let isNavOpen = false;

const checkWindowWidth = w => w > 559 ? showNav(true) : undefined;

window.addEventListener('resize', () => checkWindowWidth(window.innerWidth));

const updateNavAttributes = isOpen => {
  navToggle.setAttribute('aria-expanded', isOpen);
  navList.setAttribute('data-visible', isOpen);
}

const scrollControls = state => {
  document.body.style.overflowY = state ? "hidden" : "auto";
  if (state) window.scroll(0, 0);
}

updateNavAttributes(isNavOpen);

const showNav = isOpen => {
  isNavOpen = !isOpen;
  navToggleImg.src = `./images/icon-${isNavOpen ? "close" : "hamburger"}.svg`;
  navList.style.display = isNavOpen ? "flex" : "none";
  navBg.style.display = isNavOpen ? "flex" : "none";
  updateNavAttributes(isNavOpen);
  scrollControls(isNavOpen);
}

navToggle.addEventListener('click', () => showNav(isNavOpen));
