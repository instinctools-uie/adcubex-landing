import { RATE_CHANGE_SCROLL } from './constants';

export function scrollParallaxBgLetters(element, section, prevSection) {
  const start = 200;
  const finish = -200;

  const scrolled = window.pageYOffset;
  const startScrolling = prevSection + (section - prevSection) / 2;
  const perChange = (scrolled - startScrolling) / RATE_CHANGE_SCROLL;

  const translateYValue = start - (start - finish) * perChange;

  element.style.display = 'block';
  element.style.transform = `translate(0px, ${translateYValue}px)`;
}

export function sectionImageParallax(element, startPosition) {
  const start = 500;
  const finish = -800;

  const scrolled = window.pageYOffset;
  const perChange = (scrolled - startPosition) / RATE_CHANGE_SCROLL;
  const translateYValue = start - (start - finish) * perChange;

  element.style.display = 'block';
  element.style.transform = `translate(0px, ${translateYValue}px)`;
}
