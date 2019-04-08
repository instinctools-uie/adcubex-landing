window.onload=function(){
    setInterval(function(){
        var scroll = $(window).scrollTop();
        if (scroll == 0) {
            $("body").animate({backgroundColor: 'white'}, 400); //изначально фон белый
        }
        if (scroll <= 500 && scroll >= 1) {
            $("body").animate({backgroundColor: 'green'}, 400); //затем если проскроллили от 1 до 500 пикселей, то цвет меняется на зелёный
        }
        if (scroll <= 1000 && scroll >= 501) {
            $("body").animate({backgroundColor: 'red'}, 400); //более 501 пикселей прокрутки от верха цвет смениться на красный
        }
        if (scroll <= 1500 && scroll >= 1001) {
            $("body").animate({backgroundColor: 'blue'}, 400);
        }
        if (scroll >= 1501) {
            $("body").animate({backgroundColor: 'yellow'}, 400);
        }
    }, 451);
}