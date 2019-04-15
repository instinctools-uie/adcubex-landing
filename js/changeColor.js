const bodyElement = { selector: 'body', property: 'backgroundColor' };
const cubeElement = { selector: '.cube', property: 'fill' };
const cubeLeftSideElementOptions = {
  selector: '#cube-8-scale-animation :nth-child(1)',
  property: 'fill',
  currentColor: { red: 246, green: 246, blue: 247 },
  redColor: { red: 240, green: 62, blue: 62 },
  blueColor: { red: 75, green: 84, blue: 242 },
  purpleColor: { red: 157, green: 55, blue: 227 }
};
const cubeRightSideElementOptions = {
  selector: '#cube-8-scale-animation :nth-child(2)',
  property: 'fill',
  currentColor: { red: 232, green: 232, blue: 232 },
  redColor: { red: 191, green: 49, blue: 48 },
  blueColor: { red: 67, green: 74, blue: 190 },
  purpleColor: { red: 147, green: 45, blue: 191 }
};
const cubeBottomSideSideElementOptions = {
  selector: '#cube-8-scale-animation :nth-child(3)',
  property: 'fill',
  currentColor: { red: 218, green: 220, blue: 220 },
  redColor: { red: 219, green: 56, blue: 57 },
  blueColor: { red: 72, green: 80, blue: 223 },
  purpleColor: { red: 150, green: 49, blue: 213 }
};

const redBackgroundColor = { red: 240, green: 62, blue: 62 };
const blueBackgroundColor = { red: 75, green: 84, blue: 242 };

function changeSelectorElementsProperty(selectorsArr, currentColor) {
  for (let i = 0; i < selectorsArr.length; i++) {
    const selectorElements = document.querySelectorAll(selectorsArr[i].selector);
    for (let j = 0; j < selectorElements.length; j++) {
      selectorElements[j].style[selectorsArr[i].property] =
        'rgb(' + currentColor.red + ', ' + currentColor.green + ', ' + currentColor.blue + ')';
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

  const menu = { selector: '.menu-container', property: 'color' };
  const menuButtonElement = { selector: '.menu-button > svg', property: 'fill' };
  const logoElement = { selector: '.logo-container > svg', property: 'fill' };

  changeColor(whiteColor, redBackgroundColor, [bodyElement, cubeElement], advantageSectionScrollPosition);

  changeColor(blackColor, whiteColor, [menu, menuButtonElement], advantageSectionScrollPosition);

  changeColor(redLogoColor, whiteColor, [logoElement], advantageSectionScrollPosition);

  changeColor(
    cubeLeftSideElementOptions.currentColor,
    cubeLeftSideElementOptions.redColor,
    [cubeLeftSideElementOptions],
    advantageSectionScrollPosition
  );

  changeColor(
    cubeRightSideElementOptions.currentColor,
    cubeRightSideElementOptions.redColor,
    [cubeRightSideElementOptions],
    advantageSectionScrollPosition
  );

  changeColor(
    cubeBottomSideSideElementOptions.currentColor,
    cubeBottomSideSideElementOptions.redColor,
    [cubeBottomSideSideElementOptions],
    advantageSectionScrollPosition
  );
}

function changeColorForExpertiseSection(expertiseSectionScrollPosition) {
  changeColor(redBackgroundColor, blueBackgroundColor, [bodyElement, cubeElement], expertiseSectionScrollPosition);

  changeColor(
    cubeLeftSideElementOptions.redColor,
    cubeLeftSideElementOptions.blueColor,
    [cubeLeftSideElementOptions],
    expertiseSectionScrollPosition
  );

  changeColor(
    cubeRightSideElementOptions.redColor,
    cubeRightSideElementOptions.blueColor,
    [cubeRightSideElementOptions],
    expertiseSectionScrollPosition
  );

  changeColor(
    cubeBottomSideSideElementOptions.redColor,
    cubeBottomSideSideElementOptions.blueColor,
    [cubeBottomSideSideElementOptions],
    expertiseSectionScrollPosition
  );
}

function changeColorForInvestmentsSection(investmentsSectionScrollPosition) {
  const purpleBackgroundColor = { red: 157, green: 55, blue: 227 };

  changeColor(blueBackgroundColor, purpleBackgroundColor, [bodyElement, cubeElement], investmentsSectionScrollPosition);

  changeColor(
    cubeLeftSideElementOptions.blueColor,
    cubeLeftSideElementOptions.purpleColor,
    [cubeLeftSideElementOptions],
    investmentsSectionScrollPosition
  );

  changeColor(
    cubeRightSideElementOptions.blueColor,
    cubeRightSideElementOptions.purpleColor,
    [cubeRightSideElementOptions],
    investmentsSectionScrollPosition
  );

  changeColor(
    cubeBottomSideSideElementOptions.blueColor,
    cubeBottomSideSideElementOptions.purpleColor,
    [cubeBottomSideSideElementOptions],
    investmentsSectionScrollPosition
  );
}

function changeMenuItemsColorToWhite() {
  document.querySelector('.menu-container').style.color = 'white';
  document.querySelector('.logo-container > svg').style.fill = 'white';
  document.querySelector('.menu-button > svg').style.fill = 'white';
}

function changeBackgroundColorToWhite() {
  document.querySelector(bodyElement.selector).style.backgroundColor = 'rgb(255, 255, 255)';
}

function changeCubeColorToDefault() {
  document.querySelector(cubeLeftSideElementOptions.selector).style.fill =
    'rgb(' +
    cubeLeftSideElementOptions.currentColor.red +
    ', ' +
    cubeLeftSideElementOptions.currentColor.green +
    ', ' +
    cubeLeftSideElementOptions.currentColor.blue +
    ')';
  document.querySelector(cubeRightSideElementOptions.selector).style.fill =
    'rgb(' +
    cubeRightSideElementOptions.currentColor.red +
    ', ' +
    cubeRightSideElementOptions.currentColor.green +
    ', ' +
    cubeRightSideElementOptions.currentColor.blue +
    ')';
  document.querySelector(cubeBottomSideSideElementOptions.selector).style.fill =
    'rgb(' +
    cubeBottomSideSideElementOptions.currentColor.red +
    ', ' +
    cubeBottomSideSideElementOptions.currentColor.green +
    ', ' +
    cubeBottomSideSideElementOptions.currentColor.blue +
    ')';
}
