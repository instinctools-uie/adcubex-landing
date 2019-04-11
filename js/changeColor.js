const redBackgroundColor = { red: 240, green: 62, blue: 62 };
const blueBackgroundColor = { red: 75, green: 84, blue: 242 };
const bodyElement = { selector: 'body', property: 'backgroundColor' };
const cubeElement = { selector: '.cube', property: 'fill' };

function toWhiteColor() {
  document.querySelector(bodyElement.selector).style.backgroundColor = `rgb(255, 255, 255)`;
}

function changeSelectorElementsProperty(selectorsArr, currentColor) {
  for (let i = 0; i < selectorsArr.length; i++) {
    const selectorElements = document.querySelectorAll(selectorsArr[i].selector);
    for (let j = 0; j < selectorElements.length; j++) {
      selectorElements[j].style[selectorsArr[i].property] = `rgb(${currentColor.red}, ${currentColor.green}, ${
        currentColor.blue
      })`;
    }
  }
}

function changeColor(fromColor, toColor, selectorsArr, startPosition) {
  const perChange = (window.pageYOffset - startPosition) / 960;
  const currentColor = { red: 0, green: 0, blue: 0 };

  for (let key in currentColor) {
    currentColor[key] =
      fromColor[key] > toColor[key]
        ? Math.round(fromColor[key] - (fromColor[key] - toColor[key]) * perChange)
        : Math.round(fromColor[key] + (toColor[key] - fromColor[key]) * perChange);
  }

  changeSelectorElementsProperty(selectorsArr, currentColor);
}

function changeColorForAdvantageSection(advantageSectionScrollPosition) {
  const whiteColor = { red: 255, green: 255, blue: 255 };
  const blackColor = { red: 0, green: 0, blue: 0 };
  const redLogoColor = { red: 237, green: 28, blue: 36 };

  const menuItem = { selector: '.menu-container > .link', property: 'color' };
  changeColor(blackColor, whiteColor, [menuItem], advantageSectionScrollPosition);

  const menuButtonElement = { selector: '.menu-button > svg', property: 'fill' };
  const logoElement = { selector: '.logo-container > svg', property: 'fill' };

  changeColor(whiteColor, redBackgroundColor, [bodyElement, cubeElement], advantageSectionScrollPosition);

  changeColor(blackColor, whiteColor, [menuButtonElement], advantageSectionScrollPosition);

  changeColor(redLogoColor, whiteColor, [logoElement], advantageSectionScrollPosition);
}

function changeColorForExpertiseSection(expertiseSectionScrollPosition) {
  changeColor(redBackgroundColor, blueBackgroundColor, [bodyElement, cubeElement], expertiseSectionScrollPosition);
}

function changeColorForInvestmentsSection(investmentsSectionScrollPosition) {
  const purpleBackgroundColor = { red: 157, green: 55, blue: 227 };

  changeColor(blueBackgroundColor, purpleBackgroundColor, [bodyElement, cubeElement], investmentsSectionScrollPosition);
}

function changeMenuItemsColorToWhite() {
  document.querySelectorAll('.menu-container > .link').forEach(function(item) {
    item.style.color = 'white';
  });
}
