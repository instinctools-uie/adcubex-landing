const links = document.querySelectorAll('.menu-container > a');
const logoElement = document.querySelector('.logo');
const toggleMenuButton = document.querySelector('.toggle-menu-button');
const openMenuIcon = document.querySelector('.header-open-menu-icon');
const closeMenuIcon = document.querySelector('.header-close-menu-icon');
const headerNavigation = document.querySelector('.header-navigation');
const linksContainerInOpenedMenu = document.querySelector('.header-links-container');

toggleMenuButton.addEventListener('click', toggleMenu);

linksContainerInOpenedMenu.addEventListener('mouseover', mouseOnNavigationContainer);
linksContainerInOpenedMenu.addEventListener('mouseout', mouseOutNavigationContainer);

export function changeActiveMenuLinkToBlack() {
  links.forEach(link => {
    const isActiveRedLink = link.classList.contains('link_red--active');
    if (isActiveRedLink) {
      link.classList.remove('link_red--active');
      link.classList.add('link_black--active');
    }
    link.classList.remove('link_red');
    link.classList.add('link_black');
  });
}

export function changeActiveMenuLinkToRed() {
  links.forEach(link => {
    const isActiveBlackLink = link.classList.contains('link_black--active');
    if (isActiveBlackLink) {
      link.classList.remove('link_black--active');
      link.classList.add('link_red--active');
    }
    link.classList.remove('link_black');
    link.classList.add('link_red');
  });
}

function mouseOnNavigationContainer(e) {
  const { target } = e;
  const isHeaderLink = target.classList.contains('header-link');
  const isSynergyLink = target.classList.contains('link-synergy');
  const isStrategyLink = target.classList.contains('link-strategy');
  const isSolutionsLink = target.classList.contains('link-solutions');
  const isLetsTalkLink = target.classList.contains('link-lets-talk');

  if (isHeaderLink) {
    const linkArrowIcon = target.querySelector('.header-link-arrow-icon');
    linkArrowIcon.classList.add('header-link-arrow-icon--active');
  }

  if (isSynergyLink) {
    headerNavigation.classList.add('header-navigation--blue');
  }

  if (isStrategyLink) {
    headerNavigation.classList.add('header-navigation--red');
  }

  if (isSolutionsLink) {
    headerNavigation.classList.add('header-navigation--purple');
  }

  if (isLetsTalkLink) {
    headerNavigation.classList.add('header-navigation--dark-purple');
  }
}

function mouseOutNavigationContainer(e) {
  const { target } = e;
  const isHeaderLink = target.classList.contains('header-link');
  const isSynergyLink = target.classList.contains('link-synergy');
  const isStrategyLink = target.classList.contains('link-strategy');
  const isSolutionsLink = target.classList.contains('link-solutions');
  const isLetsTalkLink = target.classList.contains('link-lets-talk');

  if (isHeaderLink) {
    const linkArrowIcon = target.querySelector('.header-link-arrow-icon');
    linkArrowIcon.classList.remove('header-link-arrow-icon--active');
  }

  if (isSynergyLink) {
    headerNavigation.classList.remove('header-navigation--blue');
  }

  if (isStrategyLink) {
    headerNavigation.classList.remove('header-navigation--red');
  }

  if (isSolutionsLink) {
    headerNavigation.classList.remove('header-navigation--purple');
  }

  if (isLetsTalkLink) {
    headerNavigation.classList.remove('header-navigation--dark-purple');
  }
}

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
}

function closeMenu() {
  openMenuIcon.classList.add('header-open-menu-icon--active');
  headerNavigation.classList.remove('header-navigation--active');
  logoElement.classList.remove('logo--active');
  closeMenuIcon.classList.remove('header-close-menu-icon--active');
}
