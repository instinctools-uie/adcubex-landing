export const WHITE_COLOR = { red: 255, green: 255, blue: 255 };
export const BLACK_COLOR = { red: 0, green: 0, blue: 0 };
export const RED_BACKGROUND_COLOR = { red: 240, green: 62, blue: 62 };
export const BLUE_BACKGROUND_COLOR = { red: 75, green: 84, blue: 242 };
export const PURPLE_BACKGROUND_COLOR = { red: 157, green: 55, blue: 227 };
export const RATE_CHANGE_SCROLL = 960;

export const BODY_ELEMENT_OPTIONS = {
  selector: 'body',
  property: 'backgroundColor',
  defaultColor: WHITE_COLOR
};
export const CUBE_LEFT_SIDE_ELEMENT_OPTIONS = {
  selector: '#main-cube-scale-animation :nth-child(1)',
  property: 'fill',
  defaultColor: { red: 246, green: 246, blue: 247 },
  redColor: { red: 240, green: 62, blue: 62 },
  blueColor: { red: 75, green: 84, blue: 242 },
  purpleColor: { red: 157, green: 55, blue: 227 }
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
export const MENU_ELEMENT_OPTIONS = {
  selector: '.menu-container',
  property: 'color',
  defaultColor: BLACK_COLOR
};

export const MENU_BUTTON_ELEMENT_OPTIONS = {
  selector: '.header-open-menu-icon',
  property: 'fill',
  defaultColor: BLACK_COLOR
};

export const LOGO_AD_WORD_OPTIONS = {
  selector: '#logo-AdCubex :nth-child(1)',
  property: 'fill',
  defaultColor: { red: 48, green: 48, blue: 48 },
  whiteColor: WHITE_COLOR
};

export const LOGO_CUBEX_WORD_OPTIONS = {
  selector: '#logo-AdCubex :nth-child(2)',
  property: 'fill',
  defaultColor: { red: 239, green: 62, blue: 62 },
  whiteColor: WHITE_COLOR
};

export const LOGO_GO_HUGE_WORD_OPTIONS = {
  selector: '#when-ad-go-huge',
  property: 'fill',
  defaultColor: { red: 48, green: 48, blue: 48 },
  whiteColor: WHITE_COLOR
};
