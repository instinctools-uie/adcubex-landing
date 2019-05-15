export default function toggleContentByScroll(selector, delay) {
  const scrolled = window.pageYOffset;
  const sections = window.document.querySelectorAll(`.${selector}`);
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
      nextSection && nextSection.classList.add(`${selector}--active`);
      !isLastSection && section.classList.remove(`${selector}--active`);
    } else if (scrolled < scrollPositionWhenShouldToggleText && scrolled > scrollPositionOfCurrentSection) {
      section.classList.add(`${selector}--active`);
      nextSection && nextSection.classList.remove(`${selector}--active`);
    }
  });
}
