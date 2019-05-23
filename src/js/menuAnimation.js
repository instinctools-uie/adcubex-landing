const menu = document.querySelector('.toggle-menu-button');
const logo = document.querySelector('.logo');
const headerContainer = document.querySelector('.header-container');

function hideHeader() {
  if (headerContainer.classList.contains('header-container_white')) {
    headerContainer.classList.remove('header-container_white');
    headerContainer.classList.add('header-container_hide');
  }

  if (logo.classList.contains('header-element_show')) {
    logo.classList.remove('header-element_show');
  }

  if (menu.classList.contains('header-element_show')) {
    menu.classList.remove('header-element_show');
  }

  logo.classList.add('header-element_hide');
  menu.classList.add('header-element_hide');
}

function showHeader() {
  if (headerContainer.classList.contains('header-container_hide')) {
    headerContainer.classList.remove('header-container_hide');

  }

  if (logo.classList.contains('header-element_hide')) {
    logo.classList.remove('header-element_hide');
    headerContainer.classList.add('header-container_white');
  }

  if (menu.classList.contains('header-element_hide')) {
    menu.classList.remove('header-element_hide');
  }

  logo.classList.add('header-element_show');
  menu.classList.add('header-element_show');
}

export default function changeHeaderVisibility(scrollPreviousPosition, scrollCurrentPosition) {
  if (scrollCurrentPosition > scrollPreviousPosition) {
    hideHeader();
  } else {
    showHeader();
  }
}
