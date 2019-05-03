import {
  BODY_ELEMENT_OPTIONS,
  CUBE_LEFT_SIDE_ELEMENT_OPTIONS,
  CUBE_RIGHT_SIDE_ELEMENT_OPTIONS,
  CUBE_BOTTOM_SIDE_ELEMENT_OPTIONS,
  RATE_CHANGE_SCROLL,
  WHITE_COLOR,
  BLACK_COLOR,
  MENU_ELEMENT_OPTIONS,
  MENU_BUTTON_ELEMENT_OPTIONS,
  LOGO_AD_WORD_OPTIONS,
  LOGO_CUBEX_WORD_OPTIONS,
  LOGO_GO_HUGE_WORD_OPTIONS
} from './constants';

export function changeColorForBudgetSection(sectionScrollPosition) {
  const rateForMakeChangeCubeColorFaster = 800;
  const sectionScrollPositionForMainCube = sectionScrollPosition - rateForMakeChangeCubeColorFaster;

  changeColor(BLACK_COLOR, WHITE_COLOR, [MENU_ELEMENT_OPTIONS, MENU_BUTTON_ELEMENT_OPTIONS], sectionScrollPosition);

  changeColor(
    LOGO_AD_WORD_OPTIONS.defaultColor,
    LOGO_AD_WORD_OPTIONS.whiteColor,
    [LOGO_AD_WORD_OPTIONS, LOGO_GO_HUGE_WORD_OPTIONS],
    sectionScrollPosition
  );
  changeColor(
    LOGO_CUBEX_WORD_OPTIONS.defaultColor,
    LOGO_CUBEX_WORD_OPTIONS.whiteColor,
    [LOGO_CUBEX_WORD_OPTIONS],
    sectionScrollPosition
  );

  changeColor(
    CUBE_LEFT_SIDE_ELEMENT_OPTIONS.defaultColor,
    CUBE_LEFT_SIDE_ELEMENT_OPTIONS.redColor,
    [CUBE_LEFT_SIDE_ELEMENT_OPTIONS],
    sectionScrollPositionForMainCube
  );

  changeColor(
    CUBE_RIGHT_SIDE_ELEMENT_OPTIONS.defaultColor,
    CUBE_RIGHT_SIDE_ELEMENT_OPTIONS.redColor,
    [CUBE_RIGHT_SIDE_ELEMENT_OPTIONS],
    sectionScrollPositionForMainCube
  );

  changeColor(
    CUBE_BOTTOM_SIDE_ELEMENT_OPTIONS.defaultColor,
    CUBE_BOTTOM_SIDE_ELEMENT_OPTIONS.redColor,
    [CUBE_BOTTOM_SIDE_ELEMENT_OPTIONS],
    sectionScrollPositionForMainCube
  );
}

export function changeColorForControlSection(sectionScrollPosition) {
  changeColor(
    CUBE_LEFT_SIDE_ELEMENT_OPTIONS.redColor,
    CUBE_LEFT_SIDE_ELEMENT_OPTIONS.blueColor,
    [CUBE_LEFT_SIDE_ELEMENT_OPTIONS],
    sectionScrollPosition
  );

  changeColor(
    CUBE_RIGHT_SIDE_ELEMENT_OPTIONS.redColor,
    CUBE_RIGHT_SIDE_ELEMENT_OPTIONS.blueColor,
    [CUBE_RIGHT_SIDE_ELEMENT_OPTIONS],
    sectionScrollPosition
  );

  changeColor(
    CUBE_BOTTOM_SIDE_ELEMENT_OPTIONS.redColor,
    CUBE_BOTTOM_SIDE_ELEMENT_OPTIONS.blueColor,
    [CUBE_BOTTOM_SIDE_ELEMENT_OPTIONS],
    sectionScrollPosition
  );
}

export function changeColorForPowerSection(sectionScrollPosition) {
  changeColor(
    CUBE_LEFT_SIDE_ELEMENT_OPTIONS.blueColor,
    CUBE_LEFT_SIDE_ELEMENT_OPTIONS.purpleColor,
    [CUBE_LEFT_SIDE_ELEMENT_OPTIONS],
    sectionScrollPosition
  );

  changeColor(
    CUBE_RIGHT_SIDE_ELEMENT_OPTIONS.blueColor,
    CUBE_RIGHT_SIDE_ELEMENT_OPTIONS.purpleColor,
    [CUBE_RIGHT_SIDE_ELEMENT_OPTIONS],
    sectionScrollPosition
  );

  changeColor(
    CUBE_BOTTOM_SIDE_ELEMENT_OPTIONS.blueColor,
    CUBE_BOTTOM_SIDE_ELEMENT_OPTIONS.purpleColor,
    [CUBE_BOTTOM_SIDE_ELEMENT_OPTIONS],
    sectionScrollPosition
  );
}

export function changeColorForImprovementSection(sectionScrollPosition) {
  changeColor(WHITE_COLOR, BLACK_COLOR, [MENU_ELEMENT_OPTIONS, MENU_BUTTON_ELEMENT_OPTIONS], sectionScrollPosition);

  changeColor(
    LOGO_AD_WORD_OPTIONS.whiteColor,
    LOGO_AD_WORD_OPTIONS.defaultColor,
    [LOGO_AD_WORD_OPTIONS, LOGO_GO_HUGE_WORD_OPTIONS],
    sectionScrollPosition
  );
  changeColor(
    LOGO_CUBEX_WORD_OPTIONS.whiteColor,
    LOGO_CUBEX_WORD_OPTIONS.defaultColor,
    [LOGO_CUBEX_WORD_OPTIONS],
    sectionScrollPosition
  );

  changeColor(
    CUBE_LEFT_SIDE_ELEMENT_OPTIONS.purpleColor,
    CUBE_LEFT_SIDE_ELEMENT_OPTIONS.defaultColor,
    [CUBE_LEFT_SIDE_ELEMENT_OPTIONS],
    sectionScrollPosition
  );

  changeColor(
    CUBE_RIGHT_SIDE_ELEMENT_OPTIONS.purpleColor,
    CUBE_RIGHT_SIDE_ELEMENT_OPTIONS.defaultColor,
    [CUBE_RIGHT_SIDE_ELEMENT_OPTIONS],
    sectionScrollPosition
  );

  changeColor(
    CUBE_BOTTOM_SIDE_ELEMENT_OPTIONS.purpleColor,
    CUBE_BOTTOM_SIDE_ELEMENT_OPTIONS.defaultColor,
    [CUBE_BOTTOM_SIDE_ELEMENT_OPTIONS],
    sectionScrollPosition
  );
}

export function changeMenuItemsColorToWhite() {
  changeSelectorElementsProperty(MENU_ELEMENT_OPTIONS, WHITE_COLOR);
  changeSelectorElementsProperty(LOGO_AD_WORD_OPTIONS, WHITE_COLOR);
  changeSelectorElementsProperty(LOGO_CUBEX_WORD_OPTIONS, WHITE_COLOR);
  changeSelectorElementsProperty(LOGO_GO_HUGE_WORD_OPTIONS, WHITE_COLOR);
  changeSelectorElementsProperty(MENU_BUTTON_ELEMENT_OPTIONS, WHITE_COLOR);
}

export function changeMenuItemsColorToDefault() {
  changeSelectorElementsProperty(MENU_ELEMENT_OPTIONS, MENU_ELEMENT_OPTIONS.defaultColor);
  changeSelectorElementsProperty(LOGO_AD_WORD_OPTIONS, LOGO_AD_WORD_OPTIONS.defaultColor);
  changeSelectorElementsProperty(LOGO_CUBEX_WORD_OPTIONS, LOGO_CUBEX_WORD_OPTIONS.defaultColor);
  changeSelectorElementsProperty(LOGO_GO_HUGE_WORD_OPTIONS, LOGO_GO_HUGE_WORD_OPTIONS.defaultColor);
  changeSelectorElementsProperty(MENU_BUTTON_ELEMENT_OPTIONS, MENU_BUTTON_ELEMENT_OPTIONS.defaultColor);
}

export function changeBackgroundColorToDefault() {
  changeSelectorElementsProperty(BODY_ELEMENT_OPTIONS, BODY_ELEMENT_OPTIONS.defaultColor);
}

export function changeCubeColorToDefault() {
  changeSelectorElementsProperty(CUBE_LEFT_SIDE_ELEMENT_OPTIONS, CUBE_LEFT_SIDE_ELEMENT_OPTIONS.defaultColor);
  changeSelectorElementsProperty(CUBE_RIGHT_SIDE_ELEMENT_OPTIONS, CUBE_RIGHT_SIDE_ELEMENT_OPTIONS.defaultColor);
  changeSelectorElementsProperty(CUBE_BOTTOM_SIDE_ELEMENT_OPTIONS, CUBE_BOTTOM_SIDE_ELEMENT_OPTIONS.defaultColor);
}

function changeColor(fromColor, toColor, selectorsArr, startPosition) {
  const maxPerChangeValue = 1;
  const minPerChangeValue = 0;
  const currentColor = { red: 0, green: 0, blue: 0 };
  const scrolled = window.pageYOffset;
  let perChange = (scrolled - startPosition) / RATE_CHANGE_SCROLL;

  if (perChange < minPerChangeValue) {
    perChange = minPerChangeValue;
  }

  if (perChange > maxPerChangeValue) {
    perChange = maxPerChangeValue;
  }

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
