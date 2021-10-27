$(document).ready(function() {
    var toggle = true
    $(".nav-btn").on("click", function() {
        toggle = !toggle;
        if(!toggle){
            $("nav").stop().animate({
                "left" : "-70%"
            });
            $("nav .nav-close-layer").stop().fadeIn();
        } else {
            $("nav").stop().animate({
                "left" : "-100%"
            });
            $("nav .nav-close-layer").stop().fadeOut();
        }
        $(this).toggleClass("on")
    });
    $("nav .nav-close-layer").on("click", function() {
        $("nav").stop().animate({
            "left" : "-100%"
        });
        $("nav .nav-close-layer").stop().fadeOut();
        toggle = true;
        $("nav .nav-btn").removeClass("on");
    })
    
    $(".main .slider").eq(0).slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 5,
    })

    $(".cho button").on("click", function() {
        $(".slick-initialized").slick("unslick");

        var i = $(this).index();

        $(".main .slider").eq(i).stop().show().siblings().hide();
        $(".main .slider").eq(i).slick({
            centerMode: true,
            centerPadding: '60px',
            slidesToShow: 5,
        })
    })
});

