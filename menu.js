const items = document.querySelectorAll('.menu-container > span');
console.log(items);

items.forEach((item) => {
    item.addEventListener('click', function (e) {
        items.forEach(item => {
            if (item.style.color === 'red') {
                item.style.color = 'black';
            }
        });
        e.target.style.color = 'red';
    })
});