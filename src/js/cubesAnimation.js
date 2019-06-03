import { RATE_WSXGA_SCROLL, RATE_WSGA_SCROLL, MAIN_CUBE_OPTIONS, CUBES_OPTIONS } from './constants';
import isWSXGABreakpoint from './isWSXGABreakpoint';
import getScrollPosition from './getScrollPosition';

const mainCubeScaleAnimationElement = document.querySelector('#main-cube-scale-animation');
const cubesTranslateElements = document.querySelectorAll('.cube-translate');
const mainCubeForTranslateAnimation = window.document.querySelector('#main-cube-translate-animation');

const changeScroll = isWSXGABreakpoint() ? RATE_WSXGA_SCROLL : RATE_WSGA_SCROLL;

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
  const scrolled = getScrollPosition();
  const perChange = (scrolled - sectionScrollPosition) / changeScroll;

  mainCubeAnimation(perChange);
}

export function transformMainCubeToDefaultSize(sectionScrollPosition) {
  const scrolled = getScrollPosition();
  const highRatio = 0.8;
  const perChange = highRatio - (scrolled - sectionScrollPosition) / changeScroll;

  mainCubeAnimation(perChange);
}

export function mainCubeToDefaultSize() {
  const transform = 'translate(0px, 0px) scale(1)';

  if (mainCubeScaleAnimationElement.style.transform !== transform) {
    mainCubeScaleAnimationElement.style.transform = transform;
    mainCubeForTranslateAnimation.style.animationDuration = `${MAIN_CUBE_OPTIONS.animationDuration}s`;
  }
}

function mainCubeAnimation(perChange) {
  const { maxScaleValue, minScaleValue, animationDuration } = MAIN_CUBE_OPTIONS;
  const cubeScale = getValueBetweenRange(perChange, minScaleValue, maxScaleValue);

  const isCubeScaled = cubeScale > minScaleValue;
  const duration = isCubeScaled ? '0s' : `${animationDuration}s`;
  const scale = `scale(${cubeScale})`;

  if (mainCubeForTranslateAnimation.style.animationDuration !== duration) {
    mainCubeForTranslateAnimation.style.animationDuration = duration;
  }

  if (mainCubeScaleAnimationElement.style.transform !== scale) {
    mainCubeScaleAnimationElement.style.transform = scale;
  }
}

export function moveCubesToTopForWhiteSections(sectionScrollPosition, rateChangeScroll) {
  const scrolled = getScrollPosition();
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
  const scrolled = getScrollPosition();
  const { maxTranslateYPosition, maxTranslateYWhenScrollOnWhiteSections } = CUBES_OPTIONS;
  const minTranslateYPosition = maxTranslateYWhenScrollOnWhiteSections;
  const perChange = (scrolled - sectionScrollPosition) / changeScroll;

  cubesAnimation(perChange, minTranslateYPosition, maxTranslateYPosition);
}

export function moveCubesToDefaultPosition(sectionScrollPosition) {
  const scrolled = getScrollPosition();
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
  for (let i = 0; i < cubesTranslateElements.length; i++) {
    const translate = `translate(0px, -${translateYPosition}px)`;
    if (cubesTranslateElements[i].style.transform !== translate) {
      cubesTranslateElements[i].style.transform = translate;
    }
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
