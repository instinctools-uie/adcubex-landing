const headerNavigation = document.querySelector('.header-navigation');
const linksContainerInOpenedMenu = document.querySelector('.header-links-container');

export default function hoverLinkInMenu() {
  linksContainerInOpenedMenu.addEventListener('mouseover', mouseOnNavigationContainer);
  linksContainerInOpenedMenu.addEventListener('mouseout', mouseOutNavigationContainer);
}

function mouseOnNavigationContainer(e) {
  const { target } = e;
  const isSynergyLink = target.classList.contains('link-synergy');
  const isStrategyLink = target.classList.contains('link-strategy');
  const isSolutionsLink = target.classList.contains('link-solutions');
  const isLetsTalkLink = target.classList.contains('link-lets-talk');

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
  const isSynergyLink = target.classList.contains('link-synergy');
  const isStrategyLink = target.classList.contains('link-strategy');
  const isSolutionsLink = target.classList.contains('link-solutions');
  const isLetsTalkLink = target.classList.contains('link-lets-talk');

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
