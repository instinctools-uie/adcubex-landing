const Constants = (function() {
  const constants = {
    bodyElement: { selector: 'body', property: 'backgroundColor' },
    cubeElement: { selector: '.cube', property: 'fill' },
    cubeLeftSideElementOptions: {
      selector: '#main-cube-scale-animation :nth-child(1)',
      property: 'fill',
      currentColor: { red: 246, green: 246, blue: 247 },
      redColor: { red: 240, green: 62, blue: 62 },
      blueColor: { red: 75, green: 84, blue: 242 },
      purpleColor: { red: 157, green: 55, blue: 227 }
    },
    cubeRightSideElementOptions: {
      selector: '#main-cube-scale-animation :nth-child(2)',
      property: 'fill',
      currentColor: { red: 232, green: 232, blue: 232 },
      redColor: { red: 191, green: 49, blue: 48 },
      blueColor: { red: 67, green: 74, blue: 190 },
      purpleColor: { red: 147, green: 45, blue: 191 }
    },
    cubeBottomSideSideElementOptions: {
      selector: '#main-cube-scale-animation :nth-child(3)',
      property: 'fill',
      currentColor: { red: 218, green: 220, blue: 220 },
      redColor: { red: 219, green: 56, blue: 57 },
      blueColor: { red: 72, green: 80, blue: 223 },
      purpleColor: { red: 150, green: 49, blue: 213 }
    },

    redBackgroundColor: { red: 240, green: 62, blue: 62 },
    blueBackgroundColor: { red: 75, green: 84, blue: 242 },
    purpleBackgroundColor: { red: 157, green: 55, blue: 227 }
  };

  return constants;
})();
