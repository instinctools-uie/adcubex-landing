import { RATE_WSXGA_SCROLL } from './constants';
import getScrollPosition from './getScrollPosition';

export function sectionImageParallax(element, startPosition) {
  const start = 500;
  const finish = -800;

  const scrolled = getScrollPosition();
  const perChange = (scrolled - startPosition) / RATE_WSXGA_SCROLL;
  const translateYValue = start - (start - finish) * perChange;

  if (element.style.display !== 'block') {
    element.style.display = 'block';
  }
  element.style.transform = `translate(0px, ${translateYValue}px)`;
}
