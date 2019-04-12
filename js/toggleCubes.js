const cubesElements = document.querySelectorAll('#cubes > g');
const cubesContainer = document.querySelector('.cubes-container');
var mainCube = document.querySelector('#cube-8');
var firstCube = document.querySelector('#cube-8-scale-animation');
var advantageSection = window.document.querySelector('.advantage-section');
var advantageSectionScrollPosition = advantageSection.offsetTop;

const cubesTranslateElements = document.querySelectorAll('.cube-translate-animation');

function toggleCube() {
  const minScaleValue = 1;
  const maxScaleValue = 9;
  const minTransleteXPosition = 0;
  const maxTransleteXPosition = 1500;
  const minTransleteYPosition = 0;
  const maxTransleteYPosition = 2500;

  const perChange = (window.pageYOffset - advantageSectionScrollPosition) / 960;

  const cubeScale = getValueBetweenRange(perChange, minScaleValue, maxScaleValue);

  const transleteXPosition = getValueBetweenRange(perChange, minTransleteXPosition, maxTransleteXPosition);
  const transleteYPosition = getValueBetweenRange(perChange, minTransleteYPosition, maxTransleteYPosition);

  mainCube.style.animation = 'none';
  firstCube.style.transform =
    'translate(-' + transleteXPosition + 'px, -' + transleteYPosition + 'px)' + 'scale(' + cubeScale + ')';
}

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

function getValueBetweenRange(perChange, minValue, maxValue) {
  const value = perChange * maxValue;

  if (value < minValue) {
    return minValue;
  } else if (value > maxValue) {
    return maxValue;
  } else {
    return value;
  }
}
