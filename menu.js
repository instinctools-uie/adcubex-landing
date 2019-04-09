const menuContainer = document.querySelector('.menu-container');
menuContainer.addEventListener('click', function (e) {
    const items = document.querySelectorAll('.menu-container > span');

    for (let i = 0; i < items.length; i++) {
        const isActiveLink = items[i].classList.contains('link--active');
        if (isActiveLink && i !== 0) {
            items[i].classList.remove('link--active');
            items[i].style.color = items[i-1].style.color;
        }

        if (isActiveLink && i === 0){
            items[i].classList.remove('link--active');
            items[i].style.color = items[i+1].style.color;
        }
    }
        e.target.classList.add('link--active');

    }
);