const menuContainer = document.querySelector('.menu-container');
const items = document.querySelectorAll('.menu-container > a');

menuContainer.addEventListener('click', function(e) {
  const link = e.target;
  const isClickOnLink = link.classList.contains('link');

  if (!isClickOnLink) {
    return;
  }

  const isRed = link.classList.contains('link_red');
  if (isRed) {
    for (let i = 0; i < items.length; i++) {
      const isActiveLink = items[i].classList.contains('link_red--active');
      if (isActiveLink) {
        items[i].classList.remove('link_red--active');
      }
    }
    link.classList.add('link_red--active');
  }

  const isBlack = link.classList.contains('link_black');

  if (isBlack) {
    for (let i = 0; i < items.length; i++) {
      const isActiveLink = items[i].classList.contains('link_black--active');
      if (isActiveLink) {
        items[i].classList.remove('link_black--active');
      }
    }
    link.classList.add('link_black--active');
  }
});

function changeActiveMenuItemToBlack() {
  for (let i = 0; i < items.length; i++) {
    if (items[i].classList.contains('link_red--active')) {
      items[i].classList.remove('link_red--active');
      items[i].classList.add('link_black--active');
    }
    items[i].classList.remove('link_red');
    items[i].classList.add('link_black');
  }
}

function changeActiveMenuItemToRed() {
  for (let i = 0; i < items.length; i++) {
    if (items[i].classList.contains('link_black--active')) {
      items[i].classList.remove('link_black--active');
      items[i].classList.add('link_red--active');
    }
    items[i].classList.remove('link_black');
    items[i].classList.add('link_red');
  }
}
