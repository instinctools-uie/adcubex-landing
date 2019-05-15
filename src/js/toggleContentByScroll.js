export default function toggleTextOfSection(selector, delay) {
  const scrolled = window.pageYOffset;
  const sections = window.document.querySelectorAll('.' + selector.toString());
  const indexOfLastSection = sections.length - 1;

  sections.forEach((section, index) => {
    const nextSection = sections[index + 1];
    const scrollPositionOfCurrentSection = section.offsetTop;
    const scrollPositionOfNextSection = nextSection ? nextSection.offsetTop : document.documentElement.scrollHeight;
    const scrollDifferenceBetweenSections = scrollPositionOfNextSection - scrollPositionOfCurrentSection;
    const scrollHalfOfDifferenceBetweenSections = scrollDifferenceBetweenSections / delay;
    const scrollPositionWhenShouldToggleText = scrollHalfOfDifferenceBetweenSections + scrollPositionOfCurrentSection;
    const isLastSection = index === indexOfLastSection;

    if (scrolled > scrollPositionWhenShouldToggleText && scrolled < scrollPositionOfNextSection) {
      nextSection && nextSection.classList.add(selector.toString() + '--active');
      !isLastSection && section.classList.remove(selector.toString() + '--active');
    } else if (scrolled < scrollPositionWhenShouldToggleText && scrolled > scrollPositionOfCurrentSection) {
      section.classList.add(selector.toString() + '--active');
      nextSection && nextSection.classList.remove(selector.toString() + '--active');
    }
  });
}
