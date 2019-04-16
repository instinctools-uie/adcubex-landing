(function(AdCubex) {
  const advantageSection = window.document.querySelector('.advantage-section');
  const expertiseSection = window.document.querySelector('.expertise-section');
  const investmentsSection = window.document.querySelector('.investments-section');
  const advantageSectionScrollPosition = advantageSection.offsetTop;
  const expertiseSectionScrollPosition = expertiseSection.offsetTop;
  const investmentsSectionScrollPosition = investmentsSection.offsetTop;

  initProject();

  window.addEventListener('scroll', initProject);

  function initProject() {
    const scrollPosition = window.pageYOffset;

    if (scrollPosition < advantageSectionScrollPosition) {
      AdCubex.changeBackgroundColorToWhite();
      AdCubex.changeCubeColorToDefault();
    }

    if (scrollPosition > expertiseSectionScrollPosition) {
      AdCubex.changeMenuItemsColorToWhite();
    }

    if (scrollPosition >= advantageSectionScrollPosition && scrollPosition <= expertiseSectionScrollPosition) {
      AdCubex.changeColorForAdvantageSection(advantageSectionScrollPosition);
    }

    if (scrollPosition > expertiseSectionScrollPosition && scrollPosition <= investmentsSectionScrollPosition) {
      AdCubex.changeColorForExpertiseSection(expertiseSectionScrollPosition);
    }

    if (scrollPosition > investmentsSectionScrollPosition) {
      AdCubex.changeColorForInvestmentsSection(investmentsSectionScrollPosition);
    }

    if (scrollPosition > expertiseSectionScrollPosition - 20) {
      AdCubex.changeActiveMenuItemToBlack();
    }

    if (scrollPosition < expertiseSectionScrollPosition - 20) {
      AdCubex.changeActiveMenuItemToRed();
    }

    AdCubex.toggleCube();
    AdCubex.toggleCubes();
    AdCubex.toggleTextOfSection();
  }
})(AdCubex);
