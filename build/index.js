'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changeColorForAdvantageSection = changeColorForAdvantageSection;
exports.changeColorForExpertiseSection = changeColorForExpertiseSection;
exports.changeColorForInvestmentsSection = changeColorForInvestmentsSection;
exports.changeMenuItemsColorToWhite = changeMenuItemsColorToWhite;
exports.changeBackgroundColorToWhite = changeBackgroundColorToWhite;
exports.changeCubeColorToDefault = changeCubeColorToDefault;

var _constants = require('./constants');

function changeSelectorElementsProperty(selectorsArr, currentColor) {
  for (var i = 0; i < selectorsArr.length; i++) {
    var selectorElements = document.querySelectorAll(selectorsArr[i].selector);
    for (var j = 0; j < selectorElements.length; j++) {
      selectorElements[j].style[selectorsArr[i].property] = 'rgb(' + currentColor.red + ', ' + currentColor.green + ', ' + currentColor.blue + ')';
    }
  }
}

function changeColor(fromColor, toColor, selectorsArr, startPosition) {
  var perChange = (window.pageYOffset - startPosition) / _constants.RATE_CHANGE_SCROLL;
  var currentColor = { red: 0, green: 0, blue: 0 };

  Object.keys(currentColor).forEach(function (key) {
    currentColor[key] = fromColor[key] > toColor[key] ? Math.round(fromColor[key] - (fromColor[key] - toColor[key]) * perChange) : Math.round(fromColor[key] + (toColor[key] - fromColor[key]) * perChange);
  });

  changeSelectorElementsProperty(selectorsArr, currentColor);
}

function changeColorForAdvantageSection(advantageSectionScrollPosition) {
  var whiteColor = { red: 255, green: 255, blue: 255 };
  var blackColor = { red: 0, green: 0, blue: 0 };
  var redLogoColor = { red: 237, green: 28, blue: 36 };

  var menu = { selector: '.menu-container', property: 'color' };
  var menuButtonElement = { selector: '.menu-button > svg', property: 'fill' };
  var logoElement = { selector: '.logo-container > svg', property: 'fill' };

  changeColor(whiteColor, _constants.RED_BACKGROUND_COLOR, [_constants.BODY_ELEMENT_OPTIONS, _constants.CUBE_ELEMENT_OPTIONS], advantageSectionScrollPosition);

  changeColor(blackColor, whiteColor, [menu, menuButtonElement], advantageSectionScrollPosition);

  changeColor(redLogoColor, whiteColor, [logoElement], advantageSectionScrollPosition);

  changeColor(_constants.CUBE_LEFT_SIDE_ELEMENT_OPTIONS.currentColor, _constants.CUBE_LEFT_SIDE_ELEMENT_OPTIONS.redColor, [_constants.CUBE_LEFT_SIDE_ELEMENT_OPTIONS], advantageSectionScrollPosition);

  changeColor(_constants.CUBE_RIGHT_SIDE_ELEMENT_OPTIONS.currentColor, _constants.CUBE_RIGHT_SIDE_ELEMENT_OPTIONS.redColor, [_constants.CUBE_RIGHT_SIDE_ELEMENT_OPTIONS], advantageSectionScrollPosition);

  changeColor(_constants.CUBE_BOTTOM_SIDE_ELEMENT_OPTIONS.currentColor, _constants.CUBE_BOTTOM_SIDE_ELEMENT_OPTIONS.redColor, [_constants.CUBE_BOTTOM_SIDE_ELEMENT_OPTIONS], advantageSectionScrollPosition);
}

function changeColorForExpertiseSection(expertiseSectionScrollPosition) {
  changeColor(_constants.RED_BACKGROUND_COLOR, _constants.BLUE_BACKGROUND_COLOR, [_constants.BODY_ELEMENT_OPTIONS, _constants.CUBE_ELEMENT_OPTIONS], expertiseSectionScrollPosition);

  changeColor(_constants.CUBE_LEFT_SIDE_ELEMENT_OPTIONS.redColor, _constants.CUBE_LEFT_SIDE_ELEMENT_OPTIONS.blueColor, [_constants.CUBE_LEFT_SIDE_ELEMENT_OPTIONS], expertiseSectionScrollPosition);

  changeColor(_constants.CUBE_RIGHT_SIDE_ELEMENT_OPTIONS.redColor, _constants.CUBE_RIGHT_SIDE_ELEMENT_OPTIONS.blueColor, [_constants.CUBE_RIGHT_SIDE_ELEMENT_OPTIONS], expertiseSectionScrollPosition);

  changeColor(_constants.CUBE_BOTTOM_SIDE_ELEMENT_OPTIONS.redColor, _constants.CUBE_BOTTOM_SIDE_ELEMENT_OPTIONS.blueColor, [_constants.CUBE_BOTTOM_SIDE_ELEMENT_OPTIONS], expertiseSectionScrollPosition);
}

function changeColorForInvestmentsSection(investmentsSectionScrollPosition) {
  changeColor(_constants.BLUE_BACKGROUND_COLOR, _constants.PURPLE_BACKGROUND_COLOR, [_constants.BODY_ELEMENT_OPTIONS, _constants.CUBE_ELEMENT_OPTIONS], investmentsSectionScrollPosition);

  changeColor(_constants.CUBE_LEFT_SIDE_ELEMENT_OPTIONS.blueColor, _constants.CUBE_LEFT_SIDE_ELEMENT_OPTIONS.purpleColor, [_constants.CUBE_LEFT_SIDE_ELEMENT_OPTIONS], investmentsSectionScrollPosition);

  changeColor(_constants.CUBE_RIGHT_SIDE_ELEMENT_OPTIONS.blueColor, _constants.CUBE_RIGHT_SIDE_ELEMENT_OPTIONS.purpleColor, [_constants.CUBE_RIGHT_SIDE_ELEMENT_OPTIONS], investmentsSectionScrollPosition);

  changeColor(_constants.CUBE_BOTTOM_SIDE_ELEMENT_OPTIONS.blueColor, _constants.CUBE_BOTTOM_SIDE_ELEMENT_OPTIONS.purpleColor, [_constants.CUBE_BOTTOM_SIDE_ELEMENT_OPTIONS], investmentsSectionScrollPosition);
}

function changeMenuItemsColorToWhite() {
  document.querySelector('.menu-container').style.color = 'white';
  document.querySelector('.logo-container > svg').style.fill = 'white';
  document.querySelector('.menu-button > svg').style.fill = 'white';
}

function changeBackgroundColorToWhite() {
  document.querySelector(_constants.BODY_ELEMENT_OPTIONS.selector).style.backgroundColor = 'white';
}

function changeCubeColorToDefault() {
  document.querySelector(_constants.CUBE_LEFT_SIDE_ELEMENT_OPTIONS.selector).style.fill = 'rgb(\n  ' + _constants.CUBE_LEFT_SIDE_ELEMENT_OPTIONS.currentColor.red + ',\n   ' + _constants.CUBE_LEFT_SIDE_ELEMENT_OPTIONS.currentColor.green + ',\n    ' + _constants.CUBE_LEFT_SIDE_ELEMENT_OPTIONS.currentColor.blue + '\n    )';
  document.querySelector(_constants.CUBE_RIGHT_SIDE_ELEMENT_OPTIONS.selector).style.fill = 'rgb(\n  ' + _constants.CUBE_RIGHT_SIDE_ELEMENT_OPTIONS.currentColor.red + ',\n   ' + _constants.CUBE_RIGHT_SIDE_ELEMENT_OPTIONS.currentColor.green + ',\n    ' + _constants.CUBE_RIGHT_SIDE_ELEMENT_OPTIONS.currentColor.blue + ')';
  document.querySelector(_constants.CUBE_BOTTOM_SIDE_ELEMENT_OPTIONS.selector).style.fill = 'rgb(\n  ' + _constants.CUBE_BOTTOM_SIDE_ELEMENT_OPTIONS.currentColor.red + ',\n   ' + _constants.CUBE_BOTTOM_SIDE_ELEMENT_OPTIONS.currentColor.green + ',\n    ' + _constants.CUBE_BOTTOM_SIDE_ELEMENT_OPTIONS.currentColor.blue + ')';
}
'use strict';

var _changeColor = require('./changeColor');

var _toggleCubes = require('./toggleCubes');

var _toggleTextOfSection = require('./toggleTextOfSection');

var _menu = require('./menu');

var advantageSection = window.document.querySelector('.advantage-section');
var expertiseSection = window.document.querySelector('.expertise-section');
var investmentsSection = window.document.querySelector('.investments-section');
var advantageSectionScrollPosition = advantageSection.offsetTop;
var expertiseSectionScrollPosition = expertiseSection.offsetTop;
var investmentsSectionScrollPosition = investmentsSection.offsetTop;

window.addEventListener('scroll', initProject);

initProject();

function initProject() {
  var scrollPosition = window.pageYOffset;

  if (scrollPosition < advantageSectionScrollPosition) {
    (0, _changeColor.changeBackgroundColorToWhite)();
    (0, _changeColor.changeCubeColorToDefault)();
  }

  if (scrollPosition > expertiseSectionScrollPosition) {
    (0, _changeColor.changeMenuItemsColorToWhite)();
  }

  if (scrollPosition >= advantageSectionScrollPosition && scrollPosition <= expertiseSectionScrollPosition) {
    (0, _changeColor.changeColorForAdvantageSection)(advantageSectionScrollPosition);
  }

  if (scrollPosition > expertiseSectionScrollPosition && scrollPosition <= investmentsSectionScrollPosition) {
    (0, _changeColor.changeColorForExpertiseSection)(expertiseSectionScrollPosition);
  }

  if (scrollPosition > investmentsSectionScrollPosition) {
    (0, _changeColor.changeColorForInvestmentsSection)(investmentsSectionScrollPosition);
  }

  //  TODO: Find solution for remove "20"
  if (scrollPosition > expertiseSectionScrollPosition - 20) {
    (0, _menu.changeActiveMenuItemToBlack)();
  }

  //  TODO: Find solution for remove "20"
  if (scrollPosition < expertiseSectionScrollPosition - 20) {
    (0, _menu.changeActiveMenuItemToRed)();
  }

  (0, _toggleCubes.toggleCube)();
  (0, _toggleCubes.toggleCubes)();
  (0, _toggleTextOfSection.toggleTextOfSection)();
}
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changeActiveMenuItemToBlack = changeActiveMenuItemToBlack;
exports.changeActiveMenuItemToRed = changeActiveMenuItemToRed;
var menuContainer = document.querySelector('.menu-container');
var items = document.querySelectorAll('.menu-container > a');

menuContainer.addEventListener('click', function (e) {
  var linkElement = e.target;
  var isClickOnLink = linkElement.classList.contains('link');

  if (!isClickOnLink) {
    return;
  }

  var isRedLink = linkElement.classList.contains('link_red');
  if (isRedLink) {
    for (var i = 0; i < items.length; i++) {
      var isActiveLink = items[i].classList.contains('link_red--active');
      if (isActiveLink) {
        items[i].classList.remove('link_red--active');
      }
    }
    linkElement.classList.add('link_red--active');
  }

  var isBlackLink = linkElement.classList.contains('link_black');

  if (isBlackLink) {
    for (var _i = 0; _i < items.length; _i++) {
      var _isActiveLink = items[_i].classList.contains('link_black--active');
      if (_isActiveLink) {
        items[_i].classList.remove('link_black--active');
      }
    }
    linkElement.classList.add('link_black--active');
  }
});

function changeActiveMenuItemToBlack() {
  for (var i = 0; i < items.length; i++) {
    var isActiveRedLink = items[i].classList.contains('link_red--active');
    if (isActiveRedLink) {
      items[i].classList.remove('link_red--active');
      items[i].classList.add('link_black--active');
    }
    items[i].classList.remove('link_red');
    items[i].classList.add('link_black');
  }
}

function changeActiveMenuItemToRed() {
  for (var i = 0; i < items.length; i++) {
    var isActiveBlackLink = items[i].classList.contains('link_black--active');
    if (isActiveBlackLink) {
      items[i].classList.remove('link_black--active');
      items[i].classList.add('link_red--active');
    }
    items[i].classList.remove('link_black');
    items[i].classList.add('link_red');
  }
}
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleCube = toggleCube;
exports.toggleCubes = toggleCubes;

var _constants = require('./constants');

var advantageSection = window.document.querySelector('.advantage-section');
var advantageSectionScrollPosition = advantageSection.offsetTop;
var mainCube = document.querySelector('#main-cube');
var mainCubeAnimationElement = document.querySelector('#main-cube-scale-animation');
var cubes = document.querySelectorAll('#cubes > g');
var cubesTranslateElements = document.querySelectorAll('.cube-translate-animation');

function translateCubesAnimation(translateYPosition) {
  for (var i = 0; i < cubesTranslateElements.length; i++) {
    cubesTranslateElements[i].style.transform = 'translate(0px, -' + translateYPosition + 'px)';
  }
}

function getValueBetweenRange(perChange, minValue, maxValue) {
  var value = perChange * maxValue;

  if (value < minValue) {
    return minValue;
  }

  if (value > maxValue) {
    return maxValue;
  }

  return value;
}

function toggleCube() {
  var minScaleValue = 1;
  var maxScaleValue = 8;
  var minTranslateXPosition = 0;
  var maxTranslateXPosition = 1200;
  var minTranslateYPosition = 0;
  var maxTranslateYPosition = 2500;

  var perChange = (window.pageYOffset - advantageSectionScrollPosition) / _constants.RATE_CHANGE_SCROLL;

  var cubeScale = getValueBetweenRange(perChange, minScaleValue, maxScaleValue);

  var translateXPosition = getValueBetweenRange(perChange, minTranslateXPosition, maxTranslateXPosition);
  var translateYPosition = getValueBetweenRange(perChange, minTranslateYPosition, maxTranslateYPosition);
  var isCubeScaled = cubeScale > minScaleValue;
  var translateXPositionAfterScale = isCubeScaled ? translateXPosition : minTranslateXPosition;

  if (isCubeScaled) {
    mainCube.style.animation = 'none';
  } else {
    mainCube.style.animation = 'main-cube 1.6s infinite alternate';
  }

  mainCubeAnimationElement.style.transform = 'translate(-' + translateXPositionAfterScale + 'px, -' + translateYPosition + 'px) scale(' + cubeScale + ')';
}

function toggleCubes() {
  var minTranslateYPosition = 0;
  var maxTranslateYPosition = 5000;
  var perChange = (window.pageYOffset - advantageSectionScrollPosition) / _constants.RATE_CHANGE_SCROLL;

  var translateYPosition = getValueBetweenRange(perChange, minTranslateYPosition, maxTranslateYPosition);
  var isCubesYPositionMoreThanMaxValue = translateYPosition >= maxTranslateYPosition;

  for (var i = 0; i < cubes.length; i++) {
    var isMainCube = cubes[i].id === 'main-cube';

    if (isCubesYPositionMoreThanMaxValue && !isMainCube) {
      cubes[i].style.display = 'none';
    } else {
      cubes[i].style.display = 'block';
    }
  }

  if (!isCubesYPositionMoreThanMaxValue) {
    translateCubesAnimation(translateYPosition);
  }
}
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleTextOfSection = toggleTextOfSection;
//  TODO: Need find solution for correctly toggle text when zoom

function toggleTextOfSection() {
  var scrolled = window.pageYOffset;
  var sections = window.document.querySelectorAll('.section-container');

  for (var i = 0; i < sections.length; i++) {
    var currentSection = sections[i];
    var nextSection = sections[i + 1];
    var scrollPositionOfCurrentSection = currentSection.offsetTop;
    var scrollPositionOfNextSection = nextSection ? nextSection.offsetTop : document.documentElement.scrollHeight;
    var scrollDifferenceBetweenSections = scrollPositionOfNextSection - scrollPositionOfCurrentSection;
    var scrollHalfOfDifferenceBetweenSections = scrollDifferenceBetweenSections / 2;
    var scrollPositionWhenShouldToggleText = scrollHalfOfDifferenceBetweenSections + scrollPositionOfCurrentSection;

    if (scrolled > scrollPositionWhenShouldToggleText && scrolled < scrollPositionOfNextSection) {
      nextSection.classList.add('section-container--active');
      currentSection.classList.remove('section-container--active');
    } else if (scrolled < scrollPositionWhenShouldToggleText && scrolled > scrollPositionOfCurrentSection) {
      currentSection.classList.add('section-container--active');
      nextSection.classList.remove('section-container--active');
    }
  }
}