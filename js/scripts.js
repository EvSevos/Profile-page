
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
