// TODO: Remove if this section doesn't need for implementation appearance of text
// OLD_TODO: Need find solution for correctly toggle text when zoom

// export function toggleTextOfSection() {
//   const scrolled = window.pageYOffset;
//   const sections = window.document.querySelectorAll('.section-container');
//   const indexOfLastSection = sections.length - 1;
//
//   sections.forEach((section, index) => {
//     const nextSection = sections[index + 1];
//     const scrollPositionOfCurrentSection = section.offsetTop;
//     const scrollPositionOfNextSection = nextSection ? nextSection.offsetTop : document.documentElement.scrollHeight;
//     const scrollDifferenceBetweenSections = scrollPositionOfNextSection - scrollPositionOfCurrentSection;
//     const scrollHalfOfDifferenceBetweenSections = scrollDifferenceBetweenSections / 2;
//     const scrollPositionWhenShouldToggleText = scrollHalfOfDifferenceBetweenSections + scrollPositionOfCurrentSection;
//     const isLastSection = index === indexOfLastSection;
//
//     if (scrolled > scrollPositionWhenShouldToggleText && scrolled < scrollPositionOfNextSection) {
//       nextSection && nextSection.classList.add('section-container--active');
//       !isLastSection && section.classList.remove('section-container--active');
//     } else if (scrolled < scrollPositionWhenShouldToggleText && scrolled > scrollPositionOfCurrentSection) {
//       section.classList.add('section-container--active');
//       nextSection && nextSection.classList.remove('section-container--active');
//     }
//   });
// }
