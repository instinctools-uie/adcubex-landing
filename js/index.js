var advantageSection = window.document.querySelector('.advantage-section');
var expertiseSection = window.document.querySelector('.expertise-section');
var investmentsSection = window.document.querySelector('.investments-section');
var advantageSectionScrollPosition = advantageSection.offsetTop;
var expertiseSectionScrollPosition = expertiseSection.offsetTop;
var investmentsSectionScrollPosition = investmentsSection.offsetTop;

window.addEventListener('scroll', startProject);

window.addEventListener('load', startProject);

function startProject() {
  const scrollPosition = window.pageYOffset;

  if (scrollPosition < advantageSectionScrollPosition) {
    toWhiteColor();
  }

  if (scrollPosition > expertiseSectionScrollPosition) {
    changeMenuItemsColorToWhite();
  }

  if (scrollPosition >= advantageSectionScrollPosition && scrollPosition <= expertiseSectionScrollPosition) {
    changeColorForAdvantageSection(advantageSectionScrollPosition);
  }

  if (scrollPosition > expertiseSectionScrollPosition && scrollPosition <= investmentsSectionScrollPosition) {
    changeColorForExpertiseSection(expertiseSectionScrollPosition);
  }

  if (scrollPosition > investmentsSectionScrollPosition) {
    changeColorForInvestmentsSection(investmentsSectionScrollPosition);
  }

  toggleCube();
  toggleCubes();
  toggleTextOfSection();
}
