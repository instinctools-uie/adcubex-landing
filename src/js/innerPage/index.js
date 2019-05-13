import toggleMenu from '../toggleMenu';
import hoverLinkInMenu from '../hoverLinkInMenu';
import changeMenuColor from './changeColorInnerMenu';
import toggleSections from './toggleInnerTextOfArticles';

toggleMenu();
hoverLinkInMenu();
changeMenuColor();

window.addEventListener('scroll', () => {
  toggleSections(20);
});
