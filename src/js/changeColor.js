import {
  BODY_ELEMENT_OPTIONS,
  CUBE_LEFT_SIDE_ELEMENT_OPTIONS,
  CUBE_RIGHT_SIDE_ELEMENT_OPTIONS,
  CUBE_BOTTOM_SIDE_ELEMENT_OPTIONS,
  RATE_CHANGE_SCROLL
} from './constants';

export function changeColorForBudgetSection(sectionScrollPosition) {
  const rateForMakeChangeCubeColorFaster = 800;
  const sectionScrollPositionForMainCube = sectionScrollPosition - rateForMakeChangeCubeColorFaster;

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
