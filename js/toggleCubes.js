var firstCube = document.querySelector('#cube-1');
var advantageSection = window.document.querySelector('.advantage-section');
var advantageSectionScrollPosition = advantageSection.offsetTop;

const transform = window.getComputedStyle(firstCube).transform;

function toggleCubesOpacity() {
  firstCube.style.animation = 'none';
  const perChange = (window.pageYOffset - advantageSectionScrollPosition) / 960;
  const cubeScalePerChange = perChange * 10 > 1 ? perChange * 10 : 1;

  firstCube.style.transform = transform + ' ' + 'scale(' + cubeScalePerChange + ')';
  console.log('transform', transform);
}
