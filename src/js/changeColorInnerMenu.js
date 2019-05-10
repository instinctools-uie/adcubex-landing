const contentSection = document.querySelector('.content-section');

const menuButton = document.querySelector('.header-open-menu-icon');
const logo = document.querySelector('#Logo_dark_curves');

const widthToChangeMenuColor = 1730;
const menuCrossContentSection = 70;

function changeMenuColor() {
  const viewWidth = document.documentElement.clientWidth;
  const topCoordinate = contentSection.getBoundingClientRect().top;

  if (viewWidth < widthToChangeMenuColor && topCoordinate < menuCrossContentSection) {
    menuButton.style.fill = '#353535';
    logo.style.fill = '#353535';
  }

  if (topCoordinate > menuCrossContentSection || viewWidth > widthToChangeMenuColor) {
    menuButton.style.fill = '#ffffff';
    logo.style.fill = '#ffffff';
  }
}

window.addEventListener('scroll', changeMenuColor);

window.addEventListener('resize', changeMenuColor);
