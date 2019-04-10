const cubes = window.document.querySelectorAll('.cube');
cubes.forEach(function(cube, i) {
  cube.style.width = cubesPosition[i].width + 'px';
  cube.style.top = cubesPosition[i].top + 'px';
  cube.style.left = cubesPosition[i].left + 'px';
  cube.style.zIndex = cubesPosition[i].zIndex;
});
