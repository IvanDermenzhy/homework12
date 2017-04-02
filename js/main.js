$( document ).ready(function() {
    $('.two-carousel').owlCarousel({
        loop:true,
        margin:10,
        dots: true,
        responsiveClass:true,
        items:1,
        nav:true,
    });
    $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        gutter:10
    });
    $('.one-carousel').owlCarousel({
        loop:true,
        margin:10,
        dots: true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:1,
                nav:true
            },
            1000:{
                items:8,
                nav:true,
                loop:true
            }
        }
    });
});
