const cubes = window.document.querySelectorAll('.cube-translate-animation');

const minDurationValue = 4;
const durationRange = 10;
const delayRange = 2;

export function cubesAnimation() {
  cubes.forEach(cube => {
    const durationValue = Math.floor(Math.random() * durationRange + minDurationValue);
    const delayValue = Math.floor(Math.random() * delayRange);

    cube.style.animationDuration = `${durationValue}s`;
    cube.style.animationDelay = `${delayValue}s`;
  });
}
