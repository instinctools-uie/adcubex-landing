import { RATE_CHANGE_SCROLL, MAIN_CUBE_OPTIONS, CUBES_OPTIONS } from './constants';

const mainCubeScaleAnimationElement = document.querySelector('#main-cube-scale-animation');
const cubes = document.querySelectorAll('#cubes > g');
const cubesTranslateElements = document.querySelectorAll('.cube-translate');
const mainCubeForTranslateAnimation = window.document.querySelector('#main-cube-translate-animation');

export function cubesRandomLevitation() {
  const cubesForTranslateAnimation = window.document.querySelectorAll('.cube-translate-animation');
  const minDurationValue = 4;
  const durationRange = 10;
  const delayRange = 2;

  cubesForTranslateAnimation.forEach(cube => {
    const isMainCube = cube.id === MAIN_CUBE_OPTIONS.translateAnimationId;
    const durationValue = Math.floor(Math.random() * durationRange + minDurationValue);
    const delayValue = Math.floor(Math.random() * delayRange);

    cube.style.animationDuration = isMainCube ? `${MAIN_CUBE_OPTIONS.animationDuration}s` : `${durationValue}s`;
    cube.style.animationDelay = isMainCube ? `${MAIN_CUBE_OPTIONS.animationDelay}s` : `${delayValue}s`;
  });
}

export function makeMainCubeBigger(sectionScrollPosition) {
  const scrolled = window.pageYOffset;
  const perChange = (scrolled - sectionScrollPosition) / RATE_CHANGE_SCROLL;

  mainCubeAnimation(perChange);
}

export function transformMainCubeToDefaultSize(sectionScrollPosition) {
  const scrolled = window.pageYOffset;
  const highRatio = 1;
  const perChange = highRatio - (scrolled - sectionScrollPosition) / RATE_CHANGE_SCROLL;

  mainCubeAnimation(perChange);
}

export function mainCubeToDefaultSize() {
  mainCubeScaleAnimationElement.style.transform = `translate(0px, 0px) scale(1)`;
  mainCubeForTranslateAnimation.style.animationDuration = `${MAIN_CUBE_OPTIONS.animationDuration}s`;
}

function mainCubeAnimation(perChange) {
  const cubeScale = getValueBetweenRange(perChange, MAIN_CUBE_OPTIONS.minScaleValue, MAIN_CUBE_OPTIONS.maxScaleValue);

  const translateXPosition = getValueBetweenRange(
    perChange,
    MAIN_CUBE_OPTIONS.minTranslateXPosition,
    MAIN_CUBE_OPTIONS.maxTranslateXPosition
  );
  const translateYPosition = getValueBetweenRange(
    perChange,
    MAIN_CUBE_OPTIONS.minTranslateYPosition,
    MAIN_CUBE_OPTIONS.maxTranslateYPosition
  );
  const isCubeScaled = cubeScale > MAIN_CUBE_OPTIONS.minScaleValue;
  // const translateXPositionAfterScale = isCubeScaled ? translateXPosition : MAIN_CUBE_OPTIONS.minTranslateXPosition;
  const translateXPositionAfterScale = translateXPosition;

  if (isCubeScaled) {
    mainCubeForTranslateAnimation.style.animationDuration = '0s';
  } else {
    mainCubeForTranslateAnimation.style.animationDuration = `${MAIN_CUBE_OPTIONS.animationDuration}s`;
  }

  mainCubeScaleAnimationElement.style.transform = `translate(-${translateXPositionAfterScale}px, -${translateYPosition}px) scale(${cubeScale})`;
}

export function moveCubesToTop(sectionScrollPosition) {
  const scrolled = window.pageYOffset;
  const perChange = (scrolled - sectionScrollPosition) / RATE_CHANGE_SCROLL;

  cubesAnimation(perChange);
}

export function moveCubesToDefaultPosition(sectionScrollPosition) {
  const scrolled = window.pageYOffset;
  const highRatio = 1;
  const perChange = highRatio - (scrolled - sectionScrollPosition) / RATE_CHANGE_SCROLL;

  cubesAnimation(perChange);
}

export function cubesToDefaultPosition() {
  const cubesDefaultPosition = 0;
  translateCubesAnimation(cubesDefaultPosition);
}

function cubesAnimation(perChange) {
  const translateYPosition = getValueBetweenRange(
    perChange,
    CUBES_OPTIONS.minTranslateYPosition,
    CUBES_OPTIONS.maxTranslateYPosition
  );
  const isCubesYPositionMoreThanMaxValue = translateYPosition >= CUBES_OPTIONS.maxTranslateYPosition;

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
