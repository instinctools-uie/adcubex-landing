import {
  BODY_ELEMENT_OPTIONS,
  CUBE_LEFT_SIDE_ELEMENT_OPTIONS,
  CUBE_RIGHT_SIDE_ELEMENT_OPTIONS,
  CUBE_BOTTOM_SIDE_ELEMENT_OPTIONS,
  RED_BACKGROUND_COLOR,
  BLUE_BACKGROUND_COLOR,
  PURPLE_BACKGROUND_COLOR,
  RATE_CHANGE_SCROLL,
  WHITE_COLOR,
  BLACK_COLOR,
  MENU_ELEMENT_OPTIONS,
  MENU_BUTTON_ELEMENT_OPTIONS,
  LOGO_AD_WORD_OPTIONS,
  LOGO_CUBEX_WORD_OPTIONS,
  LOGO_GO_HUGE_WORD_OPTIONS
} from './constants';

export function changeColorForBudgetSection(budgetSectionScrollPosition) {
  changeColor(WHITE_COLOR, RED_BACKGROUND_COLOR, [BODY_ELEMENT_OPTIONS], budgetSectionScrollPosition);

  changeColor(
    BLACK_COLOR,
    WHITE_COLOR,
    [MENU_ELEMENT_OPTIONS, MENU_BUTTON_ELEMENT_OPTIONS],
    budgetSectionScrollPosition
  );

  changeColor(
    LOGO_AD_WORD_OPTIONS.defaultColor,
    LOGO_AD_WORD_OPTIONS.whiteColor,
    [LOGO_AD_WORD_OPTIONS, LOGO_GO_HUGE_WORD_OPTIONS],
    budgetSectionScrollPosition
  );
  changeColor(
    LOGO_CUBEX_WORD_OPTIONS.defaultColor,
    LOGO_CUBEX_WORD_OPTIONS.whiteColor,
    [LOGO_CUBEX_WORD_OPTIONS],
    budgetSectionScrollPosition
  );

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
  changeColor(RED_BACKGROUND_COLOR, BLUE_BACKGROUND_COLOR, [BODY_ELEMENT_OPTIONS], expertiseSectionScrollPosition);

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
  changeColor(BLUE_BACKGROUND_COLOR, PURPLE_BACKGROUND_COLOR, [BODY_ELEMENT_OPTIONS], investmentsSectionScrollPosition);

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

export function changeColorForToolsetSection(powerSectionScrollPosition) {
  changeColor(PURPLE_BACKGROUND_COLOR, WHITE_COLOR, [BODY_ELEMENT_OPTIONS], powerSectionScrollPosition);

  changeColor(
    WHITE_COLOR,
    BLACK_COLOR,
    [MENU_ELEMENT_OPTIONS, MENU_BUTTON_ELEMENT_OPTIONS],
    powerSectionScrollPosition
  );

  changeColor(
    LOGO_AD_WORD_OPTIONS.whiteColor,
    LOGO_AD_WORD_OPTIONS.defaultColor,
    [LOGO_AD_WORD_OPTIONS, LOGO_GO_HUGE_WORD_OPTIONS],
    powerSectionScrollPosition
  );
  changeColor(
    LOGO_CUBEX_WORD_OPTIONS.whiteColor,
    LOGO_CUBEX_WORD_OPTIONS.defaultColor,
    [LOGO_CUBEX_WORD_OPTIONS],
    powerSectionScrollPosition
  );

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
  const currentColor = { red: 0, green: 0, blue: 0 };
  const scrolled = window.pageYOffset;
  let perChange = (scrolled - startPosition) / RATE_CHANGE_SCROLL;
  perChange = perChange > maxPerChangeValue ? maxPerChangeValue : perChange;

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
