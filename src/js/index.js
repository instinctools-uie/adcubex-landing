(function(window) {
  const advantageSection = window.document.querySelector('.advantage-section');
  const budgetSection = window.document.querySelector('.budget-section');
  const controlSection = window.document.querySelector('.control-section');
  const toolsetSection = window.document.querySelector('.toolset-section');
  const advantageSectionScrollPosition = advantageSection.offsetTop;
  const budgetSectionScrollPosition = budgetSection.offsetTop;
  const controlSectionScrollPosition = controlSection.offsetTop;
  const toolsetSectionScrollPosition = toolsetSection.offsetTop;

  initProject();

  window.addEventListener('scroll', initProject);

  function initProject() {
    const scrollPosition = window.pageYOffset;

    if (scrollPosition < advantageSectionScrollPosition) {
      window.AdCubex.changeBackgroundColorToWhite();
      window.AdCubex.changeCubeColorToDefault();
    }

    if (scrollPosition > budgetSectionScrollPosition && scrollPosition < toolsetSectionScrollPosition) {
      window.AdCubex.changeMenuItemsColorToWhite();
    }

    if (scrollPosition >= advantageSectionScrollPosition && scrollPosition <= budgetSectionScrollPosition) {
      window.AdCubex.changeColorForBudgetSection(advantageSectionScrollPosition);
    }

    if (scrollPosition > budgetSectionScrollPosition && scrollPosition <= controlSectionScrollPosition) {
      window.AdCubex.changeColorForExpertiseSection(budgetSectionScrollPosition);
    }

    if (scrollPosition > controlSectionScrollPosition && scrollPosition <= toolsetSectionScrollPosition) {
      window.AdCubex.changeColorForInvestmentsSection(controlSectionScrollPosition);
    }

    if (scrollPosition > toolsetSectionScrollPosition) {
      window.AdCubex.changeBackgroundColorToWhite();
      window.AdCubex.changeMenuItemsColorToBlack();
      window.AdCubex.changeCubeColorToDefault();
    }

    //TODO: Find solution for remove "20"
    if (scrollPosition > budgetSectionScrollPosition - 20) {
      window.AdCubex.changeActiveMenuItemToBlack();
    }
    //
    //TODO: Find solution for remove "20"
    if (scrollPosition < budgetSectionScrollPosition - 20) {
      window.AdCubex.changeActiveMenuItemToRed();
    }

    window.AdCubex.toggleCube();
    window.AdCubex.toggleCubes();
    window.AdCubex.toggleTextOfSection();
  }
})(window);
