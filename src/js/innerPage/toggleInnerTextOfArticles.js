export default function toggleTextOfSection(delay) {
  const scrolled = window.pageYOffset;
  const sections = window.document.querySelectorAll('article');
  const indexOfLastSection = sections.length - 1;

  sections.forEach((section, index) => {
    const nextSection = sections[index + 1];
    const scrollPositionOfCurrentSection = section.offsetTop;
    const scrollPositionOfNextSection = nextSection ? nextSection.offsetTop : document.documentElement.scrollHeight;
    const scrollDifferenceBetweenSections = scrollPositionOfNextSection - scrollPositionOfCurrentSection;
    const scrollDelay = scrollDifferenceBetweenSections / delay;
    const scrollPositionWhenShouldToggleText = scrollDelay + scrollPositionOfCurrentSection;
    const isLastSection = index === indexOfLastSection;

    if (scrolled > scrollPositionWhenShouldToggleText && scrolled < scrollPositionOfNextSection) {
      nextSection && nextSection.classList.add('article--active');
      !isLastSection && section.classList.remove('article--active');
    } else if (scrolled < scrollPositionWhenShouldToggleText && scrolled > scrollPositionOfCurrentSection) {
      section.classList.add('article--active');
      nextSection && nextSection.classList.remove('article--active');
    }
  });
}
