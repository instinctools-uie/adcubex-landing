(function(window) {
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
      window.AdCubex.changeBackgroundColorToWhite();
      window.AdCubex.changeCubeColorToDefault();
    }

    if (scrollPosition > expertiseSectionScrollPosition) {
      window.AdCubex.changeMenuItemsColorToWhite();
    }

    if (scrollPosition >= advantageSectionScrollPosition && scrollPosition <= expertiseSectionScrollPosition) {
      window.AdCubex.changeColorForAdvantageSection(advantageSectionScrollPosition);
    }

    if (scrollPosition > expertiseSectionScrollPosition && scrollPosition <= investmentsSectionScrollPosition) {
      window.AdCubex.changeColorForExpertiseSection(expertiseSectionScrollPosition);
    }

    if (scrollPosition > investmentsSectionScrollPosition) {
      window.AdCubex.changeColorForInvestmentsSection(investmentsSectionScrollPosition);
    }

    //TODO: Find solution for remove "20"
    if (scrollPosition > expertiseSectionScrollPosition - 20) {
      window.AdCubex.changeActiveMenuItemToBlack();
    }

    //TODO: Find solution for remove "20"
    if (scrollPosition < expertiseSectionScrollPosition - 20) {
      window.AdCubex.changeActiveMenuItemToRed();
    }

    window.AdCubex.toggleCube();
    window.AdCubex.toggleCubes();
    window.AdCubex.toggleTextOfSection();
  }
})(window);
