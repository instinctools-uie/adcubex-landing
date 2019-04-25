import { RATE_CHANGE_SCROLL } from './constants';

export function scrollParallaxBgLetters(section, element, prevSection) {
  const finish = -1000;
  const start = 1000;

  const scrolled = window.pageYOffset;
  const startScrolling = prevSection + (section - prevSection) / 2;
  const perChange = (scrolled - startScrolling) / RATE_CHANGE_SCROLL;

  const topValue = start - (start - finish) * perChange;
  element.style.transform = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ${topValue}, 0, 1)`;
}

export function scrollParallaxPattern(element, section) {
  const finish = -1200;
  const start = -200;

  const scrolled = window.pageYOffset;
  const perChange = (scrolled - section) / RATE_CHANGE_SCROLL;

  const topValue = start - (start - finish) * perChange;

  element.style.transform = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ${topValue}, 0, 1)`;
}
