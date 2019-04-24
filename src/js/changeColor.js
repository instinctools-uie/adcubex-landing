import {
  BODY_ELEMENT_OPTIONS,
  CUBE_ELEMENT_OPTIONS,
  CUBE_LEFT_SIDE_ELEMENT_OPTIONS,
  CUBE_RIGHT_SIDE_ELEMENT_OPTIONS,
  CUBE_BOTTOM_SIDE_ELEMENT_OPTIONS,
  RED_BACKGROUND_COLOR,
  BLUE_BACKGROUND_COLOR,
  PURPLE_BACKGROUND_COLOR,
  RATE_CHANGE_SCROLL,
  WHITE_COLOR,
  BLACK_COLOR,
  MENU_ELEMENT,
  MENU_BUTTON_ELEMENT,
  LOGO_ELEMENT
} from './constants';

export function changeColorForBudgetSection(budgetSectionScrollPosition) {
  changeColor(
    WHITE_COLOR,
    RED_BACKGROUND_COLOR,
    [BODY_ELEMENT_OPTIONS, CUBE_ELEMENT_OPTIONS],
    budgetSectionScrollPosition
  );

  changeColor(BLACK_COLOR, WHITE_COLOR, [MENU_ELEMENT, MENU_BUTTON_ELEMENT], budgetSectionScrollPosition);

  changeColor(LOGO_ELEMENT.redColor, WHITE_COLOR, [LOGO_ELEMENT], budgetSectionScrollPosition);

  changeColor(
    CUBE_LEFT_SIDE_ELEMENT_OPTIONS.defaultColor,
    CUBE_LEFT_SIDE_ELEMENT_OPTIONS.redColor,
    [CUBE_LEFT_SIDE_ELEMENT_OPTIONS],
    budgetSectionScrollPosition
  );

  changeColor(
    CUBE_RIGHT_SIDE_ELEMENT_OPTIONS.defaultColor,
    CUBE_RIGHT_SIDE_ELEMENT_OPTIONS.redColor,
    [CUBE_RIGHT_SIDE_ELEMENT_OPTIONS],
    budgetSectionScrollPosition
  );

  changeColor(
    CUBE_BOTTOM_SIDE_ELEMENT_OPTIONS.defaultColor,
    CUBE_BOTTOM_SIDE_ELEMENT_OPTIONS.redColor,
    [CUBE_BOTTOM_SIDE_ELEMENT_OPTIONS],
    budgetSectionScrollPosition
  );
}

export function changeColorForControlSection(expertiseSectionScrollPosition) {
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

export function changeColorForPowerSection(investmentsSectionScrollPosition) {
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

export function changeColorForImprovementSection(powerSectionScrollPosition) {
  changeColor(
    PURPLE_BACKGROUND_COLOR,
    WHITE_COLOR,
    [BODY_ELEMENT_OPTIONS, CUBE_ELEMENT_OPTIONS],
    powerSectionScrollPosition
  );

  changeColor(WHITE_COLOR, BLACK_COLOR, [MENU_ELEMENT, MENU_BUTTON_ELEMENT], powerSectionScrollPosition);

  changeColor(WHITE_COLOR, LOGO_ELEMENT.redColor, [LOGO_ELEMENT], powerSectionScrollPosition);

  changeColor(
    CUBE_LEFT_SIDE_ELEMENT_OPTIONS.purpleColor,
    CUBE_LEFT_SIDE_ELEMENT_OPTIONS.defaultColor,
    [CUBE_LEFT_SIDE_ELEMENT_OPTIONS],
    powerSectionScrollPosition
  );

  changeColor(
    CUBE_RIGHT_SIDE_ELEMENT_OPTIONS.purpleColor,
    CUBE_RIGHT_SIDE_ELEMENT_OPTIONS.defaultColor,
    [CUBE_RIGHT_SIDE_ELEMENT_OPTIONS],
    powerSectionScrollPosition
  );

  changeColor(
    CUBE_BOTTOM_SIDE_ELEMENT_OPTIONS.purpleColor,
    CUBE_BOTTOM_SIDE_ELEMENT_OPTIONS.defaultColor,
    [CUBE_BOTTOM_SIDE_ELEMENT_OPTIONS],
    powerSectionScrollPosition
  );
}

export function changeMenuItemsColorToWhite() {
  document.querySelector('.menu-container').style.color = 'white';
  document.querySelector('.logo-container > svg').style.fill = 'white';
  document.querySelector('.menu-button > svg').style.fill = 'white';
}

export function changeMenuItemsColorToBlack() {
  document.querySelector('.menu-container').style.color = 'black';
  // ToDo: Fix to correct logo color
  document.querySelector('.logo-container > svg').style.fill = 'red';
  document.querySelector('.menu-button > svg').style.fill = 'black';
}

export function changeBackgroundColorToWhite() {
  document.querySelector(BODY_ELEMENT_OPTIONS.selector).style.backgroundColor = 'white';
}

export function changeCubeColorToDefault() {
  const { defaultColor: cubeLeftSideDefaultColor } = CUBE_LEFT_SIDE_ELEMENT_OPTIONS;
  const { defaultColor: cubeRightSideDefaultColor } = CUBE_RIGHT_SIDE_ELEMENT_OPTIONS;
  const { defaultColor: cubeBottomSideDefaultColor } = CUBE_BOTTOM_SIDE_ELEMENT_OPTIONS;
  document.querySelector(CUBE_LEFT_SIDE_ELEMENT_OPTIONS.selector).style.fill = `rgb(
  ${cubeLeftSideDefaultColor.red},
   ${cubeLeftSideDefaultColor.green},
    ${cubeLeftSideDefaultColor.blue}
    )`;
  document.querySelector(CUBE_RIGHT_SIDE_ELEMENT_OPTIONS.selector).style.fill = `rgb(
  ${cubeRightSideDefaultColor.red},
   ${cubeRightSideDefaultColor.green},
    ${cubeRightSideDefaultColor.blue})`;
  document.querySelector(CUBE_BOTTOM_SIDE_ELEMENT_OPTIONS.selector).style.fill = `rgb(
  ${cubeBottomSideDefaultColor.red},
   ${cubeBottomSideDefaultColor.green},
    ${cubeBottomSideDefaultColor.blue})`;
}

function changeColor(fromColor, toColor, selectorsArr, startPosition) {
  const scrolled = window.pageYOffset;
  const perChange = (scrolled - startPosition) / RATE_CHANGE_SCROLL;
  const currentColor = { red: 0, green: 0, blue: 0 };

  Object.keys(currentColor).forEach(key => {
    currentColor[key] =
      fromColor[key] > toColor[key]
        ? Math.round(fromColor[key] - (fromColor[key] - toColor[key]) * perChange)
        : Math.round(fromColor[key] + (toColor[key] - fromColor[key]) * perChange);
  });

  selectorsArr.forEach(selectorOptions => {
    changeSelectorElementsProperty(selectorOptions, currentColor);
  });
}

function changeSelectorElementsProperty(selectorOptions, currentColor) {
  const selectorElements = document.querySelectorAll(selectorOptions.selector);
  const { property } = selectorOptions;
  const { red, green, blue } = currentColor;

  selectorElements.forEach(selectorElement => {
    selectorElement.style[property] = `rgb(${red}, ${green}, ${blue})`;
  });
}
