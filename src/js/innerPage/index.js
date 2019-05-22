import toggleMenu from '../toggleMenu';
import hoverLinkInMenu from '../hoverLinkInMenu';
import toggleContentByScroll from '../toggleContentByScroll';
import { INNER_PAGES_TOGGLE_CONTENT } from '../constants';
import changeHeaderVisibility from '../menuAnimation';

toggleMenu();
hoverLinkInMenu();

window.addEventListener('scroll', () => {
  toggleContentByScroll(INNER_PAGES_TOGGLE_CONTENT.sectionContainer, INNER_PAGES_TOGGLE_CONTENT.delayBetweenSection);
});

let scrollPreviousPosition = 0;
window.addEventListener('scroll', () => {
  const scrollCurrentPosition = window.pageYOffset;
  changeHeaderVisibility(scrollPreviousPosition, scrollCurrentPosition);
  scrollPreviousPosition = scrollCurrentPosition;
});
