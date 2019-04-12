var mainCube = document.querySelector('#cube-8');
var firstCube = document.querySelector('#cube-8-scale-animation');
var advantageSection = window.document.querySelector('.advantage-section');
var advantageSectionScrollPosition = advantageSection.offsetTop;

const cubesTranslateElements = document.querySelectorAll('.cube-translate-animation');

function toggleCube() {
  const minScaleValue = 1;
  const maxScaleValue = 9;
  const minTranslateXPosition = 0;
  const maxTranslateXPosition = 1500;
  const minTranslateYPosition = 0;
  const maxTranslateYPosition = 2500;

  const perChange = (window.pageYOffset - advantageSectionScrollPosition) / 960;

  const cubeScale = getValueBetweenRange(perChange, minScaleValue, maxScaleValue);

  const translateXPosition = getValueBetweenRange(perChange, minTranslateXPosition, maxTranslateXPosition);
  const translateYPosition = getValueBetweenRange(perChange, minTranslateYPosition, maxTranslateYPosition);

  mainCube.style.animation = 'none';
  firstCube.style.transform =
    'translate(-' + translateXPosition + 'px, -' + translateYPosition + 'px)' + 'scale(' + cubeScale + ')';
}

function toggleCubes() {
  const minTranslateYPosition = 0;
  const maxTranslateYPosition = 5000;
  const perChange = (window.pageYOffset - advantageSectionScrollPosition) / 960;

  const translateYPosition = getValueBetweenRange(perChange, minTranslateYPosition, maxTranslateYPosition);

  for (let i = 0; i < cubesTranslateElements.length; i++) {
    const isElementsCloseToMaxValue = translateYPosition > maxTranslateYPosition - 300;
    const cubesElementsDisplayValue =
      cubesTranslateElements[i].style.display || getComputedStyle(cubesTranslateElements[i], null).display;
    const isCubeVisible = cubesElementsDisplayValue === 'block';

    if (isElementsCloseToMaxValue && isCubeVisible) {
      cubesTranslateElements[i].style.display = 'none';
    } else {
      cubesTranslateElements[i].style.display = 'block';
      cubesTranslateElements[i].style.transform = 'translate(0px, -' + translateYPosition + 'px)';
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
