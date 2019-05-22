import toggleMenu from '../toggleMenu';
import hoverLinkInMenu from '../hoverLinkInMenu';
import toggleCheckbox from './checkboxHandler';
import changeHeaderVisibility from '../menuAnimation';

toggleMenu();
toggleCheckbox();
hoverLinkInMenu();

let scrollPreviousPosition = 0;
window.addEventListener('scroll', () => {
  const currentPosition = window.pageYOffset;
  changeHeaderVisibility(scrollPreviousPosition, currentPosition);
  scrollPreviousPosition = currentPosition;
});
