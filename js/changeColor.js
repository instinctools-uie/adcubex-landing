(function(window) {
  window.AdCubex.changeColorForAdvantageSection = function(advantageSectionScrollPosition) {
    const whiteColor = { red: 255, green: 255, blue: 255 };
    const blackColor = { red: 0, green: 0, blue: 0 };
    const redLogoColor = { red: 237, green: 28, blue: 36 };

    const menu = { selector: '.menu-container', property: 'color' };
    const menuButtonElement = { selector: '.menu-button > svg', property: 'fill' };
    const logoElement = { selector: '.logo-container > svg', property: 'fill' };

    changeColor(
      whiteColor,
      window.AdCubex.constants.RED_BACKGROUND_COLOR,
      [window.AdCubex.constants.BODY_ELEMENT_OPTIONS, window.AdCubex.constants.CUBE_ELEMENT_OPTIONS],
      advantageSectionScrollPosition
    );

    changeColor(blackColor, whiteColor, [menu, menuButtonElement], advantageSectionScrollPosition);

    changeColor(redLogoColor, whiteColor, [logoElement], advantageSectionScrollPosition);

    changeColor(
      window.AdCubex.constants.CUBE_LEFT_SIDE_ELEMENT_OPTIONS.currentColor,
      window.AdCubex.constants.CUBE_LEFT_SIDE_ELEMENT_OPTIONS.redColor,
      [window.AdCubex.constants.CUBE_LEFT_SIDE_ELEMENT_OPTIONS],
      advantageSectionScrollPosition
    );

    changeColor(
      window.AdCubex.constants.CUBE_RIGHT_SIDE_ELEMENT_OPTIONS.currentColor,
      window.AdCubex.constants.CUBE_RIGHT_SIDE_ELEMENT_OPTIONS.redColor,
      [window.AdCubex.constants.CUBE_RIGHT_SIDE_ELEMENT_OPTIONS],
      advantageSectionScrollPosition
    );

    changeColor(
      window.AdCubex.constants.CUBE_BOTTOM_SIDE_ELEMENT_OPTIONS.currentColor,
      window.AdCubex.constants.CUBE_BOTTOM_SIDE_ELEMENT_OPTIONS.redColor,
      [window.AdCubex.constants.CUBE_BOTTOM_SIDE_ELEMENT_OPTIONS],
      advantageSectionScrollPosition
    );
  };

  window.AdCubex.changeColorForExpertiseSection = function(expertiseSectionScrollPosition) {
    changeColor(
      window.AdCubex.constants.RED_BACKGROUND_COLOR,
      window.AdCubex.constants.BLUE_BACKGROUND_COLOR,
      [window.AdCubex.constants.BODY_ELEMENT_OPTIONS, window.AdCubex.constants.CUBE_ELEMENT_OPTIONS],
      expertiseSectionScrollPosition
    );

    changeColor(
      window.AdCubex.constants.CUBE_LEFT_SIDE_ELEMENT_OPTIONS.redColor,
      window.AdCubex.constants.CUBE_LEFT_SIDE_ELEMENT_OPTIONS.blueColor,
      [window.AdCubex.constants.CUBE_LEFT_SIDE_ELEMENT_OPTIONS],
      expertiseSectionScrollPosition
    );

    changeColor(
      window.AdCubex.constants.CUBE_RIGHT_SIDE_ELEMENT_OPTIONS.redColor,
      window.AdCubex.constants.CUBE_RIGHT_SIDE_ELEMENT_OPTIONS.blueColor,
      [window.AdCubex.constants.CUBE_RIGHT_SIDE_ELEMENT_OPTIONS],
      expertiseSectionScrollPosition
    );

    changeColor(
      window.AdCubex.constants.CUBE_BOTTOM_SIDE_ELEMENT_OPTIONS.redColor,
      window.AdCubex.constants.CUBE_BOTTOM_SIDE_ELEMENT_OPTIONS.blueColor,
      [window.AdCubex.constants.CUBE_BOTTOM_SIDE_ELEMENT_OPTIONS],
      expertiseSectionScrollPosition
    );
  };

  window.AdCubex.changeColorForInvestmentsSection = function(investmentsSectionScrollPosition) {
    changeColor(
      window.AdCubex.constants.BLUE_BACKGROUND_COLOR,
      window.AdCubex.constants.PURPLE_BACKGROUND_COLOR,
      [window.AdCubex.constants.BODY_ELEMENT_OPTIONS, window.AdCubex.constants.CUBE_ELEMENT_OPTIONS],
      investmentsSectionScrollPosition
    );

    changeColor(
      window.AdCubex.constants.CUBE_LEFT_SIDE_ELEMENT_OPTIONS.blueColor,
      window.AdCubex.constants.CUBE_LEFT_SIDE_ELEMENT_OPTIONS.purpleColor,
      [window.AdCubex.constants.CUBE_LEFT_SIDE_ELEMENT_OPTIONS],
      investmentsSectionScrollPosition
    );

    changeColor(
      window.AdCubex.constants.CUBE_RIGHT_SIDE_ELEMENT_OPTIONS.blueColor,
      window.AdCubex.constants.CUBE_RIGHT_SIDE_ELEMENT_OPTIONS.purpleColor,
      [window.AdCubex.constants.CUBE_RIGHT_SIDE_ELEMENT_OPTIONS],
      investmentsSectionScrollPosition
    );

    changeColor(
      window.AdCubex.constants.CUBE_BOTTOM_SIDE_ELEMENT_OPTIONS.blueColor,
      window.AdCubex.constants.CUBE_BOTTOM_SIDE_ELEMENT_OPTIONS.purpleColor,
      [window.AdCubex.constants.CUBE_BOTTOM_SIDE_ELEMENT_OPTIONS],
      investmentsSectionScrollPosition
    );
  };

  window.AdCubex.changeMenuItemsColorToWhite = function() {
    document.querySelector('.menu-container').style.color = 'white';
    document.querySelector('.logo-container > svg').style.fill = 'white';
    document.querySelector('.menu-button > svg').style.fill = 'white';
  };

  window.AdCubex.changeBackgroundColorToWhite = function() {
    document.querySelector(window.AdCubex.constants.BODY_ELEMENT_OPTIONS.selector).style.backgroundColor = 'white';
  };

  window.AdCubex.changeCubeColorToDefault = function() {
    document.querySelector(window.AdCubex.constants.CUBE_LEFT_SIDE_ELEMENT_OPTIONS.selector).style.fill =
      'rgb(' +
      window.AdCubex.constants.CUBE_LEFT_SIDE_ELEMENT_OPTIONS.currentColor.red +
      ', ' +
      window.AdCubex.constants.CUBE_LEFT_SIDE_ELEMENT_OPTIONS.currentColor.green +
      ', ' +
      window.AdCubex.constants.CUBE_LEFT_SIDE_ELEMENT_OPTIONS.currentColor.blue +
      ')';
    document.querySelector(window.AdCubex.constants.CUBE_RIGHT_SIDE_ELEMENT_OPTIONS.selector).style.fill =
      'rgb(' +
      window.AdCubex.constants.CUBE_RIGHT_SIDE_ELEMENT_OPTIONS.currentColor.red +
      ', ' +
      window.AdCubex.constants.CUBE_RIGHT_SIDE_ELEMENT_OPTIONS.currentColor.green +
      ', ' +
      window.AdCubex.constants.CUBE_RIGHT_SIDE_ELEMENT_OPTIONS.currentColor.blue +
      ')';
    document.querySelector(window.AdCubex.constants.CUBE_BOTTOM_SIDE_ELEMENT_OPTIONS.selector).style.fill =
      'rgb(' +
      window.AdCubex.constants.CUBE_BOTTOM_SIDE_ELEMENT_OPTIONS.currentColor.red +
      ', ' +
      window.AdCubex.constants.CUBE_BOTTOM_SIDE_ELEMENT_OPTIONS.currentColor.green +
      ', ' +
      window.AdCubex.constants.CUBE_BOTTOM_SIDE_ELEMENT_OPTIONS.currentColor.blue +
      ')';
  };

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
    const perChange = (window.pageYOffset - startPosition) / window.AdCubex.constants.RATE_CHANGE_SCROLL;
    const currentColor = { red: 0, green: 0, blue: 0 };

    for (let key in currentColor) {
      currentColor[key] =
        fromColor[key] > toColor[key]
          ? Math.round(fromColor[key] - (fromColor[key] - toColor[key]) * perChange)
          : Math.round(fromColor[key] + (toColor[key] - fromColor[key]) * perChange);
    }

    changeSelectorElementsProperty(selectorsArr, currentColor);
  }
})(window);
