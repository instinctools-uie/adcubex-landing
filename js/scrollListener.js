var advantageSection = window.document.querySelector('.advantage-section');
var expertiseSection = window.document.querySelector('.expertise-section');
var investmentsSection = window.document.querySelector('.investments-section');
var advantageSectionScrollPosition = advantageSection.offsetTop;
var expertiseSectionScrollPosition = expertiseSection.offsetTop;
var investmentsSectionScrollPosition = investmentsSection.offsetTop;

window.addEventListener('scroll', function() {
  const scrollPosition = window.pageYOffset;

  if (scrollPosition >= advantageSectionScrollPosition && scrollPosition <= expertiseSectionScrollPosition) {
    changeColorForAdvantageSection();

    toggleCubesOpacity();
  }

  if (scrollPosition > expertiseSectionScrollPosition) {
    hideCubes();
  }

  if (scrollPosition > expertiseSectionScrollPosition && scrollPosition <= investmentsSectionScrollPosition) {
      changeColorForExpertiseSection();
  }


  if (scrollPosition > investmentsSectionScrollPosition) {
      changeColorForInvestmentsSection();

      toggleTextOfSection();
  }
});
