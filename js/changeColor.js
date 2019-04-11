const bodyElement = document.querySelector('body');
const cubeElement = window.document.querySelector('.cube');
var advantageSection = window.document.querySelector('.advantage-section');
var expertiseSection = window.document.querySelector('.expertise-section');
var investmentsSection = window.document.querySelector('.investments-section');
var advantageSectionScrollPosition = advantageSection.offsetTop;
var expertiseSectionScrollPosition = expertiseSection.offsetTop;
var investmentsSectionScrollPosition = investmentsSection.offsetTop;

function fromRedToWhiteLogo() {
  const sourceColor = { red: 237, green: 28, blue: 36 };
  const perChange = (window.pageYOffset - advantageSectionScrollPosition) / 960;
  const currentColor = {
    red: Math.round(sourceColor.red + 18 * perChange),
    green: Math.round(sourceColor.green + 227 * perChange),
    blue: Math.round(sourceColor.blue + 219 * perChange)
  };
  const logo = document.querySelector('.logo-container > svg');
  logo.style.fill = `rgb(${currentColor.red}, ${currentColor.green}, ${currentColor.blue})`;
}

function fromBlackToWhiteMenu() {
  const perChange = (window.pageYOffset - advantageSectionScrollPosition) / 960;
  const currentColor = {
    red: Math.round(255 * perChange),
    green: Math.round(255 * perChange),
    blue: Math.round(255 * perChange)
  };
  const menuItems = document.querySelectorAll('.menu-container > a');
  menuItems.forEach(function(menuItem) {
    menuItem.style.color = `rgb(${currentColor.red}, ${currentColor.green}, ${currentColor.blue})`;
  });
  const menButton = document.querySelector('.menu-button > svg');
  menButton.style.fill = `rgb(${currentColor.red}, ${currentColor.green}, ${currentColor.blue})`;
}

function toWhiteColor() {
  bodyElement.style.backgroundColor = `rgb(255, 255, 255)`;
}

function fromWhiteToRed() {
  const sourceColor = { red: 255, green: 255, blue: 255 };
  const perChange = (window.pageYOffset - advantageSectionScrollPosition) / 960;
  const currentColor = {
    red: Math.round(sourceColor.red - 15 * perChange),
    green: Math.round(sourceColor.green - 193 * perChange),
    blue: Math.round(sourceColor.blue - 193 * perChange)
  };
  bodyElement.style.backgroundColor = `rgb(${currentColor.red}, ${currentColor.green}, ${currentColor.blue})`;
  cubeElement.style.fill = `rgb(${currentColor.red}, ${currentColor.green}, ${currentColor.blue})`;
}

function fromRedToBlue() {
  const sourceColor = { red: 240, green: 62, blue: 62 };
  const perChange = (window.pageYOffset - expertiseSectionScrollPosition) / 960;
  const currentColor = {
    red: Math.round(sourceColor.red - 165 * perChange),
    green: Math.round(sourceColor.green + 22 * perChange),
    blue: Math.round(sourceColor.blue + 180 * perChange)
  };
  bodyElement.style.backgroundColor = `rgb(${currentColor.red}, ${currentColor.green}, ${currentColor.blue})`;
  cubeElement.style.fill = `rgb(${currentColor.red}, ${currentColor.green}, ${currentColor.blue})`;
}

function fromBlueToPurple() {
  const sourceColor = { red: 75, green: 84, blue: 242 };
  const perChange = (window.pageYOffset - investmentsSectionScrollPosition) / 960;
  const currentColor = {
    red: Math.round(sourceColor.red + 82 * perChange),
    green: Math.round(sourceColor.green - 29 * perChange),
    blue: Math.round(sourceColor.blue - 15 * perChange)
  };
  bodyElement.style.backgroundColor = `rgb(${currentColor.red}, ${currentColor.green}, ${currentColor.blue})`;
  cubeElement.style.fill = `rgb(${currentColor.red}, ${currentColor.green}, ${currentColor.blue})`;
}

window.onload = function() {
  const logo = document.querySelector('.logo-container > svg');
  const menuItems = document.querySelectorAll('.menu-container > .link');
  const menButton = document.querySelector('.menu-button > svg');
  const currentPosition = window.pageYOffset;

  if (currentPosition >= 0 && currentPosition < 960) {
    const redLogoColor = 'rgb(237, 28, 36)';
    const black = 'rgb(0, 0, 0)';

    logo.style.fill = redLogoColor;
    menuItems.forEach(function(item) {
      item.style.color = black;
    });
    menButton.style.fill = black;
  }

  if (currentPosition > 1943) {
    const white = 'rgb(255, 255, 255)';
    logo.style.fill = white;
    menuItems.forEach(function(item) {
      item.style.color = white;
    });
    menButton.style.fill = white;
  }
};
