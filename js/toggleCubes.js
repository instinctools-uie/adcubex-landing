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
  const scaleRange = 9;
  const cubeScalePerChange = perChange * scaleRange > 1 ? perChange * scaleRange : 1;
  const maxCubeScale = cubeScalePerChange > scaleRange ? scaleRange : cubeScalePerChange;
  const transletXPosition = perChange > 0 ? perChange * 1500 : 0;
  const transletYPosition = perChange > 0 ? perChange * 2500 : 0;

  // if (transletXPosition > 1900 || transletYPosition > 385) {
  //     cubesContainer.style.display = 'none';
  // } else {
  //     cubesContainer.style.display = 'block';
  // }
  firstCube.style.transform =
    'translate(-' + transletXPosition + 'px, -' + transletYPosition + 'px)' + 'scale(' + maxCubeScale + ')';
}

toggleCube();

function toggleCubes() {
  const perChange = (window.pageYOffset - advantageSectionScrollPosition) / 960;
  const range = 5000;
  const transletYPosition = perChange > 0 ? perChange * range : 0;

  for (let i = 0; i < cubesTranslateElements.length; i++) {
    const isHideElements = transletYPosition > range - 300;

    //TODO: Check for already contain "block" and "none"
    if (isHideElements) {
      cubesTranslateElements[i].style.display = 'none';
    } else {
      cubesTranslateElements[i].style.display = 'block';
      cubesTranslateElements[i].style.transform = 'translate(0px, -' + transletYPosition + 'px)';
    }
  }
}
