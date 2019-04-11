const redBackground = { red: 240, green: 62, blue: 62 };
const blueBackground = { red: 75, green: 84, blue: 242 };
const bodyElement = { selector: 'body', property: 'backgroundColor' };
const cubeElement = { selector: '.cube', property: 'fill' };

function changeColor(fromColor, toColor, selectorsArr, startPosition) {
  const perChange = (window.pageYOffset - startPosition) / 960;
  const currentColor = { red: 0, green: 0, blue: 0 };

  for (let key in currentColor) {
    currentColor[key] =
      sourceColor[key] > targetColor[key]
        ? Math.round(sourceColor[key] - (sourceColor[key] - targetColor[key]) * perChange)
        : Math.round(sourceColor[key] + (targetColor[key] - sourceColor[key]) * perChange);
  }

  for (let i = 0; i < selectorsArr.length; i++) {
    const el = document.querySelector(selectorsArr[i].selector);
    el.style[selectorsArr[i].property] = `rgb(${currentColor.red}, ${currentColor.green}, ${currentColor.blue})`;
  }
}

function changeColorForAdvantageSection() {
  const white = { red: 255, green: 255, blue: 255 };
  const black = { red: 0, green: 0, blue: 0 };
  const redLogo = { red: 237, green: 28, blue: 36 };

  const menuElement = { selector: '.menu-container', property: 'color' };
  const menuButtonElement = { selector: '.menu-button > svg', property: 'fill' };
  const logoElement = { selector: '.logo-container > svg', property: 'fill' };

  changeColor(white, redBackground, [bodyElement, cubeElement], advantageSectionScrollPosition);

  changeColor(black, white, [menuElement, menuButtonElement], advantageSectionScrollPosition);

  changeColor(redLogo, white, [logoElement], advantageSectionScrollPosition);
}

function changeColorForExpertiseSection() {
  changeColor(redBackground, blueBackground, [bodyElement, cubeElement], expertiseSectionScrollPosition);
}

function changeColorForInvestmentsSection() {
  const purpleBackground = { red: 157, green: 55, blue: 227 };

  changeColor(blueBackground, purpleBackground, [bodyElement, cubeElement], investmentsSectionScrollPosition);
}
