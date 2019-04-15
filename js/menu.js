const menuContainer = document.querySelector('.menu-container');
const items = document.querySelectorAll('.menu-container > a');

menuContainer.addEventListener('click', function(e) {
  const linkElement = e.target;
  const isClickOnLink = linkElement.classList.contains('link');

  if (!isClickOnLink) {
    return;
  }

  const isRedLink = linkElement.classList.contains('link_red');
  if (isRedLink) {
    for (let i = 0; i < items.length; i++) {
      const isActiveLink = items[i].classList.contains('link_red--active');
      if (isActiveLink) {
        items[i].classList.remove('link_red--active');
      }
    }
    linkElement.classList.add('link_red--active');
  }

  const isBlackLink = linkElement.classList.contains('link_black');

  if (isBlackLink) {
    for (let i = 0; i < items.length; i++) {
      const isActiveLink = items[i].classList.contains('link_black--active');
      if (isActiveLink) {
        items[i].classList.remove('link_black--active');
      }
    }
    linkElement.classList.add('link_black--active');
  }
});

function changeActiveMenuItemToBlack() {
  for (let i = 0; i < items.length; i++) {
    const isActiveRedLink = items[i].classList.contains('link_red--active');
    if (isActiveRedLink) {
      items[i].classList.remove('link_red--active');
      items[i].classList.add('link_black--active');
    }
    items[i].classList.remove('link_red');
    items[i].classList.add('link_black');
  }
}

function changeActiveMenuItemToRed() {
  for (let i = 0; i < items.length; i++) {
    const isActiveBlackLink = items[i].classList.contains('link_black--active');
    if (isActiveBlackLink) {
      items[i].classList.remove('link_black--active');
      items[i].classList.add('link_red--active');
    }
    items[i].classList.remove('link_black');
    items[i].classList.add('link_red');
  }
}
