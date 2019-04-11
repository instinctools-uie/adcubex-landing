const menuContainer = document.querySelector('.menu-container');

menuContainer.addEventListener('click', function(e) {
  const items = document.querySelectorAll('.menu-container > a');
  const isClickOnLink = e.target.classList.contains('link');

  if (!isClickOnLink) {
    return;
  }

  for (let i = 0; i < items.length; i++) {
    const isActiveLink = items[i].classList.contains('link_red--active');
    if (isActiveLink) {
      items[i].classList.remove('link_red--active');
    }
  }

  e.target.classList.add('link_red--active');
});

function menuItemActiveScroll() {}
