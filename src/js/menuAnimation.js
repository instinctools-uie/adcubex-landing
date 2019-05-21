// const logo = {
//   ad: document.querySelector('#logo_ad'),
//   cubex: document.querySelector('#logo_cubex'),
//   text: document.querySelector('#logo_when-ad-go-huge')
// };

const menu = document.querySelector('.toggle-menu-button');

const logo = document.querySelector('.logo');

export function hideHeader() {
  logo.classList.add('header-element_hide');
  menu.classList.add('header-element_hide');

  if (logo.classList.contains('header-element_show')) {
    logo.classList.remove('header-element_show');
  }

  if (menu.classList.contains('header-element_show')) {
    menu.classList.remove('header-element_show');
  }
}

export function showHeader() {
  logo.classList.add('header-element_show');
  menu.classList.add('header-element_show');

  if (logo.classList.contains('header-element_hide')) {
    logo.classList.remove('header-element_hide');
  }

  if (menu.classList.contains('header-element_hide')) {
    menu.classList.remove('header-element_hide');
  }
}
