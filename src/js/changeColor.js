import {
  BODY_ELEMENT_OPTIONS,
  CUBE_ELEMENT_OPTIONS,
  CUBE_LEFT_SIDE_ELEMENT_OPTIONS,
  CUBE_RIGHT_SIDE_ELEMENT_OPTIONS,
  CUBE_BOTTOM_SIDE_ELEMENT_OPTIONS,
  RED_BACKGROUND_COLOR,
  BLUE_BACKGROUND_COLOR,
  PURPLE_BACKGROUND_COLOR,
  RATE_CHANGE_SCROLL
} from './constants';

function changeSelectorElementsProperty(selectorsArr, currentColor) {
  for (let i = 0; i < selectorsArr.length; i++) {
    const selectorElements = document.querySelectorAll(selectorsArr[i].selector);
    for (let j = 0; j < selectorElements.length; j++) {
      selectorElements[j].style[
        selectorsArr[i].property
      ] = `rgb(${currentColor.red}, ${currentColor.green}, ${currentColor.blue})`;
    }
  }
}

function changeColor(fromColor, toColor, selectorsArr, startPosition) {
  const perChange = (window.pageYOffset - startPosition) / RATE_CHANGE_SCROLL;
  const currentColor = { red: 0, green: 0, blue: 0 };

  Object.keys(currentColor).forEach(key => {
    currentColor[key] =
      fromColor[key] > toColor[key]
        ? Math.round(fromColor[key] - (fromColor[key] - toColor[key]) * perChange)
        : Math.round(fromColor[key] + (toColor[key] - fromColor[key]) * perChange);
  });

  changeSelectorElementsProperty(selectorsArr, currentColor);
}

export function changeColorForAdvantageSection(advantageSectionScrollPosition) {
  const whiteColor = { red: 255, green: 255, blue: 255 };
  const blackColor = { red: 0, green: 0, blue: 0 };
  const redLogoColor = { red: 237, green: 28, blue: 36 };

  const menu = { selector: '.menu-container', property: 'color' };
  const menuButtonElement = { selector: '.menu-button > svg', property: 'fill' };
  const logoElement = { selector: '.logo-container > svg', property: 'fill' };

  changeColor(
    whiteColor,
    RED_BACKGROUND_COLOR,
    [BODY_ELEMENT_OPTIONS, CUBE_ELEMENT_OPTIONS],
    advantageSectionScrollPosition
  );

  changeColor(blackColor, whiteColor, [menu, menuButtonElement], advantageSectionScrollPosition);

  changeColor(redLogoColor, whiteColor, [logoElement], advantageSectionScrollPosition);

  changeColor(
    CUBE_LEFT_SIDE_ELEMENT_OPTIONS.currentColor,
    CUBE_LEFT_SIDE_ELEMENT_OPTIONS.redColor,
    [CUBE_LEFT_SIDE_ELEMENT_OPTIONS],
    advantageSectionScrollPosition
  );

  changeColor(
    CUBE_RIGHT_SIDE_ELEMENT_OPTIONS.currentColor,
    CUBE_RIGHT_SIDE_ELEMENT_OPTIONS.redColor,
    [CUBE_RIGHT_SIDE_ELEMENT_OPTIONS],
    advantageSectionScrollPosition
  );

  changeColor(
    CUBE_BOTTOM_SIDE_ELEMENT_OPTIONS.currentColor,
    CUBE_BOTTOM_SIDE_ELEMENT_OPTIONS.redColor,
    [CUBE_BOTTOM_SIDE_ELEMENT_OPTIONS],
    advantageSectionScrollPosition
  );
}

export function changeColorForExpertiseSection(expertiseSectionScrollPosition) {
  changeColor(
    RED_BACKGROUND_COLOR,
    BLUE_BACKGROUND_COLOR,
    [BODY_ELEMENT_OPTIONS, CUBE_ELEMENT_OPTIONS],
    expertiseSectionScrollPosition
  );

  changeColor(
    CUBE_LEFT_SIDE_ELEMENT_OPTIONS.redColor,
    CUBE_LEFT_SIDE_ELEMENT_OPTIONS.blueColor,
    [CUBE_LEFT_SIDE_ELEMENT_OPTIONS],
    expertiseSectionScrollPosition
  );

  changeColor(
    CUBE_RIGHT_SIDE_ELEMENT_OPTIONS.redColor,
    CUBE_RIGHT_SIDE_ELEMENT_OPTIONS.blueColor,
    [CUBE_RIGHT_SIDE_ELEMENT_OPTIONS],
    expertiseSectionScrollPosition
  );

  changeColor(
    CUBE_BOTTOM_SIDE_ELEMENT_OPTIONS.redColor,
    CUBE_BOTTOM_SIDE_ELEMENT_OPTIONS.blueColor,
    [CUBE_BOTTOM_SIDE_ELEMENT_OPTIONS],
    expertiseSectionScrollPosition
  );
}

export function changeColorForInvestmentsSection(investmentsSectionScrollPosition) {
  changeColor(
    BLUE_BACKGROUND_COLOR,
    PURPLE_BACKGROUND_COLOR,
    [BODY_ELEMENT_OPTIONS, CUBE_ELEMENT_OPTIONS],
    investmentsSectionScrollPosition
  );

  changeColor(
    CUBE_LEFT_SIDE_ELEMENT_OPTIONS.blueColor,
    CUBE_LEFT_SIDE_ELEMENT_OPTIONS.purpleColor,
    [CUBE_LEFT_SIDE_ELEMENT_OPTIONS],
    investmentsSectionScrollPosition
  );

  changeColor(
    CUBE_RIGHT_SIDE_ELEMENT_OPTIONS.blueColor,
    CUBE_RIGHT_SIDE_ELEMENT_OPTIONS.purpleColor,
    [CUBE_RIGHT_SIDE_ELEMENT_OPTIONS],
    investmentsSectionScrollPosition
  );

  changeColor(
    CUBE_BOTTOM_SIDE_ELEMENT_OPTIONS.blueColor,
    CUBE_BOTTOM_SIDE_ELEMENT_OPTIONS.purpleColor,
    [CUBE_BOTTOM_SIDE_ELEMENT_OPTIONS],
    investmentsSectionScrollPosition
  );
}

export function changeMenuItemsColorToWhite() {
  document.querySelector('.menu-container').style.color = 'white';
  document.querySelector('.logo-container > svg').style.fill = 'white';
  document.querySelector('.menu-button > svg').style.fill = 'white';
}

export function changeBackgroundColorToWhite() {
  document.querySelector(BODY_ELEMENT_OPTIONS.selector).style.backgroundColor = 'white';
}

export function changeCubeColorToDefault() {
  document.querySelector(CUBE_LEFT_SIDE_ELEMENT_OPTIONS.selector).style.fill = `rgb(
  ${CUBE_LEFT_SIDE_ELEMENT_OPTIONS.currentColor.red},
   ${CUBE_LEFT_SIDE_ELEMENT_OPTIONS.currentColor.green},
    ${CUBE_LEFT_SIDE_ELEMENT_OPTIONS.currentColor.blue}
    )`;
  document.querySelector(CUBE_RIGHT_SIDE_ELEMENT_OPTIONS.selector).style.fill = `rgb(
  ${CUBE_RIGHT_SIDE_ELEMENT_OPTIONS.currentColor.red},
   ${CUBE_RIGHT_SIDE_ELEMENT_OPTIONS.currentColor.green},
    ${CUBE_RIGHT_SIDE_ELEMENT_OPTIONS.currentColor.blue})`;
  document.querySelector(CUBE_BOTTOM_SIDE_ELEMENT_OPTIONS.selector).style.fill = `rgb(
  ${CUBE_BOTTOM_SIDE_ELEMENT_OPTIONS.currentColor.red},
   ${CUBE_BOTTOM_SIDE_ELEMENT_OPTIONS.currentColor.green},
    ${CUBE_BOTTOM_SIDE_ELEMENT_OPTIONS.currentColor.blue})`;
}
