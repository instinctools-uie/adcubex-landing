// window.addEventListener('load', function () {
//     const firstSection = window.document.querySelector('.image');
//     console.log(firstSection);
//     console.log(123, firstSection.offsetTop);
// });
window.addEventListener('scroll', function () {
    const minHeght = 544;
    const firstSection = window.document.querySelector('.image');
    const currentContentHeight = firstSection.offsetHeight;
    firstSection.style.height = `${window.scrollY + minHeght}px`;
    firstSection.style.minHeight = minHeght + 'px';
    console.log(11,currentContentMinHeight);
});