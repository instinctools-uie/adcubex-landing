import { RATE_CHANGE_SCROLL } from './constants';

const advantageSection = document.querySelector('.advantage-section');
const advantageSectionScrollPosition = advantageSection.offsetTop;
const mainCube = document.querySelector('#main-cube');
const mainCubeAnimationElement = document.querySelector('#main-cube-scale-animation');
const cubes = document.querySelectorAll('#cubes > g');
const cubesTranslateElements = document.querySelectorAll('.cube-translate-animation');

export function toggleCube() {
  const scrolled = window.pageYOffset;
  const minScaleValue = 1;
  const maxScaleValue = 8;
  const minTranslateXPosition = 0;
  const maxTranslateXPosition = 1200;
  const minTranslateYPosition = 0;
  const maxTranslateYPosition = 2500;

  const perChange = (scrolled - advantageSectionScrollPosition) / RATE_CHANGE_SCROLL;

  const cubeScale = getValueBetweenRange(perChange, minScaleValue, maxScaleValue);

  const translateXPosition = getValueBetweenRange(perChange, minTranslateXPosition, maxTranslateXPosition);
  const translateYPosition = getValueBetweenRange(perChange, minTranslateYPosition, maxTranslateYPosition);
  const isCubeScaled = cubeScale > minScaleValue;
  const translateXPositionAfterScale = isCubeScaled ? translateXPosition : minTranslateXPosition;

  if (isCubeScaled) {
    mainCube.style.animation = 'none';
  } else {
    mainCube.style.animation = 'main-cube 1.6s infinite alternate';
  }

  mainCubeAnimationElement.style.transform = `translate(-${translateXPositionAfterScale}px, -${translateYPosition}px) scale(${cubeScale})`;
}

export function toggleCubes() {
  const scrolled = window.pageYOffset;
  const minTranslateYPosition = 0;
  const maxTranslateYPosition = 5000;
  const perChange = (scrolled - advantageSectionScrollPosition) / RATE_CHANGE_SCROLL;

  const translateYPosition = getValueBetweenRange(perChange, minTranslateYPosition, maxTranslateYPosition);
  const isCubesYPositionMoreThanMaxValue = translateYPosition >= maxTranslateYPosition;

  cubes.forEach(cube => {
    const isMainCube = cube.id === 'main-cube';

    if (isCubesYPositionMoreThanMaxValue && !isMainCube) {
      cube.style.display = 'none';
    } else {
      cube.style.display = 'block';
    }
  });

  if (!isCubesYPositionMoreThanMaxValue) {
    translateCubesAnimation(translateYPosition);
  }
}

function translateCubesAnimation(translateYPosition) {
  cubesTranslateElements.forEach(cubeTranslateElement => {
    cubeTranslateElement.style.transform = `translate(0px, -${translateYPosition}px)`;
  });
}

function getValueBetweenRange(perChange, minValue, maxValue) {
  const value = perChange * maxValue;

  if (value < minValue) {
    return minValue;
  }

  if (value > maxValue) {
    return maxValue;
  }

  return value;
}
