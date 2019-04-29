import { RATE_CHANGE_SCROLL } from './constants';

export function scrollParallaxBgLetters(element, section, prevSection) {
  const start = 1000;
  const finish = -1000;

  const scrolled = window.pageYOffset;
  const startScrolling = prevSection + (section - prevSection) / 2;
  const perChange = (scrolled - startScrolling) / RATE_CHANGE_SCROLL;

  const translateYValue = start - (start - finish) * perChange;

  element.style.display = 'block';
  element.style.transform = `translate(0px, ${translateYValue}px)`;
}

export function scrollParallaxPattern(element, section) {
  const start = 300;
  const finish = -1500;

  const scrolled = window.pageYOffset;
  const perChange = (scrolled - section) / RATE_CHANGE_SCROLL;
  const translateYValue = start - (start - finish) * perChange;

  element.style.display = 'block';
  element.style.transform = `translate(0px, ${translateYValue}px)`;
}
