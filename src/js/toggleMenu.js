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
  const logoElement = document.querySelector('.logo');
  const openMenuIcon = document.querySelector('.header-open-menu-icon');
  const closeMenuIcon = document.querySelector('.header-close-menu-icon');
  const headerNavigation = document.querySelector('.header-navigation');

  closeMenuIcon.classList.add('header-close-menu-icon--active');
  headerNavigation.classList.add('header-navigation--active');
  logoElement.classList.add('logo--active');
  openMenuIcon.classList.remove('header-open-menu-icon--active');
  headerNavigation.removeAttribute('aria-hidden');
}

function closeMenu() {
  const logoElement = document.querySelector('.logo');
  const openMenuIcon = document.querySelector('.header-open-menu-icon');
  const closeMenuIcon = document.querySelector('.header-close-menu-icon');
  const headerNavigation = document.querySelector('.header-navigation');

  openMenuIcon.classList.add('header-open-menu-icon--active');
  headerNavigation.classList.remove('header-navigation--active');
  logoElement.classList.remove('logo--active');
  closeMenuIcon.classList.remove('header-close-menu-icon--active');
  headerNavigation.setAttribute('aria-hidden', 'true');
}
