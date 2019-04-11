const menuContainer = document.querySelector('.menu-container');
const items = document.querySelectorAll('.menu-container > a');

menuContainer.addEventListener('click', function(e) {
  const isClickOnLink = e.target.classList.contains('link');

  if (!isClickOnLink) {
    return;
  }

  if (items[0].classList.contains('link_red')) {
    for (let i = 0; i < items.length; i++) {
      const isActiveLink = items[i].classList.contains('link_red--active');
      if (isActiveLink) {
        items[i].classList.remove('link_red--active');
      }
    }
    e.target.classList.add('link_red--active');
  }

  if (items[0].classList.contains('link_black')) {
    for (let i = 0; i < items.length; i++) {
      const isActiveLink = items[i].classList.contains('link_black--active');
      if (isActiveLink) {
        items[i].classList.remove('link_black--active');
      }
    }
    e.target.classList.add('link_black--active');
  }
});

function menuItemActiveScroll() {
  const currentPosition = window.pageYOffset;

  if (currentPosition > 1900) {
    for (let i = 0; i < items.length; i++) {
      if (items[i].classList.contains('link_red--active')) {
        items[i].classList.remove('link_red--active');
        items[i].classList.add('link_black--active');
      }
      items[i].classList.remove('link_red');
      items[i].classList.add('link_black');
    }
  }

  if (currentPosition < 1900) {
    for (let i = 0; i < items.length; i++) {
      if (items[i].classList.contains('link_black--active')) {
        items[i].classList.remove('link_black--active');
        items[i].classList.add('link_red--active');
      }
      items[i].classList.remove('link_black');
      items[i].classList.add('link_red');
    }
  }
}
