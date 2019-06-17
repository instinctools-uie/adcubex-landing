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
  const htmlDocument = document.querySelector('html');
  const body = document.querySelector('body');
  const logoElement = document.querySelector('.logo');
  const openMenuIcon = document.querySelector('.header-open-menu-icon');
  const headerNavigation = document.querySelector('.header-navigation');
  const header = document.querySelector('.header-container');

  return {
    htmlDocument,
    body,
    logoElement,
    openMenuIcon,
    headerNavigation,
    header
  };
}

function openMenu() {
  const { htmlDocument, body, logoElement, openMenuIcon, headerNavigation, header } = getTargetSelectors();

  header.classList.add('header-container--nav-active');
  htmlDocument.classList.add('hidden-scroll');
  body.classList.add('hidden-scroll');
  headerNavigation.classList.add('header-navigation--active');
  logoElement.classList.add('logo--active');
  openMenuIcon.classList.add('header-open-menu-icon--active');
  headerNavigation.removeAttribute('aria-hidden');
}

function closeMenu() {
  const { htmlDocument, body, logoElement, openMenuIcon, headerNavigation, header } = getTargetSelectors();

  header.classList.remove('header-container--nav-active');
  htmlDocument.classList.remove('hidden-scroll');
  body.classList.remove('hidden-scroll');
  headerNavigation.classList.remove('header-navigation--active');
  logoElement.classList.remove('logo--active');
  openMenuIcon.classList.remove('header-open-menu-icon--active');
  headerNavigation.setAttribute('aria-hidden', 'true');
}
