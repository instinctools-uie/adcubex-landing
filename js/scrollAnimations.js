function initCubix() {
  const images = window.document.querySelectorAll('.image');
  images.forEach(function(image, i) {
    image.style.width = cubesPosition[i].width + 'px';
    image.style.top = cubesPosition[i].top + 'px';
    image.style.left = cubesPosition[i].left + 'px';
    image.style.zIndex = cubesPosition[i].zIndex;
  });
}

function stretchCube() {
  const image = window.document.querySelector('.image');
  const minHeght = 544;
  const maxHeight = 915;
  const heightIncreaseByScroll = window.scrollY / 5;
  image.style.height = `${heightIncreaseByScroll + minHeght}px`;
  image.style.minHeight = minHeght + 'px';
  image.style.maxHeight = maxHeight + 'px';
}

function showOrHideTextOfSection() {
  const scrolled = document.scrollingElement.scrollTop;
  const sections = window.document.querySelectorAll('.section-container');

  for (let i = 0; i < sections.length; i++) {
    const position = sections[i].offsetTop;
    const positionOfScrollBeforeSection = position - 600;
    const positionOfScrollAfterSection = position + 350;
    const isScrollOnSection = scrolled > positionOfScrollBeforeSection && scrolled < positionOfScrollAfterSection;
    const isActiveSection = sections[i].classList.contains('section-container--active');

    if (isScrollOnSection && !isActiveSection) {
      sections[i].classList.add('section-container--active');
    } else if (!isScrollOnSection && isActiveSection) {
      sections[i].classList.remove('section-container--active');
    }
  }
}

window.addEventListener('scroll', function() {
  // stretchCube();
  showOrHideTextOfSection();
});

initCubix();
