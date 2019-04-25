const links = document.querySelectorAll('.menu-container > a');
const logoElement = document.querySelector('.logo');
const openMenuIcon = document.querySelector('.header-open-menu-icon');
const closeMenuIcon = document.querySelector('.header-close-menu-icon');
const backdropElement = document.querySelector('.backdrop');
const headerNavigation = document.querySelector('.header-navigation');
const linksContainerInOpenedMenu = document.querySelector('.header-links-container');
const cubesContainer = document.querySelector('.cubes-container');

openMenuIcon.addEventListener('click', openMenu);
closeMenuIcon.addEventListener('click', closeMenu);

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
  const isStrategyLink = target.classList.contains('link-strategy');
  const isSolutionsLink = target.classList.contains('link-solutions');

  if (isHeaderLink) {
    const linkArrowIcon = target.querySelector('.header-link-arrow-icon');
    linkArrowIcon.classList.add('header-link-arrow-icon--active');
  }

  if (isStrategyLink) {
    headerNavigation.classList.add('header-navigation--red');
  }

  if (isSolutionsLink) {
    headerNavigation.classList.add('header-navigation--purple');
  }
}

function mouseOutNavigationContainer(e) {
  const { target } = e;
  const isHeaderLink = target.classList.contains('header-link');
  const isStrategyLink = target.classList.contains('link-strategy');
  const isSolutionsLink = target.classList.contains('link-solutions');

  if (isHeaderLink) {
    const linkArrowIcon = target.querySelector('.header-link-arrow-icon');
    linkArrowIcon.classList.remove('header-link-arrow-icon--active');
  }

  if (isStrategyLink) {
    headerNavigation.classList.remove('header-navigation--red');
  }

  if (isSolutionsLink) {
    headerNavigation.classList.remove('header-navigation--purple');
  }
}

function openMenu() {
  closeMenuIcon.classList.add('header-close-menu-icon--active');
  headerNavigation.classList.add('header-navigation--active');
  logoElement.classList.add('logo--active');
  backdropElement.classList.add('backdropElement--active');
  openMenuIcon.classList.remove('header-open-menu-icon--active');
  cubesContainer.style.zIndex = 3;
}

function closeMenu() {
  openMenuIcon.classList.add('header-open-menu-icon--active');
  headerNavigation.classList.remove('header-navigation--active');
  logoElement.classList.remove('logo--active');
  backdropElement.classList.remove('backdropElement--active');
  closeMenuIcon.classList.remove('header-close-menu-icon--active');
  cubesContainer.style.zIndex = -1;
}

//  TODO: Remove that code after remove header links from html
// const menuContainer = document.querySelector('.menu-container');

// menuContainer.addEventListener('click', clickOnLinksInMenu);

// function clickOnLinksInMenu(e) {
//   const linkElement = e.target;
//   const isClickOnLink = linkElement.classList.contains('link');
//
//   if (!isClickOnLink) {
//     return;
//   }
//
//   const isRedLink = linkElement.classList.contains('link_red');
//   if (isRedLink) {
//     links.forEach(link => {
//       const isActiveLink = link.classList.contains('link_red--active');
//       if (isActiveLink) {
//         link.classList.remove('link_red--active');
//       }
//     });
//
//     linkElement.classList.add('link_red--active');
//   }
//
//   const isBlackLink = linkElement.classList.contains('link_black');
//
//   if (isBlackLink) {
//     links.forEach(link => {
//       const isActiveLink = link.classList.contains('link_black--active');
//       if (isActiveLink) {
//         link.classList.remove('link_black--active');
//       }
//     });
//
//     linkElement.classList.add('link_black--active');
//   }
// }
