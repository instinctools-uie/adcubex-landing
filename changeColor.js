const sections = [];
const sectionsYStart = [];
let activeSection = 0;

const pageInit = function(){
    $("section").each(function(i,v){
        //console.log(123, i, v)
        sections[i] = v;
        sectionsYStart[i] = $(v).offset().top;
    });
};

const ChangeColorOnScroll = function(){
    let scroll = $(window).scrollTop();
    scrollColors(scroll, $("body"), ["#FF006B", "#36DBFF", "#8000D2", "#00FFA7", "rgba(0,0,0,0)"]);
};

const scrollColors = function(scroll, el, colors){
    // which of all the sections, are we in between?
    let z = 0;
    let secLen = sections.length;
    for(let i = 0; i < secLen; i ++){
        if (scroll > sectionsYStart[i]){
            z = i;
        }
    }
    activeSection = z;

    scroll_pos = scroll;
    const animation_begin_pos = sectionsYStart[z]; //where you want the animation to begin
    const animation_end_pos = sectionsYStart[z+1]; //where you want the animation to stop
    let beginning_color = $.Color(colors[z]);
    let ending_color = $.Color(colors[z+1]);

    if(scroll_pos >= animation_begin_pos && scroll_pos <= animation_end_pos ){
        let percentScrolled = scroll_pos / ( animation_end_pos - animation_begin_pos );
        if(percentScrolled>1){ percentScrolled = percentScrolled - z; }
        let newRed = beginning_color.red() + ( ( ending_color.red() - beginning_color.red() ) * percentScrolled );
        let newGreen = beginning_color.green() + ( ( ending_color.green() - beginning_color.green() ) * percentScrolled );
        let newBlue = beginning_color.blue() + ( ( ending_color.blue() - beginning_color.blue() ) * percentScrolled );

        let newAlpha = beginning_color.alpha() + ( ( ending_color.alpha() - beginning_color.alpha() ) * percentScrolled );

        let newColor = new $.Color( newRed, newGreen, newBlue, newAlpha );
        el.animate({ backgroundColor: newColor }, 0);
    } else if ( scroll_pos > animation_end_pos ) {
        el.animate({ backgroundColor: ending_color }, 0);
    } else if ( scroll_pos < animation_begin_pos ) {
        el.animate({ backgroundColor: beginning_color }, 0);
    }
};

$(function(){
    pageInit();
    $(document).scroll(ChangeColorOnScroll);
    $(window).resize(pageInit);
});

