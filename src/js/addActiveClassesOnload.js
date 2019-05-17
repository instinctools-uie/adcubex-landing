export default function addActiveSections(section) {
  const sections = window.document.querySelectorAll(`.${section}`);
  let currentSectionIndex = null;
  sections.forEach((item, index) => {
    if (item.getBoundingClientRect().top > -26 && item.getBoundingClientRect().top < window.innerHeight) {
      currentSectionIndex = index;
    }
  });

  for (let i = 0; i <= currentSectionIndex; i++) {
    sections[i].classList.add(`${section}--active`);
  }
}
