const bodyElement = document.querySelector('body');
const cubeElement = window.document.querySelector('.image');
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
  const menu = document.querySelector('.menu-container');
  menu.style.color = `rgb(${currentColor.red}, ${currentColor.green}, ${currentColor.blue})`;
  const menButton = document.querySelector('.menu-button > svg');
  menButton.style.fill = `rgb(${currentColor.red}, ${currentColor.green}, ${currentColor.blue})`;
}

function fromWhiteToRed() {
  const sourceColor = { red: 255, green: 255, blue: 255 };
  const perChange = 1 - (window.pageYOffset - advantageSectionScrollPosition) / 960;
  const currentColor = {
    red: sourceColor.red,
    green: Math.round(sourceColor.green * perChange),
    blue: Math.round(sourceColor.blue * perChange)
  };
  bodyElement.style.backgroundColor = `rgb(${currentColor.red}, ${currentColor.green}, ${currentColor.blue})`;
  cubeElement.style.fill = `rgb(${currentColor.red}, ${currentColor.green}, ${currentColor.blue})`;
}

function fromRedToBlue() {
  const sourceColor = { red: 255, green: 0, blue: 0 };
  const perChange = (window.pageYOffset - expertiseSectionScrollPosition) / 960;
  const currentColor = {
    red: Math.round(sourceColor.red * (1 - perChange)),
    green: 0,
    blue: Math.round(255 * perChange)
  };
  bodyElement.style.backgroundColor = `rgb(${currentColor.red}, ${currentColor.green}, ${currentColor.blue})`;
  cubeElement.style.fill = `rgb(${currentColor.red}, ${currentColor.green}, ${currentColor.blue})`;
}

function fromBlueToPurple() {
  const sourceColor = { red: 0, green: 0, blue: 255 };
  const perChange = (window.pageYOffset - investmentsSectionScrollPosition) / 960;
  const currentColor = {
    red: Math.round(157 * perChange),
    green: Math.round(55 * perChange),
    blue: Math.round(sourceColor.blue - 28 * perChange)
  };
  bodyElement.style.backgroundColor = `rgb(${currentColor.red}, ${currentColor.green}, ${currentColor.blue})`;
  cubeElement.style.fill = `rgb(${currentColor.red}, ${currentColor.green}, ${currentColor.blue})`;
}
