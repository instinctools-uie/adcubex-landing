import { RATE_CHANGE_SCROLL } from './constants';

const finish = -1000;
const start = 1000;

export function scrollParallaxBgLetters(section, element, prevSection) {
  const scrolled = window.pageYOffset;
  const startScrolling = prevSection + (section - prevSection) / 2;
  const perChange = (scrolled - startScrolling) / RATE_CHANGE_SCROLL;

  const topValue = start - (start - finish) * perChange;
  element.style.transform = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ${topValue}, 0, 1)`;
}

export function scrollParallaxPattern() {}
