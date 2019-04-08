function stretchSquare() {
    const minHeght = 544;
    const firstSection = window.document.querySelector('.image');
    firstSection.style.height = `${window.scrollY + minHeght}px`;
    firstSection.style.minHeight = minHeght + 'px';
}

function showOrHideText() {
    const scrolled = document.scrollingElement.scrollTop;
    const sections = window.document.querySelectorAll('.section-container');

    for (let i = 0; i < sections.length; i++) {
        const position = sections[i].offsetTop;
        const positionBeforeScrollOnSection = position - 600;
        const isScrollOnSection = scrolled > positionBeforeScrollOnSection && scrolled < position + 350;
        const isActiveSection = sections[i].classList.contains('active');
        if (isScrollOnSection && !isActiveSection) {
            sections[i].classList.add('active');
        } else if (!isScrollOnSection && isActiveSection) {
            sections[i].classList.remove('active');
        }
    }
}

window.addEventListener('scroll', function () {
    stretchSquare();
    showOrHideText();
});