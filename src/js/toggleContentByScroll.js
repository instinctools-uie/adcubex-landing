import getScrollPosition from './getScrollPosition';

export default function toggleContentByScroll(selector, delay) {
  const scrolled = getScrollPosition();
  const sections = window.document.querySelectorAll(`.${selector}`);

  for (let i = 0; i < sections.length; i++) {
    const nextSection = sections[i + 1];
    const scrollPositionOfCurrentSection = sections[i].offsetTop;
    const scrollPositionOfNextSection = nextSection ? nextSection.offsetTop : document.documentElement.scrollHeight;
    const scrollDifferenceBetweenSections = scrollPositionOfNextSection - scrollPositionOfCurrentSection;
    const scrollDelay = scrollDifferenceBetweenSections / delay;
    const scrollPositionWhenShouldToggleText = scrollDelay + scrollPositionOfCurrentSection;

    if (scrolled > scrollPositionWhenShouldToggleText) {
      nextSection && nextSection.classList.add(`${selector}--active`);
    } else if (scrolled > scrollPositionOfCurrentSection) {
      sections[i].classList.add(`${selector}--active`);
    }
  }
}
