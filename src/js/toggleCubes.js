import { RATE_CHANGE_SCROLL } from 'constants';

const advantageSection = window.document.querySelector('.advantage-section');
const advantageSectionScrollPosition = advantageSection.offsetTop;
const mainCube = document.querySelector('#main-cube');
const mainCubeAnimationElement = document.querySelector('#main-cube-scale-animation');
const cubes = document.querySelectorAll('#cubes > g');
const cubesTranslateElements = document.querySelectorAll('.cube-translate-animation');

function translateCubesAnimation(translateYPosition) {
  for (let i = 0; i < cubesTranslateElements.length; i++) {
    cubesTranslateElements[i].style.transform = `translate(0px, -${translateYPosition}px)`;
  }
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

export function toggleCube() {
  const minScaleValue = 1;
  const maxScaleValue = 8;
  const minTranslateXPosition = 0;
  const maxTranslateXPosition = 1200;
  const minTranslateYPosition = 0;
  const maxTranslateYPosition = 2500;

  const perChange = (window.pageYOffset - advantageSectionScrollPosition) / RATE_CHANGE_SCROLL;

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

  console.log(
    11111111111,
    `translate(-${translateXPositionAfterScale}px, -${translateYPosition}px) scale(${cubeScale})`
  );
  mainCubeAnimationElement.style.transform = `translate(-${translateXPositionAfterScale}px, -${translateYPosition}px) scale(${cubeScale})`;
}

export function toggleCubes() {
  const minTranslateYPosition = 0;
  const maxTranslateYPosition = 5000;
  const perChange = (window.pageYOffset - advantageSectionScrollPosition) / RATE_CHANGE_SCROLL;

  const translateYPosition = getValueBetweenRange(perChange, minTranslateYPosition, maxTranslateYPosition);
  const isCubesYPositionMoreThanMaxValue = translateYPosition >= maxTranslateYPosition;

  for (let i = 0; i < cubes.length; i++) {
    const isMainCube = cubes[i].id === 'main-cube';

    if (isCubesYPositionMoreThanMaxValue && !isMainCube) {
      cubes[i].style.display = 'none';
    } else {
      cubes[i].style.display = 'block';
    }
  }

  if (!isCubesYPositionMoreThanMaxValue) {
    translateCubesAnimation(translateYPosition);
  }
}
