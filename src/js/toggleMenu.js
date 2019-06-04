export function toggleMenuListener() {
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
  header.classList.add('header-container--nav-active');

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
  header.classList.remove('header-container--nav-active');

  openMenuIcon.classList.add('header-open-menu-icon--active');
  body.classList.remove('hidden-scroll');
  headerNavigation.classList.remove('header-navigation--active');
  logoElement.classList.remove('logo--active');
  closeMenuIcon.classList.remove('header-close-menu-icon--active');
  headerNavigation.setAttribute('aria-hidden', 'true');
}

export function navItemHandler() {
  const navItems = document.querySelectorAll('.header-link');

  for (let i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener('click', hideMenu);
  }
}

function hideMenu() {
  const headerContainer = document.querySelector('.header-container');
  const headerNavigation = document.querySelector('.header-navigation');
  const logo = document.querySelector('.logo');
  const menuButton = document.querySelector('.header-open-menu-icon');

  setTimeout(5000, function() {
    headerContainer.classList.remove('header-container--nav-active');
    headerNavigation.classList.remove('header-navigation--active');
    logo.classList.remove('logo--active');
    menuButton.classList.add('header-open-menu-icon--active');
  });
}
