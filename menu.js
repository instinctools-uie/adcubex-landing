const items = document.querySelectorAll('.menu-container > span');

items.forEach((item) => {
    item.addEventListener('click', function (e) {
        items.forEach((item, index, arr) => {
            if (item.style.color === 'red') {
                if (index === 0) {
                    item.style.color = arr[index+1].style.color;
                }
                item.style.color = arr[index-1].style.color;
            }
        });
        e.target.style.color = 'red';
    })
});