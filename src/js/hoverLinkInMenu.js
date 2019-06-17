const headerNavigation = document.querySelector('.header-navigation');
const backgroundSynergy = document.querySelector('.bg-synergy');
const backgroundStrategy = document.querySelector('.bg-strategy');
const backgroundSolutions = document.querySelector('.bg-solutions');
const backgroundLetsTalk = document.querySelector('.bg-lets-talk');
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
    backgroundSynergy.style.opacity = 1;
  }

  if (isStrategyLink) {
    backgroundStrategy.style.opacity = 1;
  }

  if (isSolutionsLink) {
    backgroundSolutions.style.opacity = 1;
  }

  if (isLetsTalkLink) {
    backgroundLetsTalk.style.opacity = 1;
  }
}

function mouseOutNavigationContainer(e) {
  const { target } = e;
  const isSynergyLink = target.classList.contains('link-synergy');
  const isStrategyLink = target.classList.contains('link-strategy');
  const isSolutionsLink = target.classList.contains('link-solutions');
  const isLetsTalkLink = target.classList.contains('link-lets-talk');

  headerNavigation.style.opacity = 1;

  if (isSynergyLink) {
    backgroundSynergy.style.opacity = 0;
  }

  if (isStrategyLink) {
    backgroundStrategy.style.opacity = 0;
  }

  if (isSolutionsLink) {
    backgroundSolutions.style.opacity = 0;
  }

  if (isLetsTalkLink) {
    backgroundLetsTalk.style.opacity = 0;
  }
}
