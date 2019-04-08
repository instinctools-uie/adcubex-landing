function stretchSquare() {
    const minHeght = 544;
    const maxHeight = 915;
    const image = window.document.querySelector('.image');
    image.style.height = `${window.scrollY + minHeght}px`;
    image.style.minHeight = minHeght + 'px';
    image.style.maxHeight = maxHeight + 'px';
}

function showOrHideTextOfSection() {
    const scrolled = document.scrollingElement.scrollTop;
    const sections = window.document.querySelectorAll('.section-container');

    for (let i = 0; i < sections.length; i++) {
        const position = sections[i].offsetTop;
        const positionBeforeScrollOnSection = position - 600;
        const isScrollOnSection = scrolled > positionBeforeScrollOnSection && scrolled < position + 350;
        const isActiveSection = sections[i].classList.contains('section-container--active');
        if (isScrollOnSection && !isActiveSection) {
            sections[i].classList.add('section-container--active');
        } else if (!isScrollOnSection && isActiveSection) {
            sections[i].classList.remove('section-container--active');
        }
    }
}

window.addEventListener('scroll', function () {
    stretchSquare();
    showOrHideTextOfSection();
});