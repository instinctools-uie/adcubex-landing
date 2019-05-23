import { RATE_WSXGA_SCROLL, RATE_WSGA_SCROLL, WSGA_BREAKPOINT, MAIN_CUBE_OPTIONS, CUBES_OPTIONS } from './constants';
import isWSXGABreakpoint from './isWSXGABreakpoint';

const mainCubeScaleAnimationElement = document.querySelector('#main-cube-scale-animation');
const cubesTranslateElements = document.querySelectorAll('.cube-translate');
const mainCubeForTranslateAnimation = window.document.querySelector('#main-cube-translate-animation');

const changeScroll = isWSXGABreakpoint(WSGA_BREAKPOINT) ? RATE_WSXGA_SCROLL : RATE_WSGA_SCROLL;

export function cubesRandomLevitation() {
  const cubesForTranslateAnimation = window.document.querySelectorAll('.cube-translate-animation');
  const minDurationValue = 4;
  const durationRange = 10;
  const delayRange = 2;

  cubesForTranslateAnimation.forEach(cube => {
    const { translateAnimationId, animationDuration, animationDelay } = MAIN_CUBE_OPTIONS;
    const isMainCube = cube.id === translateAnimationId;
    const durationValue = Math.floor(Math.random() * durationRange + minDurationValue);
    const delayValue = Math.floor(Math.random() * delayRange);

    cube.style.animationDuration = isMainCube ? `${animationDuration}s` : `${durationValue}s`;
    cube.style.animationDelay = isMainCube ? `${animationDelay}s` : `${delayValue}s`;
  });
}

export function makeMainCubeBigger(sectionScrollPosition) {
  const scrolled = window.pageYOffset;
  const perChange = (scrolled - sectionScrollPosition) / changeScroll;

  mainCubeAnimation(perChange);
}

export function transformMainCubeToDefaultSize(sectionScrollPosition) {
  const scrolled = window.pageYOffset;
  const highRatio = 0.8;
  const perChange = highRatio - (scrolled - sectionScrollPosition) / changeScroll;

  mainCubeAnimation(perChange);
}

export function mainCubeToDefaultSize() {
  mainCubeScaleAnimationElement.style.transform = `translate(0px, 0px) scale(1)`;
  mainCubeForTranslateAnimation.style.animationDuration = `${MAIN_CUBE_OPTIONS.animationDuration}s`;
}

function mainCubeAnimation(perChange) {
  const { maxScaleValue, minScaleValue, animationDuration } = MAIN_CUBE_OPTIONS;
  const cubeScale = getValueBetweenRange(perChange, minScaleValue, maxScaleValue);

  const isCubeScaled = cubeScale > minScaleValue;

  if (isCubeScaled) {
    mainCubeForTranslateAnimation.style.animationDuration = '0s';
  } else {
    mainCubeForTranslateAnimation.style.animationDuration = `${animationDuration}s`;
  }

  mainCubeScaleAnimationElement.style.transform = `scale(${cubeScale})`;
}

export function moveCubesToTopForWhiteSections(sectionScrollPosition, rateChangeScroll) {
  const scrolled = window.pageYOffset;
  const { minTranslateYWhenScrollOnWhiteSections, maxTranslateYWhenScrollOnWhiteSections } = CUBES_OPTIONS;
  const perChange = (scrolled - sectionScrollPosition) / rateChangeScroll;
  const translateYPosition = getValueBetweenRange(
    perChange,
    minTranslateYWhenScrollOnWhiteSections,
    maxTranslateYWhenScrollOnWhiteSections
  );

  translateCubesAnimation(translateYPosition);
}

export function moveCubesToTopForColorSections(sectionScrollPosition) {
  const scrolled = window.pageYOffset;
  const { maxTranslateYPosition, maxTranslateYWhenScrollOnWhiteSections } = CUBES_OPTIONS;
  const minTranslateYPosition = maxTranslateYWhenScrollOnWhiteSections;
  const perChange = (scrolled - sectionScrollPosition) / changeScroll;

  cubesAnimation(perChange, minTranslateYPosition, maxTranslateYPosition);
}

export function moveCubesToDefaultPosition(sectionScrollPosition) {
  const scrolled = window.pageYOffset;
  const { maxTranslateYPosition, maxTranslateYWhenScrollOnWhiteSections } = CUBES_OPTIONS;
  const minTranslateYPosition = maxTranslateYWhenScrollOnWhiteSections;
  const highRatio = 0.8;
  const perChange = highRatio - (scrolled - sectionScrollPosition) / changeScroll;

  cubesAnimation(perChange, minTranslateYPosition, maxTranslateYPosition);
}

function cubesAnimation(perChange, minTranslateYPosition, maxTranslateYPosition) {
  const translateYPosition = getValueBetweenRange(perChange, minTranslateYPosition, maxTranslateYPosition);
  const isCubesYPositionMoreThanMaxValue = translateYPosition >= maxTranslateYPosition;

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
