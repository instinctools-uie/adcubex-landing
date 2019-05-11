import toggleMenu from '../toggleMenu';

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
const closeMenuIcon = {
  classList: {
    add: jest.fn(),
    remove: jest.fn()
  }
};
const logoElement = {
  classList: {
    add: jest.fn(),
    remove: jest.fn()
  }
};
const openMenuIcon = {
  classList: {
    add: jest.fn(),
    remove: jest.fn()
  }
};
const headerNavigation = {
  setAttribute: jest.fn(),
  removeAttribute: jest.fn(),
  classList: {
    add: jest.fn(),
    remove: jest.fn()
  }
};

describe('toggle menu', () => {
  beforeAll(() => {
    jest.spyOn(document, 'querySelector').mockImplementation(selector => {
      switch (selector) {
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
    closeMenuIcon.classList.add.mockRestore();
    closeMenuIcon.classList.remove.mockRestore();
    logoElement.classList.add.mockRestore();
    logoElement.classList.remove.mockRestore();
    openMenuIcon.classList.add.mockRestore();
    openMenuIcon.classList.remove.mockRestore();
    headerNavigation.classList.add.mockRestore();
    headerNavigation.classList.remove.mockRestore();
    headerNavigation.setAttribute.mockRestore();
    headerNavigation.removeAttribute.mockRestore();
  });

  afterAll(() => {
    document.querySelector.mockRestore();
  });

  it('should open menu', () => {
    toggleMenu();

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

    toggleMenu();

    expect(openMenuIcon.classList.add).toHaveBeenCalledWith('header-open-menu-icon--active');
    expect(openMenuIcon.classList.remove).toHaveBeenCalledTimes(0);

    expect(headerNavigation.classList.remove).toHaveBeenCalledWith('header-navigation--active');
    expect(headerNavigation.classList.add).toHaveBeenCalledTimes(0);

    expect(logoElement.classList.remove).toHaveBeenCalledWith('logo--active');
    expect(logoElement.classList.add).toHaveBeenCalledTimes(0);

    expect(closeMenuIcon.classList.remove).toHaveBeenCalledWith('header-close-menu-icon--active');
    expect(closeMenuIcon.classList.add).toHaveBeenCalledTimes(0);

    expect(headerNavigation.setAttribute).toHaveBeenCalledWith('aria-hidden', 'true');
    expect(headerNavigation.removeAttribute).toHaveBeenCalledTimes(0);
  });
});
