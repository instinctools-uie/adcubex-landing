const contentSection = document.querySelector('.content-section');

const menuButton = document.querySelector('.header-open-menu-icon');
const logo = document.querySelector('#Logo_dark_curves');

function changeMenuColor() {
  const viewWidth = document.documentElement.clientWidth;
  const topCoordinate = contentSection.getBoundingClientRect().top;

  if (viewWidth < 1730 && topCoordinate < 70) {
    menuButton.style.fill = '#353535';
    logo.style.fill = '#353535';
  }

  if (topCoordinate > 70 || viewWidth > 1730) {
    menuButton.style.fill = '#ffffff';
    logo.style.fill = '#ffffff';
  }
}

window.addEventListener('scroll', changeMenuColor);

window.addEventListener('resize', changeMenuColor);
