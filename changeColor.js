window.onscroll = function() {
  const scrollPosition = window.pageYOffset;

  if (scrollPosition >= 960 && scrollPosition <= 1920) {
    fromWhiteToRed();
    fromBlackToWhiteMenu();
    fromRedToWhiteLogo();
  }

  if (scrollPosition > 1920 && scrollPosition <= 2880) {
    fromRedToBlue();
  }

  if (scrollPosition > 2880) {
    fromBlueToPurple();
  }
};

function fromRedToWhiteLogo() {
  const sourceColor = { red: 237, green: 28, blue: 36 };
  const perChange = (window.pageYOffset - 960) / 960;
  const currentColor = {
    red: Math.round(sourceColor.red + 18 * perChange),
    green: Math.round(sourceColor.green + 227 * perChange),
    blue: Math.round(sourceColor.blue + 219 * perChange)
  };
  const logo = document.querySelector('.logo-container > svg');
  logo.style.fill = `rgb(${currentColor.red}, ${currentColor.green}, ${currentColor.blue})`;
}

function fromBlackToWhiteMenu() {
  const perChange = (window.pageYOffset - 960) / 960;
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

const container = document.querySelector('body');

function fromWhiteToRed() {
  const sourceColor = { red: 255, green: 255, blue: 255 };
  const perChange = (window.pageYOffset - 960) / 960;
  const currentColor = {
    red: Math.round(sourceColor.red - (15 * perChange)),
    green: Math.round(sourceColor.green - (193 * perChange)),
    blue: Math.round(sourceColor.blue - (193 * perChange))
  };
  container.style.backgroundColor = `rgb(${currentColor.red}, ${currentColor.green}, ${currentColor.blue})`;
}

function fromRedToBlue() {
  const sourceColor = { red: 240, green: 62, blue: 62 };
  const perChange = (window.pageYOffset - 1920) / 960;
  const currentColor = {
    red: Math.round(sourceColor.red - (165 * perChange)),
    green: Math.round(sourceColor.green + (22 * perChange)),
    blue: Math.round(sourceColor.blue + (180 * perChange))
  };
  container.style.backgroundColor = `rgb(${currentColor.red}, ${currentColor.green}, ${currentColor.blue})`;
}

function fromBlueToPurple() {
  const sourceColor = { red: 75, green: 84, blue: 242 };
  const perChange = (window.pageYOffset - 2880) / 960;
  const currentColor = {
    red: Math.round(sourceColor.red + 82 * perChange),
    green: Math.round(sourceColor.green - 29 * perChange),
    blue: Math.round(sourceColor.blue - 15 * perChange)
  };
  container.style.backgroundColor = `rgb(${currentColor.red}, ${currentColor.green}, ${currentColor.blue})`;
}
