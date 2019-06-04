import { toggleMenuListener, navItemHandler } from '../toggleMenu';
import hoverLinkInMenu from '../hoverLinkInMenu';
import toggleContentByScroll from '../toggleContentByScroll';
import { INNER_PAGES_TOGGLE_CONTENT } from '../constants';
import changeHeaderVisibility from '../menuAnimation';
import getScrollPosition from '../getScrollPosition';

let scrollPreviousPosition = 0;

toggleMenuListener();
navItemHandler();
hoverLinkInMenu();

window.addEventListener('scroll', () => {
  const scrolled = getScrollPosition();

  toggleContentByScroll(INNER_PAGES_TOGGLE_CONTENT.sectionContainer, INNER_PAGES_TOGGLE_CONTENT.delayBetweenSection);

  changeHeaderVisibility(scrollPreviousPosition, scrolled);
  scrollPreviousPosition = scrolled;
});
