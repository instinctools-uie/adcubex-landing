import toggleMenu from '../toggleMenu';
import hoverLinkInMenu from '../hoverLinkInMenu';
import changeMenuColor from './changeColorInnerMenu';
import toggleSections from './toggleInnerTextOfArticles';
import { INNER_PAGE_DELAY_BETWEEN_SECTION } from '../constants';

toggleMenu();
hoverLinkInMenu();
changeMenuColor();

window.addEventListener('scroll', () => {
  toggleSections(INNER_PAGE_DELAY_BETWEEN_SECTION);
});
