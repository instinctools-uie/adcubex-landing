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
      Constants.redBackgroundColor,
      [Constants.bodyElement, Constants.cubeElement],
      advantageSectionScrollPosition
    );

    changeColor(blackColor, whiteColor, [menu, menuButtonElement], advantageSectionScrollPosition);

    changeColor(redLogoColor, whiteColor, [logoElement], advantageSectionScrollPosition);

    changeColor(
      Constants.cubeLeftSideElementOptions.currentColor,
      Constants.cubeLeftSideElementOptions.redColor,
      [Constants.cubeLeftSideElementOptions],
      advantageSectionScrollPosition
    );

    changeColor(
      Constants.cubeRightSideElementOptions.currentColor,
      Constants.cubeRightSideElementOptions.redColor,
      [Constants.cubeRightSideElementOptions],
      advantageSectionScrollPosition
    );

    changeColor(
      Constants.cubeBottomSideSideElementOptions.currentColor,
      Constants.cubeBottomSideSideElementOptions.redColor,
      [Constants.cubeBottomSideSideElementOptions],
      advantageSectionScrollPosition
    );
  };

  AdCubex.changeColorForExpertiseSection = function(expertiseSectionScrollPosition) {
    changeColor(
      Constants.redBackgroundColor,
      Constants.blueBackgroundColor,
      [Constants.bodyElement, Constants.cubeElement],
      expertiseSectionScrollPosition
    );

    changeColor(
      Constants.cubeLeftSideElementOptions.redColor,
      Constants.cubeLeftSideElementOptions.blueColor,
      [Constants.cubeLeftSideElementOptions],
      expertiseSectionScrollPosition
    );

    changeColor(
      Constants.cubeRightSideElementOptions.redColor,
      Constants.cubeRightSideElementOptions.blueColor,
      [Constants.cubeRightSideElementOptions],
      expertiseSectionScrollPosition
    );

    changeColor(
      Constants.cubeBottomSideSideElementOptions.redColor,
      Constants.cubeBottomSideSideElementOptions.blueColor,
      [Constants.cubeBottomSideSideElementOptions],
      expertiseSectionScrollPosition
    );
  };

  AdCubex.changeColorForInvestmentsSection = function(investmentsSectionScrollPosition) {
    changeColor(
      Constants.blueBackgroundColor,
      Constants.purpleBackgroundColor,
      [Constants.bodyElement, Constants.cubeElement],
      investmentsSectionScrollPosition
    );

    changeColor(
      Constants.cubeLeftSideElementOptions.blueColor,
      Constants.cubeLeftSideElementOptions.purpleColor,
      [Constants.cubeLeftSideElementOptions],
      investmentsSectionScrollPosition
    );

    changeColor(
      Constants.cubeRightSideElementOptions.blueColor,
      Constants.cubeRightSideElementOptions.purpleColor,
      [Constants.cubeRightSideElementOptions],
      investmentsSectionScrollPosition
    );

    changeColor(
      Constants.cubeBottomSideSideElementOptions.blueColor,
      Constants.cubeBottomSideSideElementOptions.purpleColor,
      [Constants.cubeBottomSideSideElementOptions],
      investmentsSectionScrollPosition
    );
  };

  AdCubex.changeMenuItemsColorToWhite = function() {
    document.querySelector('.menu-container').style.color = 'white';
    document.querySelector('.logo-container > svg').style.fill = 'white';
    document.querySelector('.menu-button > svg').style.fill = 'white';
  };

  AdCubex.changeBackgroundColorToWhite = function() {
    document.querySelector(Constants.bodyElement.selector).style.backgroundColor = 'rgb(255, 255, 255)';
  };

  AdCubex.changeCubeColorToDefault = function() {
    document.querySelector(Constants.cubeLeftSideElementOptions.selector).style.fill =
      'rgb(' +
      Constants.cubeLeftSideElementOptions.currentColor.red +
      ', ' +
      Constants.cubeLeftSideElementOptions.currentColor.green +
      ', ' +
      Constants.cubeLeftSideElementOptions.currentColor.blue +
      ')';
    document.querySelector(Constants.cubeRightSideElementOptions.selector).style.fill =
      'rgb(' +
      Constants.cubeRightSideElementOptions.currentColor.red +
      ', ' +
      Constants.cubeRightSideElementOptions.currentColor.green +
      ', ' +
      Constants.cubeRightSideElementOptions.currentColor.blue +
      ')';
    document.querySelector(Constants.cubeBottomSideSideElementOptions.selector).style.fill =
      'rgb(' +
      Constants.cubeBottomSideSideElementOptions.currentColor.red +
      ', ' +
      Constants.cubeBottomSideSideElementOptions.currentColor.green +
      ', ' +
      Constants.cubeBottomSideSideElementOptions.currentColor.blue +
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
