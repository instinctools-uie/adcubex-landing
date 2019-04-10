var advantageSection = window.document.querySelector('.advantage-section');
var expertiseSection = window.document.querySelector('.expertise-section');
var investmentsSection = window.document.querySelector('.investments-section');
var advantageSectionScrollPosition = advantageSection.offsetTop;
var expertiseSectionScrollPosition = expertiseSection.offsetTop;
var investmentsSectionScrollPosition = investmentsSection.offsetTop;

window.addEventListener('scroll', function() {
  const scrollPosition = window.pageYOffset;

  const white = { red: 255, green: 255, blue: 255 };
  const black = { red: 0, green: 0, blue: 0 };
  const redBackground = { red: 240, green: 62, blue: 62 };
  const blueBackground = { red: 75, green: 84, blue: 242 };
  const purpleBackground = { red: 157, green: 55, blue: 227 };
  const redLogo = { red: 237, green: 28, blue: 36 };

  const bodyElement = { selector: 'body', property: 'backgroundColor' };
  const cubeElement = { selector: '.cube', property: 'fill' };
  const menuElement = { selector: '.menu-container', property: 'color' };
  const menuButtonElement = { selector: '.menu-button > svg', property: 'fill' };
  const logoElement = { selector: '.logo-container > svg', property: 'fill' };

  if (scrollPosition >= advantageSectionScrollPosition && scrollPosition <= expertiseSectionScrollPosition) {
    changeColor(white, redBackground, [bodyElement, cubeElement], advantageSectionScrollPosition);

    changeColor(black, white, [menuElement, menuButtonElement], advantageSectionScrollPosition);

    changeColor(redLogo, white, [logoElement], advantageSectionScrollPosition);

    toggleCubesOpacity();
  }

  if (scrollPosition > expertiseSectionScrollPosition) {
    hideCubes();
  }

  if (scrollPosition > expertiseSectionScrollPosition && scrollPosition <= investmentsSectionScrollPosition) {
    changeColor(redBackground, blueBackground, [bodyElement, cubeElement], expertiseSectionScrollPosition);
  }

  if (scrollPosition > investmentsSectionScrollPosition) {
    changeColor(blueBackground, purpleBackground, [bodyElement, cubeElement], investmentsSectionScrollPosition);
  }

  toggleTextOfSection();
});
