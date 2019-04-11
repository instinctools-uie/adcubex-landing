const cubesElements = document.querySelectorAll('#cubes > g');
const cubesContainer = document.querySelector('.cubes-container');
var mainCube = document.querySelector('#cube-1');
var firstCube = document.querySelector('#cube-1-scale-animation');
var advantageSection = window.document.querySelector('.advantage-section');
var advantageSectionScrollPosition = advantageSection.offsetTop;

const cubesTranslateElements = document.querySelectorAll('.cube-translate-animation');

function toggleCube() {
  mainCube.style.animation = 'none';
  const perChange = (window.pageYOffset - advantageSectionScrollPosition) / 960;
  const cubeScalePerChange = perChange * 19 > 1 ? perChange * 19 : 1;
  const maxCubeScale = cubeScalePerChange > 19 ? 19 : cubeScalePerChange;
  const transletXPosition = perChange > 0 ? perChange * 2200 : 0;
  const transletYPosition = perChange > 0 ? perChange * 400 : 0;

  // if (transletXPosition > 1900 || transletYPosition > 385) {
  //     cubesContainer.style.display = 'none';
  // } else {
  //     cubesContainer.style.display = 'block';
  // }
  firstCube.style.transform =
    'translate(-' + transletYPosition + 'px, -' + transletXPosition + 'px)' + 'scale(' + maxCubeScale + ')';
}

toggleCube();

function toggleCubes() {
  const perChange = (window.pageYOffset - advantageSectionScrollPosition) / 960;
  const transletYPosition = perChange > 0 ? perChange * 5000 : 0;

  for (let i = 0; i < cubesTranslateElements.length; i++) {
    cubesTranslateElements[i].style.transform = 'translate(0px, -' + transletYPosition + 'px)';
  }
}
