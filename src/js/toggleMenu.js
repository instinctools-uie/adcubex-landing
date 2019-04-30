const logoElement = document.querySelector('.logo');
const toggleMenuButton = document.querySelector('.toggle-menu-button');
const openMenuIcon = document.querySelector('.header-open-menu-icon');
const closeMenuIcon = document.querySelector('.header-close-menu-icon');
const headerNavigation = document.querySelector('.header-navigation');

toggleMenuButton.addEventListener('click', toggleMenu);

function toggleMenu() {
  const isMenuOpened = Boolean(toggleMenuButton.querySelector('.header-close-menu-icon--active'));

  if (isMenuOpened) {
    closeMenu();
  } else {
    openMenu();
  }
}

function openMenu() {
  closeMenuIcon.classList.add('header-close-menu-icon--active');
  headerNavigation.classList.add('header-navigation--active');
  logoElement.classList.add('logo--active');
  openMenuIcon.classList.remove('header-open-menu-icon--active');
  headerNavigation.removeAttribute('aria-hidden');
}

function closeMenu() {
  openMenuIcon.classList.add('header-open-menu-icon--active');
  headerNavigation.classList.remove('header-navigation--active');
  logoElement.classList.remove('logo--active');
  closeMenuIcon.classList.remove('header-close-menu-icon--active');
  headerNavigation.setAttribute('aria-hidden', 'true');
}
