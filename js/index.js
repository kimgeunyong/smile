$("document").ready(function(){



    $(".header .header-list .nav ul li:nth-child(1)").click(function(){
        $(".wrap .b-nav").toggleClass("on")
    })

    $(".header .header-list .nav ul li:nth-child(2)").mouseover(function(){
        $(".wrap .side-nav .nav:nth-child(1)").addClass("on")
        $(".wrap .side-nav .nav:not(:nth-child(1))").removeClass("on")
    })
    $(".header .header-list .nav ul li:nth-child(3)").mouseover(function(){
        $(".wrap .side-nav .nav:nth-child(2)").addClass("on")
        $(".wrap .side-nav .nav:not(:nth-child(2))").removeClass("on")
    })
    $(".header .header-list .nav ul li:nth-child(4)").mouseover(function(){
        $(".wrap .side-nav .nav:nth-child(3)").addClass("on")
        $(".wrap .side-nav .nav:not(:nth-child(3))").removeClass("on")
    })
    $(".header .header-list .nav ul li:nth-child(5)").mouseover(function(){
        $(".wrap .side-nav .nav:nth-child(4)").addClass("on")
        $(".wrap .side-nav .nav:not(:nth-child(4))").removeClass("on")
    })
    $(".header .header-list .nav ul li:nth-child(6)").mouseover(function(){
        $(".wrap .side-nav .nav:nth-child(5)").addClass("on")
        $(".wrap .side-nav .nav:not(:nth-child(5))").removeClass("on")
    })
    $(".header .header-list .nav ul li:nth-child(7)").mouseover(function(){
        $(".wrap .side-nav .nav:nth-child(8)").addClass("on")
        $(".wrap .side-nav .nav:not(:nth-child(8))").removeClass("on")
    })
    $(".header .header-list .nav ul li:nth-child(8)").mouseover(function(){
        $(".wrap .side-nav .nav:nth-child(6)").addClass("on")
        $(".wrap .side-nav .nav:not(:nth-child(6))").removeClass("on")
    })
    $(".header .header-list .nav ul li:nth-child(9)").mouseover(function(){
        $(".wrap .side-nav .nav:nth-child(7)").addClass("on")
        $(".wrap .side-nav .nav:not(:nth-child(7))").removeClass("on")
    })

    $(".header .header-list .nav ul li").mouseout(function(){
        $(".wrap .side-nav .nav").removeClass("on")
    })


    const swiper = new Swiper(".swiper",{
        autoplay: {
            delay: 2000
        },
        loop: true,
        pagination: {
            el: ".paging",
            type: "fraction",
        },
    })

    // 재생 관련
    var silde_play = $('.slide_play');
    var silde_pause = $('.slide_pause')

    silde_pause.click(function(){
        silde_pause.hide();
        silde_play.show();
    })
    silde_play.click(function(){
        silde_pause.show();
        silde_play.hide();
    })

    //자동 재생 실행
    silde_play.click(function() {
        swiper.autoplay.start();
    });
    // 일시멈춤 
    silde_pause.click(function() {
        swiper.autoplay.stop();
    });


})