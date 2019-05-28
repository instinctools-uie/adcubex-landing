import { RATE_WSXGA_SCROLL } from './constants';

export function sectionImageParallax(element, startPosition) {
  const start = 500;
  const finish = -800;

  const scrolled = window.pageYOffset;
  const perChange = (scrolled - startPosition) / RATE_WSXGA_SCROLL;
  const translateYValue = start - (start - finish) * perChange;

  element.style.display = 'block';
  element.style.transform = `translate(0px, ${translateYValue}px)`;
}
