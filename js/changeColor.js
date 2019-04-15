(function(AdCubex) {
  AdCubex.changeColorForAdvantageSection = function(advantageSectionScrollPosition) {
    const whiteColor = { red: 255, green: 255, blue: 255 };
    const blackColor = { red: 0, green: 0, blue: 0 };
    const redLogoColor = { red: 237, green: 28, blue: 36 };

    const menu = { selector: '.menu-container', property: 'color' };
    const menuButtonElement = { selector: '.menu-button > svg', property: 'fill' };
    const logoElement = { selector: '.logo-container > svg', property: 'fill' };

    changeColor(
      whiteColor,
      AdCubex.constants.redBackgroundColor,
      [AdCubex.constants.bodyElement, AdCubex.constants.cubeElement],
      advantageSectionScrollPosition
    );

    changeColor(blackColor, whiteColor, [menu, menuButtonElement], advantageSectionScrollPosition);

    changeColor(redLogoColor, whiteColor, [logoElement], advantageSectionScrollPosition);

    changeColor(
      AdCubex.constants.cubeLeftSideElementOptions.currentColor,
      AdCubex.constants.cubeLeftSideElementOptions.redColor,
      [AdCubex.constants.cubeLeftSideElementOptions],
      advantageSectionScrollPosition
    );

    changeColor(
      AdCubex.constants.cubeRightSideElementOptions.currentColor,
      AdCubex.constants.cubeRightSideElementOptions.redColor,
      [AdCubex.constants.cubeRightSideElementOptions],
      advantageSectionScrollPosition
    );

    changeColor(
      AdCubex.constants.cubeBottomSideSideElementOptions.currentColor,
      AdCubex.constants.cubeBottomSideSideElementOptions.redColor,
      [AdCubex.constants.cubeBottomSideSideElementOptions],
      advantageSectionScrollPosition
    );
  };

  AdCubex.changeColorForExpertiseSection = function(expertiseSectionScrollPosition) {
    changeColor(
      AdCubex.constants.redBackgroundColor,
      AdCubex.constants.blueBackgroundColor,
      [AdCubex.constants.bodyElement, AdCubex.constants.cubeElement],
      expertiseSectionScrollPosition
    );

    changeColor(
      AdCubex.constants.cubeLeftSideElementOptions.redColor,
      AdCubex.constants.cubeLeftSideElementOptions.blueColor,
      [AdCubex.constants.cubeLeftSideElementOptions],
      expertiseSectionScrollPosition
    );

    changeColor(
      AdCubex.constants.cubeRightSideElementOptions.redColor,
      AdCubex.constants.cubeRightSideElementOptions.blueColor,
      [AdCubex.constants.cubeRightSideElementOptions],
      expertiseSectionScrollPosition
    );

    changeColor(
      AdCubex.constants.cubeBottomSideSideElementOptions.redColor,
      AdCubex.constants.cubeBottomSideSideElementOptions.blueColor,
      [AdCubex.constants.cubeBottomSideSideElementOptions],
      expertiseSectionScrollPosition
    );
  };

  AdCubex.changeColorForInvestmentsSection = function(investmentsSectionScrollPosition) {
    changeColor(
      AdCubex.constants.blueBackgroundColor,
      AdCubex.constants.purpleBackgroundColor,
      [AdCubex.constants.bodyElement, AdCubex.constants.cubeElement],
      investmentsSectionScrollPosition
    );

    changeColor(
      AdCubex.constants.cubeLeftSideElementOptions.blueColor,
      AdCubex.constants.cubeLeftSideElementOptions.purpleColor,
      [AdCubex.constants.cubeLeftSideElementOptions],
      investmentsSectionScrollPosition
    );

    changeColor(
      AdCubex.constants.cubeRightSideElementOptions.blueColor,
      AdCubex.constants.cubeRightSideElementOptions.purpleColor,
      [AdCubex.constants.cubeRightSideElementOptions],
      investmentsSectionScrollPosition
    );

    changeColor(
      AdCubex.constants.cubeBottomSideSideElementOptions.blueColor,
      AdCubex.constants.cubeBottomSideSideElementOptions.purpleColor,
      [AdCubex.constants.cubeBottomSideSideElementOptions],
      investmentsSectionScrollPosition
    );
  };

  AdCubex.changeMenuItemsColorToWhite = function() {
    document.querySelector('.menu-container').style.color = 'white';
    document.querySelector('.logo-container > svg').style.fill = 'white';
    document.querySelector('.menu-button > svg').style.fill = 'white';
  };

  AdCubex.changeBackgroundColorToWhite = function() {
    document.querySelector(AdCubex.constants.bodyElement.selector).style.backgroundColor = 'rgb(255, 255, 255)';
  };

  AdCubex.changeCubeColorToDefault = function() {
    document.querySelector(AdCubex.constants.cubeLeftSideElementOptions.selector).style.fill =
      'rgb(' +
      AdCubex.constants.cubeLeftSideElementOptions.currentColor.red +
      ', ' +
      AdCubex.constants.cubeLeftSideElementOptions.currentColor.green +
      ', ' +
      AdCubex.constants.cubeLeftSideElementOptions.currentColor.blue +
      ')';
    document.querySelector(AdCubex.constants.cubeRightSideElementOptions.selector).style.fill =
      'rgb(' +
      AdCubex.constants.cubeRightSideElementOptions.currentColor.red +
      ', ' +
      AdCubex.constants.cubeRightSideElementOptions.currentColor.green +
      ', ' +
      AdCubex.constants.cubeRightSideElementOptions.currentColor.blue +
      ')';
    document.querySelector(AdCubex.constants.cubeBottomSideSideElementOptions.selector).style.fill =
      'rgb(' +
      AdCubex.constants.cubeBottomSideSideElementOptions.currentColor.red +
      ', ' +
      AdCubex.constants.cubeBottomSideSideElementOptions.currentColor.green +
      ', ' +
      AdCubex.constants.cubeBottomSideSideElementOptions.currentColor.blue +
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
})(AdCubex);
