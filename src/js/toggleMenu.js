export default function toggleMenuListener() {
  const toggleMenuButton = document.querySelector('.toggle-menu-button');
  toggleMenuButton.addEventListener('click', toggleMenu);
}

function toggleMenu() {
  const toggleMenuButton = document.querySelector('.toggle-menu-button');
  const isMenuOpened = Boolean(toggleMenuButton.querySelector('.header-close-menu-icon--active'));

  if (isMenuOpened) {
    closeMenu();
  } else {
    openMenu();
  }
}

function openMenu() {
  const body = document.querySelector('body');
  const logoElement = document.querySelector('.logo');
  const openMenuIcon = document.querySelector('.header-open-menu-icon');
  const closeMenuIcon = document.querySelector('.header-close-menu-icon');
  const headerNavigation = document.querySelector('.header-navigation');
  const header = document.querySelector('.header-container');
  header.classList.remove('header-container_white');
  header.classList.add('header-container_hide');

  body.classList.add('hidden-scroll');
  closeMenuIcon.classList.add('header-close-menu-icon--active');
  headerNavigation.classList.add('header-navigation--active');
  logoElement.classList.add('logo--active');
  openMenuIcon.classList.remove('header-open-menu-icon--active');
  headerNavigation.removeAttribute('aria-hidden');
}

function closeMenu() {
  const body = document.querySelector('body');
  const logoElement = document.querySelector('.logo');
  const openMenuIcon = document.querySelector('.header-open-menu-icon');
  const closeMenuIcon = document.querySelector('.header-close-menu-icon');
  const headerNavigation = document.querySelector('.header-navigation');
  const header = document.querySelector('.header-container');
  header.classList.add('header-container_white');
  header.classList.remove('header-container_hide');

  openMenuIcon.classList.add('header-open-menu-icon--active');
  body.classList.remove('hidden-scroll');
  headerNavigation.classList.remove('header-navigation--active');
  logoElement.classList.remove('logo--active');
  closeMenuIcon.classList.remove('header-close-menu-icon--active');
  headerNavigation.setAttribute('aria-hidden', 'true');
}
