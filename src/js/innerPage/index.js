import Swiper from 'swiper';
import { toggleMenuListener } from '../toggleMenu';
import hoverLinkInMenu from '../hoverLinkInMenu';
import toggleContentByScroll from '../toggleContentByScroll';
import { INNER_PAGES_TOGGLE_CONTENT } from '../constants';
import changeHeaderVisibility from '../menuAnimation';
import getScrollPosition from '../getScrollPosition';
import setFooterYear from '../year';

let scrollPreviousPosition = 0;

window.onpageshow = event => {
  if (event.persisted) {
    window.location.reload();
  }
};

window.onload = () => {
  toggleMenuListener();
  hoverLinkInMenu();
  setFooterYear();

  (() =>
    new Swiper('.swiper-container', {
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      }
    }))();
};

window.addEventListener('scroll', () => {
  const scrolled = getScrollPosition();

  toggleContentByScroll(INNER_PAGES_TOGGLE_CONTENT.sectionContainer, INNER_PAGES_TOGGLE_CONTENT.delayBetweenSection);

  changeHeaderVisibility(scrollPreviousPosition, scrolled);
  scrollPreviousPosition = scrolled;
});
