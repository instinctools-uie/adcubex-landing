const cubes = [
  {
    width: 514,
    height: 541,
    top: -150,
    left: 750,
    zIndex: 999,
    animationDuration: 2
  },
  {
    width: 512,
    height: 539,
    top: -280,
    left: 440,
    zIndex: 999,
    animationDuration: 2.6
  },
  {
    width: 354,
    height: 367,
    top: 175,
    left: 510,
    zIndex: 0,
    animationDuration: 1.9
  },
  {
    width: 518,
    height: 546,
    top: -300,
    left: 90,
    zIndex: 999,
    animationDuration: 2.5
  },
  {
    width: 455,
    height: 478,
    top: -50,
    left: 270,
    zIndex: 2,
    animationDuration: 2.5
  },
  {
    width: 340,
    height: 360,
    top: 270,
    left: 400,
    zIndex: 0,
    animationDuration: 1.5
  },
  {
    width: 346,
    height: 364,
    top: 200,
    left: 0,
    zIndex: 0,
    animationDuration: 1.7
  },
  {
    width: 440,
    height: 463,
    top: -210,
    left: -80,
    zIndex: 0,
    animationDuration: 3
  },
  {
    width: 277,
    height: 289,
    top: -10,
    left: -320,
    zIndex: 0,
    animationDuration: 2
  },
  {
    width: 177,
    height: 186,
    top: -70,
    left: -620,
    zIndex: 0,
    animationDuration: 1.3
  }
];

function initCubix() {
  const images = window.document.querySelectorAll('.image');
  images.forEach(function(image, i) {
    image.style.height = cubes[i].height + 'px';
    image.style.width = cubes[i].width + 'px';
    image.style.top = cubes[i].top + 'px';
    image.style.left = cubes[i].left + 'px';
    image.style.zIndex = cubes[i].zIndex;
    image.style.animationDuration = cubes[i].animationDuration + 's';
  });
}

function stretchSquare() {
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
  // stretchSquare();
  showOrHideTextOfSection();
});

initCubix();
