const images = window.document.querySelectorAll('.image');
images.forEach(function(image, i) {
  image.style.width = cubesPosition[i].width + 'px';
  image.style.top = cubesPosition[i].top + 'px';
  image.style.left = cubesPosition[i].left + 'px';
  image.style.zIndex = cubesPosition[i].zIndex;
});
