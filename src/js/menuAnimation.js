const headerContainer = document.querySelector('.header-container');
const defaultPositionHeader = 0;
const visibleClass = 'header-container--visible';
const hideClass = 'header-container--hide';
const topPositionClass = 'header-container--top-position';

function hideHeader() {
  const isHasVisibleClass = headerContainer.classList.contains(visibleClass);
  const isHasHiddenClass = headerContainer.classList.contains(hideClass);

  if (!isHasVisibleClass && !isHasHiddenClass) {
    headerContainer.classList.add(hideClass);
  }

  if (isHasVisibleClass) {
    headerContainer.classList.remove(visibleClass);
    headerContainer.classList.add(hideClass);
  }
}

function showHeader() {
  headerContainer.classList.remove('header-container--indicator');
  if (headerContainer.classList.contains(hideClass)) {
    headerContainer.classList.remove(hideClass);
    headerContainer.classList.add(visibleClass);
    headerContainer.classList.remove(topPositionClass);
  }
}

function removeHeaderBackground() {
  if (headerContainer.classList.contains(visibleClass)) {
    headerContainer.classList.remove(visibleClass);
    headerContainer.classList.add(topPositionClass);
  }
}

export default function changeHeaderVisibility(scrollPreviousPosition, scrollCurrentPosition) {
  if (scrollCurrentPosition > scrollPreviousPosition && scrollCurrentPosition > defaultPositionHeader) {
    hideHeader();
  } else if (scrollCurrentPosition <= defaultPositionHeader) {
    removeHeaderBackground();
  } else {
    showHeader();
  }
}
