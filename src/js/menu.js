const menuContainer = document.querySelector('.menu-container');
const links = document.querySelectorAll('.menu-container > a');

menuContainer.addEventListener('click', e => {
  const linkElement = e.target;
  const isClickOnLink = linkElement.classList.contains('link');

  if (!isClickOnLink) {
    return;
  }

  const isRedLink = linkElement.classList.contains('link_red');
  if (isRedLink) {
    links.forEach(link => {
      const isActiveLink = link.classList.contains('link_red--active');
      if (isActiveLink) {
        link.classList.remove('link_red--active');
      }
    });

    linkElement.classList.add('link_red--active');
  }

  const isBlackLink = linkElement.classList.contains('link_black');

  if (isBlackLink) {
    links.forEach(link => {
      const isActiveLink = link.classList.contains('link_black--active');
      if (isActiveLink) {
        link.classList.remove('link_black--active');
      }
    });

    linkElement.classList.add('link_black--active');
  }
});

export function changeActiveMenuLinkToBlack() {
  links.forEach(link => {
    const isActiveRedLink = link.classList.contains('link_red--active');
    if (isActiveRedLink) {
      link.classList.remove('link_red--active');
      link.classList.add('link_black--active');
    }
    link.classList.remove('link_red');
    link.classList.add('link_black');
  });
}

export function changeActiveMenuLinkToRed() {
  links.forEach(link => {
    const isActiveBlackLink = link.classList.contains('link_black--active');
    if (isActiveBlackLink) {
      link.classList.remove('link_black--active');
      link.classList.add('link_red--active');
    }
    link.classList.remove('link_black');
    link.classList.add('link_red');
  });
}
