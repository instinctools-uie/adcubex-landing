const redBackgroundColor = { red: 240, green: 62, blue: 62 };
const blueBackgroundColor = { red: 75, green: 84, blue: 242 };
const bodyElement = { selector: 'body', property: 'backgroundColor' };
const cubeElement = { selector: '.cube', property: 'fill' };

function toWhiteColor() {
  document.querySelector(bodyElement.selector).style.backgroundColor = `rgb(255, 255, 255)`;
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

  for (let i = 0; i < selectorsArr.length; i++) {
    const el = document.querySelectorAll(selectorsArr[i].selector);
    if (el.length > 1) {
      for (let j = 0; j < el.length; j++) {
        el[j].style[selectorsArr[i].property] = `rgb(${currentColor.red}, ${currentColor.green}, ${currentColor.blue})`;
      }
    } else {
      el[0].style[selectorsArr[i].property] = `rgb(${currentColor.red}, ${currentColor.green}, ${currentColor.blue})`;
    }
  }
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
