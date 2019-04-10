const cubesContainer = window.document.querySelector('.cubes-container');
var advantageSection = window.document.querySelector('.advantage-section');
var advantageSectionScrollPosition = advantageSection.offsetTop;

function toggleCubesOpacity() {
  const perChange = 1 - (window.pageYOffset - advantageSectionScrollPosition) / 960;
  cubesContainer.style.opacity = perChange < 0.05 ? 0 : perChange;
}

function hideCubes() {
  cubesContainer.style.opacity = 0;
}
