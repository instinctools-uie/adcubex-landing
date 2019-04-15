function toggleTextOfSection() {
  const sections = window.document.querySelectorAll('.section-container');
  if (window.innerHeight <= 1320) {
    for (let i = 0; i < sections.length; i++) {
      const sectionCoordinates = sections[i].getBoundingClientRect();

      const isScrollOnSection = sectionCoordinates.top >= 0 && sectionCoordinates.top <= 0.87 * window.innerHeight;
      const isActiveSection = sections[i].classList.contains('section-container--active');

      if (isScrollOnSection && !isActiveSection) {
        sections[i].classList.add('section-container--active');
      } else if (!isScrollOnSection && isActiveSection) {
        sections[i].classList.remove('section-container--active');
      }
    }
  }

  if (window.innerHeight > 1320) {
    for (let i = 0; i < sections.length; i++) {
      sections[i].classList.add('section-container--active');
    }
  }
}
