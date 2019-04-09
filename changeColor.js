window.onscroll = function() {
    const scrollPosition = window.pageYOffset;

    if (scrollPosition >= 960 && scrollPosition <= 1920) {
        fromWhiteToRed();
        fromBlackToWhiteMenu();
        fromRedToWhiteLogo();
    }

    if(scrollPosition > 1920 && scrollPosition <= 2880) {
        fromRedToBlue();
    }

    if(scrollPosition > 2880) {
        fromBlueToPurple();
    }
};



function fromRedToWhiteLogo(){
    const sourceColor = {red: 237, green: 28, blue: 36};
    const perChange = (window.pageYOffset - 960) / 960;
    const currentColor = {red: Math.round(sourceColor.red + (18 * perChange)), green: Math.round(sourceColor.green + (227 * perChange)), blue: Math.round(sourceColor.blue + (219 * perChange))};
    document.querySelector('.logo-container > svg').style.fill = `rgb(${currentColor.red}, ${currentColor.green}, ${currentColor.blue})`;
}

function fromBlackToWhiteMenu(){
    const perChange = (window.pageYOffset - 960) / 960;
    const currentColor = {red: Math.round(255 * perChange), green: Math.round(255 * perChange), blue: Math.round(255 * perChange)};
    document.querySelector('.menu-container').style.color = `rgb(${currentColor.red}, ${currentColor.green}, ${currentColor.blue})`;
    document.querySelector('.menu-button > svg').style.fill = `rgb(${currentColor.red}, ${currentColor.green}, ${currentColor.blue})`;
}

function fromWhiteToRed(){
    const sourceColor = {red: 255, green: 255, blue: 255};
    const perChange = 1 - ((window.pageYOffset - 960) / 960);
    const currentColor = {red: sourceColor.red, green: Math.round(sourceColor.green * perChange), blue: Math.round(sourceColor.blue * perChange)};
        document.querySelector('body').style.backgroundColor = `rgb(${currentColor.red}, ${currentColor.green}, ${currentColor.blue})`;
}

function fromRedToBlue(){
    const sourceColor = {red: 255, green: 0, blue: 0};
    const perChange = (window.pageYOffset - 1920) / 960;
    const currentColor = {red: Math.round(sourceColor.red * (1 - perChange)), green: 0, blue: Math.round(255 * perChange)};
        document.querySelector('body').style.backgroundColor = `rgb(${currentColor.red}, ${currentColor.green}, ${currentColor.blue})`;
}

function fromBlueToPurple(){
    const sourceColor = {red: 0, green: 0, blue: 255};
    const perChange = (window.pageYOffset - 2880) / 960;
    const currentColor = {red: Math.round(157 * perChange), green: Math.round(55 * perChange), blue: Math.round(sourceColor.blue - (28 * perChange))};
        document.querySelector('body').style.backgroundColor = `rgb(${currentColor.red}, ${currentColor.green}, ${currentColor.blue})`;
}

