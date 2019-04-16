(function(window) {
  window.AdCubex.toggleTextOfSection = function() {
    const scrolled = document.scrollingElement.scrollTop;
    const sections = window.document.querySelectorAll('.section-container');
    const ratePositionBeforeSection = 600;
    const ratePositionAfterSection = 350;

    for (let i = 0; i < sections.length; i++) {
      const position = sections[i].offsetTop;
      const positionOfScrollBeforeSection = position - ratePositionBeforeSection;
      const positionOfScrollAfterSection = position + ratePositionAfterSection;
      const isScrollOnSection = scrolled > positionOfScrollBeforeSection && scrolled < positionOfScrollAfterSection;
      const isActiveSection = sections[i].classList.contains('section-container--active');

      if (isScrollOnSection && !isActiveSection) {
        sections[i].classList.add('section-container--active');
      } else if (!isScrollOnSection && isActiveSection) {
        sections[i].classList.remove('section-container--active');
      }
    }
  };
})(window);
