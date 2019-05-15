import toggleMenu from '../toggleMenu';
import hoverLinkInMenu from '../hoverLinkInMenu';
import changeMenuColor from './changeColorInnerMenu';
import toggleSections from '../toggleContentByScroll';
import { INNER_PAGE_DELAY_BETWEEN_SECTION } from '../constants';

toggleMenu();
hoverLinkInMenu();
changeMenuColor();

window.addEventListener('scroll', () => {
  toggleSections('article', INNER_PAGE_DELAY_BETWEEN_SECTION);
});
