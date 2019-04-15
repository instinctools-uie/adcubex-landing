var advantageSection = window.document.querySelector('.advantage-section');
var expertiseSection = window.document.querySelector('.expertise-section');
var investmentsSection = window.document.querySelector('.investments-section');
var advantageSectionScrollPosition = advantageSection.offsetTop;
var expertiseSectionScrollPosition = expertiseSection.offsetTop;
var investmentsSectionScrollPosition = investmentsSection.offsetTop;

window.addEventListener('scroll', function() {
  const scrollPosition = window.pageYOffset;

  if (scrollPosition < advantageSectionScrollPosition) {
    toWhiteColor();
  }

  if (scrollPosition > expertiseSectionScrollPosition) {
    changeMenuItemsColorToWhite();
  }

  if (scrollPosition >= advantageSectionScrollPosition && scrollPosition <= expertiseSectionScrollPosition) {
    changeColorForAdvantageSection(advantageSectionScrollPosition);

    toggleCubesOpacity();
  }

  if (scrollPosition > expertiseSectionScrollPosition) {
    hideCubes();
  }

  if (scrollPosition > expertiseSectionScrollPosition && scrollPosition <= investmentsSectionScrollPosition) {
    changeColorForExpertiseSection(expertiseSectionScrollPosition);
  }

  if (scrollPosition > investmentsSectionScrollPosition) {
    changeColorForInvestmentsSection(investmentsSectionScrollPosition);
  }

  if (scrollPosition > expertiseSectionScrollPosition - 20) {
    changeActiveMenuItemToBlack();
  }

  if (scrollPosition < expertiseSectionScrollPosition - 20) {
    changeActiveMenuItemToRed();
  }

  toggleTextOfSection();
});
