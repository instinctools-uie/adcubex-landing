const menuContainer = document.querySelector('.menu-container');

menuContainer.addEventListener('click', function(e) {
  const items = document.querySelectorAll('.menu-container > a');
  const isClickOnLink = e.target.classList.contains('link');

  if (!isClickOnLink) {
    return;
  }

  for (let i = 0; i < items.length; i++) {
    const isActiveLink = items[i].classList.contains('link--active');
    if (isActiveLink) {
      items[i].classList.remove('link--active');
    }
  }

  e.target.classList.add('link--active');
});

// For smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
