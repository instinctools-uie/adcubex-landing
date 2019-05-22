import toggleMenu from '../toggleMenu';
import hoverLinkInMenu from '../hoverLinkInMenu';
import toggleContentByScroll from '../toggleContentByScroll';
import { INNER_PAGES_TOGGLE_CONTENT } from '../constants';
import changeHeaderVisibility from '../menuAnimation';

let scrollPreviousPosition = 0;

toggleMenu();
hoverLinkInMenu();

window.addEventListener('scroll', () => {
  toggleContentByScroll(INNER_PAGES_TOGGLE_CONTENT.sectionContainer, INNER_PAGES_TOGGLE_CONTENT.delayBetweenSection);

  const scrollCurrentPosition = window.pageYOffset;
  changeHeaderVisibility(scrollPreviousPosition, scrollCurrentPosition);
  scrollPreviousPosition = scrollCurrentPosition;
});
