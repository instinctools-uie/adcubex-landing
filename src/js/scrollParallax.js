import { RATE_CHANGE_SCROLL } from './constants';

export function scrollParallaxBgLetters(element, section, prevSection) {
  const start = 1000;
  const finish = -1000;

  const scrolled = window.pageYOffset;
  const startScrolling = prevSection + (section - prevSection) / 2;
  const perChange = (scrolled - startScrolling) / RATE_CHANGE_SCROLL;

  const transformValue = start - (start - finish) * perChange;

  element.style.display = 'block';
  element.style.transform = `matrix(1, 0, 0, 1, 0, ${transformValue})`;
}

export function scrollParallaxPattern(element, section) {
  const start = 300;
  const finish = -1500;

  const scrolled = window.pageYOffset;
  const perChange = (scrolled - section) / RATE_CHANGE_SCROLL;
  const transformValue = start - (start - finish) * perChange;

  element.style.display = 'block';
  element.style.transform = `matrix(1, 0, 0, 1, 0, ${transformValue})`;
}
