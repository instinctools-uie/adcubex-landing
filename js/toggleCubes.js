const cubesElements = document.querySelectorAll('#cubes > g');
var firstCube = document.querySelector('#cube-1');
var advantageSection = window.document.querySelector('.advantage-section');
var advantageSectionScrollPosition = advantageSection.offsetTop;

const transform = window.getComputedStyle(firstCube).transform;

console.log('cubesElements', cubesElements);
function toggleCube() {
  firstCube.style.animation = 'none';
  const perChange = (window.pageYOffset - advantageSectionScrollPosition) / 960;
  const cubeScalePerChange = perChange * 10 > 1 ? perChange * 10 : 1;
  const maxCubeScale = cubeScalePerChange > 10 ? 10 : cubeScalePerChange;

  firstCube.style.transform = transform + ' ' + 'scale(' + maxCubeScale + ')';
  console.log('transform', transform);
}

toggleCube();
