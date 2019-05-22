import toggleMenu from '../toggleMenu';
import hoverLinkInMenu from '../hoverLinkInMenu';
import toggleCheckbox from './checkboxHandler';
import changeHeaderVisibility from '../menuAnimation';

let scrollPreviousPosition = 0;

toggleMenu();
toggleCheckbox();
hoverLinkInMenu();

window.addEventListener('scroll', () => {
  const scrollCurrentPosition = window.pageYOffset;
  changeHeaderVisibility(scrollPreviousPosition, scrollCurrentPosition);
  scrollPreviousPosition = scrollCurrentPosition;
});
