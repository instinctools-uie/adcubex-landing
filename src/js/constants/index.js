export const RED_COLOR = { red: 240, green: 62, blue: 62 };
export const BLUE_COLOR = { red: 75, green: 84, blue: 242 };
export const PURPLE_COLOR = { red: 157, green: 55, blue: 227 };
export const RATE_WSXGA_SCROLL = 960;
export const RATE_WSGA_SCROLL = 800;
export const WXGA_BREAKPOINT = 1400;
export const WSXGA_ANIMATION_DELAY = 800;
export const WSGA_ANIMATION_DELAY = 200;

export const MAIN_PAGE_TOGGLE_CONTENT = {
  sectionContainer: 'section-container',
  delayBetweenSection: 4
};

export const INNER_PAGES_TOGGLE_CONTENT = {
  sectionContainer: 'article',
  delayBetweenSection: 20
};

export const CUBE_LEFT_SIDE_ELEMENT_OPTIONS = {
  selector: '#main-cube-scale-animation :nth-child(1)',
  property: 'fill',
  defaultColor: { red: 246, green: 246, blue: 247 },
  redColor: RED_COLOR,
  blueColor: BLUE_COLOR,
  purpleColor: PURPLE_COLOR
};
export const CUBE_RIGHT_SIDE_ELEMENT_OPTIONS = {
  selector: '#main-cube-scale-animation :nth-child(2)',
  property: 'fill',
  defaultColor: { red: 232, green: 232, blue: 232 },
  redColor: { red: 191, green: 49, blue: 48 },
  blueColor: { red: 67, green: 74, blue: 190 },
  purpleColor: { red: 147, green: 45, blue: 191 }
};
export const CUBE_BOTTOM_SIDE_ELEMENT_OPTIONS = {
  selector: '#main-cube-scale-animation :nth-child(3)',
  property: 'fill',
  defaultColor: { red: 218, green: 220, blue: 220 },
  redColor: { red: 219, green: 56, blue: 57 },
  blueColor: { red: 72, green: 80, blue: 223 },
  purpleColor: { red: 150, green: 49, blue: 213 }
};

export const MAIN_CUBE_OPTIONS = {
  minScaleValue: 1,
  maxScaleValue: 8,
  animationDuration: 6,
  animationDelay: 1,
  translateAnimationId: 'main-cube-translate-animation'
};

export const CUBES_OPTIONS = {
  maxTranslateYPosition: 5000,
  minTranslateYWhenScrollOnWhiteSections: 0,
  maxTranslateYWhenScrollOnWhiteSections: 500
};

export const EMAIL = {
  SERVER_URL: 'https://adcubex.herokuapp.com'
};
