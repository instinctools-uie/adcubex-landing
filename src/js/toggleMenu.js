export function toggleMenuListener() {
  const toggleMenuButton = document.querySelector('.toggle-menu-button');
  toggleMenuButton.addEventListener('click', toggleMenu);
}

function toggleMenu() {
  const toggleMenuButton = document.querySelector('.toggle-menu-button');
  const isMenuOpened = Boolean(toggleMenuButton.querySelector('.header-open-menu-icon--active'));

  if (isMenuOpened) {
    closeMenu();
  } else {
    openMenu();
  }
}

function getTargetSelectors() {
  const mainBackground = document.querySelector('.bg-main');
  const htmlDocument = document.querySelector('html');
  const body = document.querySelector('body');
  const logoElement = document.querySelector('.logo');
  const openMenuIcon = document.querySelector('.header-open-menu-icon');
  const headerNavigation = document.querySelector('.header-navigation');
  const header = document.querySelector('.header-container');
  const headerContainer = document.querySelector('.header-navigation-container');

  return {
    mainBackground,
    htmlDocument,
    body,
    logoElement,
    openMenuIcon,
    headerNavigation,
    header,
    headerContainer
  };
}

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault) e.preventDefault();
  e.returnValue = false;
}

function openMenu() {
  const {
    mainBackground,
    htmlDocument,
    body,
    logoElement,
    openMenuIcon,
    headerNavigation,
    header,
    headerContainer
  } = getTargetSelectors();
  mainBackground.style.opacity = 1;

  header.classList.add('header-container--nav-active');
  htmlDocument.classList.add('hidden-scroll');
  body.classList.add('hidden-scroll');
  window.addEventListener('wheel', preventDefault);
  window.addEventListener('touchmove', preventDefault);
  headerNavigation.classList.add('header-navigation--active');
  logoElement.classList.add('logo--active');
  openMenuIcon.classList.add('header-open-menu-icon--active');
  headerNavigation.removeAttribute('aria-hidden');

  headerContainer.style.display = 'flex';
}

function closeMenu() {
  const {
    mainBackground,
    htmlDocument,
    body,
    logoElement,
    openMenuIcon,
    headerNavigation,
    header,
    headerContainer
  } = getTargetSelectors();
  mainBackground.style.opacity = 0;

  htmlDocument.classList.remove('hidden-scroll');
  body.classList.remove('hidden-scroll');
  window.removeEventListener('wheel', preventDefault);
  window.removeEventListener('touchmove', preventDefault);
  header.classList.remove('header-container--nav-active');
  headerNavigation.classList.remove('header-navigation--active');
  logoElement.classList.remove('logo--active');
  openMenuIcon.classList.remove('header-open-menu-icon--active');
  headerNavigation.setAttribute('aria-hidden', 'true');
  headerContainer.style.display = 'none';
}
