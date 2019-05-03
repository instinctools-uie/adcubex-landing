const contentSection = document.querySelector('.content-section');

const menuButton = document.querySelector('.header-open-menu-icon');
const logoImg1 = document.querySelector('#logo-AdCubex1');
const logoImg2 = document.querySelector('#logo-AdCubex2');
const logoText = document.querySelector('#when-ad-go-huge');

function changeMenuColor() {
  const viewWidth = document.documentElement.clientWidth;
  const topCoordinate = contentSection.getBoundingClientRect().top;

  // const scrollVal = window.pageYOffset;

  if (viewWidth < 1730 && topCoordinate < 70) {
    menuButton.style.fill = '#353535';
    logoImg1.style.fill = '#353535';
    logoImg2.style.fill = '#353535';
    logoText.style.fill = '#353535';
  }

  if (topCoordinate > 70 || viewWidth > 1730) {
    menuButton.style.fill = '#ffffff';
    logoImg1.style.fill = '#ffffff';
    logoImg2.style.fill = '#ffffff';
    logoText.style.fill = '#ffffff';
  }
}

window.addEventListener('scroll', changeMenuColor);

window.addEventListener('resize', changeMenuColor);
