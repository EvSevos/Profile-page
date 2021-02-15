
$(function(){
    var navMain = $(".navbar-collapse");
    navMain.on("click", "a:not([data-toggle])", null, function () {
        navMain.collapse('hide');
    });
});
/*------------------------*/

$('.nav-item .nav-link').click(function(){
    $('.nav-item .nav-link').removeClass('active');
    $(this).addClass('active');
})
/*------------------------*/
function scroll(){
    var $sections = $('section');
    $sections.each(function(i,el){
        var top  = $(el).offset().top-100;
        var bottom = top +$(el).height();
        var scroll = $(window).scrollTop();
        var id = $(el).attr('id');
        if( scroll > top && scroll < bottom){
            $('a.active').removeClass('active');
            $('a[href="#'+id+'"]').addClass('active');

        }
    })
}
jQuery(window).on("scroll", scroll);

$("nav").on("click","a", function (event) {
    // исключаем стандартную реакцию браузера
    event.preventDefault();
    jQuery(window).off("scroll", scroll);
    $('a.active').removeClass('active');
    $(event.target).addClass('active');

    // получем идентификатор блока из атрибута href
    var id  = $(this).attr('href'),

        // находим высоту, на которой расположен блок
        top = $(id).offset().top;

    // анимируем переход к блоку, время: 800 мс
    $('body,html').animate({
        scrollTop: top
    }, 800, null, function() {
        jQuery(window).on("scroll", scroll);
    });
});
/*------------------------*/

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        navText: [ '', ' ' ],

        responsive:{
            0:{
                items:1
            },

            1000:{
                items:1
            }
        }


    });
});
