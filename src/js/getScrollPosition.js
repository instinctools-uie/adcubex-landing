function getScrollPosition() {
  return (
    (window.document.documentElement && window.document.documentElement.scrollTop) ||
    window.pageYOffset ||
    window.scrollY ||
    0
  );
}

export default getScrollPosition;
