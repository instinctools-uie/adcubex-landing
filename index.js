window.addEventListener('scroll', function () {
    const minHeght = 544;
    const firstSection = window.document.querySelector('.image');
    firstSection.style.height = `${window.scrollY + minHeght}px`;
    firstSection.style.minHeight = minHeght + 'px';
});