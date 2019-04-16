//  TODO: Need find solution for correctly toggle text when zoom

export function toggleTextOfSection() {
  const scrolled = window.pageYOffset;
  const sections = window.document.querySelectorAll('.section-container');

  for (let i = 0; i < sections.length; i++) {
    const currentSection = sections[i];
    const nextSection = sections[i + 1];
    const scrollPositionOfCurrentSection = currentSection.offsetTop;
    const scrollPositionOfNextSection = nextSection ? nextSection.offsetTop : document.documentElement.scrollHeight;
    const scrollDifferenceBetweenSections = scrollPositionOfNextSection - scrollPositionOfCurrentSection;
    const scrollHalfOfDifferenceBetweenSections = scrollDifferenceBetweenSections / 2;
    const scrollPositionWhenShouldToggleText = scrollHalfOfDifferenceBetweenSections + scrollPositionOfCurrentSection;

    if (scrolled > scrollPositionWhenShouldToggleText && scrolled < scrollPositionOfNextSection) {
      nextSection.classList.add('section-container--active');
      currentSection.classList.remove('section-container--active');
    } else if (scrolled < scrollPositionWhenShouldToggleText && scrolled > scrollPositionOfCurrentSection) {
      currentSection.classList.add('section-container--active');
      nextSection.classList.remove('section-container--active');
    }
  }
}
