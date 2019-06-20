const linksContainerInOpenedMenu = document.querySelector('.header-links-container');
const bgSynergy = document.querySelector('.bg-synergy');
const bgStrategy = document.querySelector('.bg-strategy');
const bgSolutions = document.querySelector('.bg-solutions');
const bgLetsTalk = document.querySelector('.bg-lets-talk');

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
    bgSynergy.style.opacity = 1;
  }

  if (isStrategyLink) {
    bgStrategy.style.opacity = 1;
  }

  if (isSolutionsLink) {
    bgSolutions.style.opacity = 1;
  }

  if (isLetsTalkLink) {
    bgLetsTalk.style.opacity = 1;
  }
}

function mouseOutNavigationContainer(e) {
  const { target } = e;
  const isSynergyLink = target.classList.contains('link-synergy');
  const isStrategyLink = target.classList.contains('link-strategy');
  const isSolutionsLink = target.classList.contains('link-solutions');
  const isLetsTalkLink = target.classList.contains('link-lets-talk');

  if (isSynergyLink) {
    bgSynergy.style.opacity = 0;
  }

  if (isStrategyLink) {
    bgStrategy.style.opacity = 0;
  }

  if (isSolutionsLink) {
    bgSolutions.style.opacity = 0;
  }

  if (isLetsTalkLink) {
    bgLetsTalk.style.opacity = 0;
  }
}
