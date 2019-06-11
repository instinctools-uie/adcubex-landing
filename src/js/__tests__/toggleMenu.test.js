import { toggleMenuListener, navItemHandler } from '../toggleMenu';

const toggleMenuButton = {
  addEventListener: jest.fn().mockImplementation((event, cb) => {
    expect(event).toBe('click');
    cb();
  }),
  querySelector: jest.fn().mockImplementation(selector => {
    expect(selector).toBe('.header-close-menu-icon--active');
    return false;
  })
};

const navItem = {
  addEventListener: jest.fn().mockImplementation((event, cb) => {
    expect(event).toBe('click');
    cb();
  })
};

const navItems = [];
for (let i = 0; i < 4; i++) {
  navItems[i] = navItem;
}

const body = mockQuerySelector();
const headerElement = mockQuerySelector();
const closeMenuIcon = mockQuerySelector();
const logoElement = mockQuerySelector();
const openMenuIcon = mockQuerySelector();

const headerNavigation = {
  setAttribute: jest.fn(),
  removeAttribute: jest.fn(),
  classList: {
    add: jest.fn(),
    remove: jest.fn()
  }
};
describe.skip('toggle menu', () => {
  beforeAll(() => {
    jest.spyOn(document, 'querySelector').mockImplementation(selector => {
      switch (selector) {
        case 'body':
          return body;
        case '.header-container':
          return headerElement;
        case '.toggle-menu-button':
          return toggleMenuButton;
        case '.logo':
          return logoElement;
        case '.header-open-menu-icon':
          return openMenuIcon;
        case '.header-close-menu-icon':
          return closeMenuIcon;
        case '.header-navigation':
          return headerNavigation;
      }
    });
  });
  afterEach(() => {
    restoreClassListForElements(body, headerElement, closeMenuIcon, logoElement, openMenuIcon, headerNavigation);
    headerNavigation.setAttribute.mockRestore();
    headerNavigation.removeAttribute.mockRestore();
  });
  afterAll(() => {
    document.querySelector.mockRestore();
  });
  it('should open menu', () => {
    toggleMenuListener();

    expect(body.classList.add).toHaveBeenCalledWith('hidden-scroll');
    expect(body.classList.remove).toHaveBeenCalledTimes(0);

    expect(headerElement.classList.add).toHaveBeenCalledWith('header-container--nav-active');

    expect(closeMenuIcon.classList.add).toHaveBeenCalledWith('header-close-menu-icon--active');
    expect(closeMenuIcon.classList.remove).toHaveBeenCalledTimes(0);

    expect(headerNavigation.classList.add).toHaveBeenCalledWith('header-navigation--active');
    expect(headerNavigation.classList.remove).toHaveBeenCalledTimes(0);

    expect(logoElement.classList.add).toHaveBeenCalledWith('logo--active');
    expect(logoElement.classList.remove).toHaveBeenCalledTimes(0);

    expect(openMenuIcon.classList.remove).toHaveBeenCalledWith('header-open-menu-icon--active');
    expect(openMenuIcon.classList.add).toHaveBeenCalledTimes(0);

    expect(headerNavigation.removeAttribute).toHaveBeenCalledWith('aria-hidden');
    expect(headerNavigation.setAttribute).toHaveBeenCalledTimes(0);
  });

  it('should close menu', () => {
    toggleMenuButton.querySelector = jest.fn().mockImplementation(selector => {
      expect(selector).toBe('.header-close-menu-icon--active');
      return true;
    });

    toggleMenuListener();

    expect(openMenuIcon.classList.add).toHaveBeenCalledWith('header-open-menu-icon--active');
    expect(openMenuIcon.classList.remove).toHaveBeenCalledTimes(0);

    expect(body.classList.remove).toHaveBeenCalledWith('hidden-scroll');
    expect(body.classList.add).toHaveBeenCalledTimes(0);

    expect(headerElement.classList.remove).toHaveBeenCalledWith('header-container--nav-active');

    expect(headerNavigation.classList.remove).toHaveBeenCalledWith('header-navigation--active');
    expect(headerNavigation.classList.add).toHaveBeenCalledTimes(0);

    expect(logoElement.classList.remove).toHaveBeenCalledWith('logo--active');
    expect(logoElement.classList.add).toHaveBeenCalledTimes(0);

    expect(closeMenuIcon.classList.remove).toHaveBeenCalledWith('header-close-menu-icon--active');
    expect(closeMenuIcon.classList.add).toHaveBeenCalledTimes(0);

    expect(headerNavigation.setAttribute).toHaveBeenCalledWith('aria-hidden', 'true');
    expect(headerNavigation.removeAttribute).toHaveBeenCalledTimes(0);
  });

  it('hide menu', () => {
    jest.spyOn(document, 'querySelectorAll').mockImplementation(() => {
      return navItems;
    });
    navItemHandler();

    expect(headerElement.classList.remove).toHaveBeenCalledWith('header-container--nav-active');
    expect(headerNavigation.classList.remove).toHaveBeenCalledWith('header-navigation--active');
    expect(logoElement.classList.remove).toHaveBeenCalledWith('logo--active');
    expect(openMenuIcon.classList.add).toHaveBeenCalledWith('header-open-menu-icon--active');
    expect(closeMenuIcon.classList.remove).toHaveBeenCalledWith('header-close-menu-icon--active');
  });
});

function mockQuerySelector() {
  return {
    classList: {
      add: jest.fn(),
      remove: jest.fn()
    }
  };
}

function restoreClassListForElements(...elements) {
  elements.forEach(element => {
    element.classList.add.mockRestore();
    element.classList.remove.mockRestore();
  });
}
