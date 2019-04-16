var advantageSection = window.document.querySelector('.advantage-section');
var expertiseSection = window.document.querySelector('.expertise-section');
var investmentsSection = window.document.querySelector('.investments-section');
var advantageSectionScrollPosition = advantageSection.offsetTop;
var expertiseSectionScrollPosition = expertiseSection.offsetTop;
var investmentsSectionScrollPosition = investmentsSection.offsetTop;

const sections = window.document.querySelectorAll('.section-container');
for (let i = 0; i < sections.length; i++) {
  sections[i].classList.add('section-container--active');
}

window.addEventListener('scroll', initProject);

window.addEventListener('load', initProject);

function initProject() {
  const scrollPosition = window.pageYOffset;

  if (scrollPosition < advantageSectionScrollPosition) {
    // changeBackgroundColorToWhite();
    changeCubeColorToDefault();
  }

  if (scrollPosition > expertiseSectionScrollPosition) {
    // changeMenuItemsColorToWhite();
  }

  if (scrollPosition >= advantageSectionScrollPosition && scrollPosition <= expertiseSectionScrollPosition) {
    // changeColorForAdvantageSection(advantageSectionScrollPosition);
  }

  if (scrollPosition > expertiseSectionScrollPosition && scrollPosition <= investmentsSectionScrollPosition) {
    // changeColorForExpertiseSection(expertiseSectionScrollPosition);
  }

  if (scrollPosition > investmentsSectionScrollPosition) {
    // changeColorForInvestmentsSection(investmentsSectionScrollPosition);
  }

  if (scrollPosition > expertiseSectionScrollPosition - 20) {
    // changeActiveMenuItemToBlack();
  }

  if (scrollPosition < expertiseSectionScrollPosition - 20) {
    // changeActiveMenuItemToRed();
  }

  toggleCube();
  toggleCubes();
  //toggleTextOfSection();
}
