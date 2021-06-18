// 自行加入的JS請寫在這裡
$(function() {
    // 首頁輪播
    // kv
    $('.county_list').find('ul li a').hover(function() {
        var COUNTYNAME = $(this).attr('class');
        $('.taiwan_map').find('.map').find('.' + COUNTYNAME).addClass('active');
    }, function() {
        $('.taiwan_map').find('.el').removeClass('active');
    });
    var $carousel = $('.mpSlider').slick({
        mobileFirst: true,
        dots: false,
        arrow: true,
        infinite: true,
        speed: 1000,
        autoplaySpeed: 5000,
        autoplay: true,
        fade: true,
        lazyLoaded: true,
        lazyLoad: 'ondemand',
        ease: 'ease',
        pauseOnHover: false
    });
    /* The first slide will not get the animation,
    therefore I add and remove a class that will trigger the css animation */
    $carousel.find('.slick-current').addClass('start');
    /* I use a set-timeoutfunction to hinder optimization
    of adding and removing classes */
    setTimeout(function() {
        $carousel.find('.start').removeClass('start');
    }, 0)
    $('.photoSlider').slick({
        mobileFirst: true,
        dots: false,
        arrow: true,
        infinite: true,
        speed: 1000,
        autoplaySpeed: 5000,
        autoplay: true,
        fade: true,
        lazyLoaded: true,
        lazyLoad: 'ondemand',
        ease: 'ease',
        pauseOnHover: false
    });
    // 主題公路
    $('.recommend .roadSlider').slick({
        mobileFirst: true,
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        arrow: true,
        lazyLoaded: true,
        lazyLoad: 'ondemand',
        ease: 'ease',
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: true
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: true
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: true
            }
        }, {
            breakpoint: 575,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: true
            }
        }, {
            breakpoint: 200,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true
            }
        }]
    });
    // 主題公路
    $('.topicContent .topicSlider').slick({
        mobileFirst: true,
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        arrow: true,
        lazyLoaded: true,
        lazyLoad: 'ondemand',
        ease: 'ease',
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                arrows: true
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: true
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: true
            }
        }, {
            breakpoint: 575,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: true
            }
        }, {
            breakpoint: 200,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true
            }
        }]
    });
    // 主題公路
    $('.secretContent .roadSlider').slick({
        mobileFirst: true,
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        arrow: true,
        lazyLoaded: true,
        lazyLoad: 'ondemand',
        ease: 'ease',
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                arrows: true
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: true
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: true
            }
        }, {
            breakpoint: 575,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: true
            }
        }, {
            breakpoint: 200,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true
            }
        }]
    });
    // 影音專區
    $('.videoSlider').slick({
        mobileFirst: true,
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrow: true,
        lazyLoaded: true,
        lazyLoad: 'ondemand',
        ease: 'ease',
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: true
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: true
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true
            }
        }, {
            breakpoint: 575,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: true
            }
        }, {
            breakpoint: 200,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true
            }
        }]
    });
    // 影音專區
    $('.othervideoSlider').slick({
        mobileFirst: true,
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrow: true,
        lazyLoaded: true,
        lazyLoad: 'ondemand',
        ease: 'ease',
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true
            }
        }, {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true
            }
        }, {
            breakpoint: 200,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true
            }
        }]
    });
    // 影音專區
    $('.changeSlider').slick({
        mobileFirst: true,
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrow: true,
        lazyLoaded: true,
        lazyLoad: 'ondemand',
        ease: 'ease',
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: true
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: true
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: true
            }
        }, {
            breakpoint: 575,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: true
            }
        }, {
            breakpoint: 200,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true
            }
        }]
    });
    // var resizeTimer1;
    // var window_W = $(window).width();
    // $(window).bind("load resize", function(event) {
    //     clearTimeout(resizeTimer1);
    //     resizeTimer = setTimeout(function() {
    //         window_W = $(window).width();
    //     if(window_W < 767){
    //         $('.secretContent').slick('reinit');
    //     }, 50);
    // });
    // 影音專區
    $('.secret .secretContent').slick({
        mobileFirst: true,
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrow: true,
        lazyLoaded: true,
        lazyLoad: 'ondemand',
        ease: 'ease',
        responsive: [{
            breakpoint: 992,
            settings: "unslick"
        }, {
            breakpoint: 545,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: true
            }
        }, {
            breakpoint: 544,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true
            }

        }]
    });
    // 廣告輪播
    $('.adSlider').slick({
        mobileFirst: true,
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        arrow: true,
        lazyLoaded: true,
        lazyLoad: 'ondemand',
        ease: 'ease',
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                arrows: true
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                arrows: true
            }
        }, {
            breakpoint: 575,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: true
            }
        }]
    });
    //燈箱slick+lightBox組合
    $('.cp_slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,
        pauseOnHover: true,
        pauseOnFocus: true,
        focusOnSelect: true,
        accessibility: true,
        lazyLoad: 'ondemand',
        ease: 'ease',
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 545,
            settings: {
                arrows: true,
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        }]
    });
    $('.cp_slider').slickLightbox({
        caption: 'caption',
        lazyLoad: 'ondemand',
        useHistoryApi: 'true',
        ease: 'ease',
        lazy: true
    });
    // cp_photo
    $('.Slider-for').on('init reInit afterChange', function(event, slick, currentSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $('.controls').html(i + '/' + slick.slideCount);
    });
    $('.Slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        swipe: false,
        arrows: true,
        swipeToSlide: false,
        lazyLoad: 'ondemand',
        asNavFor: '.Slider-nav',
        infinite: true
    });
    $('.Slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.Slider-for',
        dots: true,
        arrows: true,
        lazyLoad: 'ondemand',
        focusOnSelect: true,
        infinite: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 545,
            settings: {
                arrows: true,
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: false
            }
        }]
    });
    //右側按鈕
    if ($('.quickDot').length > 0) {
        $('.gotoTopic').click(function(e) {
            $('html, body').stop(true, true).animate({ scrollTop: $('.topic').offset().top }, 600, 'linear');
            $(this).blur();
            e.preventDefault();
        });
        $('.gotoNews').click(function(e) {
            $('html, body').stop(true, true).animate({ scrollTop: $('.news').offset().top }, 600, 'linear');
            $(this).blur();
            e.preventDefault();
        });
        $('.gotoSocial').click(function(e) {
            $('html, body').stop(true, true).animate({ scrollTop: $('.social').offset().top - 40 }, 600, 'linear');
            $(this).blur();
            e.preventDefault();
        });
        $('.gotoAbout').click(function(e) {
            $('html, body').stop(true, true).animate({ scrollTop: $('.about').offset().top }, 600, 'linear');
            $(this).blur();
            e.preventDefault();
        });
        $('.gotoPhoto').click(function(e) {
            $('html, body').stop(true, true).animate({ scrollTop: $('.photo').offset().top }, 600, 'linear');
            $(this).blur();
            e.preventDefault();
        });
        $('.gotoVideo').click(function(e) {
            $('html, body').stop(true, true).animate({ scrollTop: $('.video').offset().top }, 600, 'linear');
            $(this).blur();
            e.preventDefault();
        });
        $('.gotoCpIntro').click(function(e) {
            $('html, body').stop(true, true).animate({ scrollTop: $('.cp_intro').offset().top - 40 }, 600, 'linear');
            $(this).blur();
            e.preventDefault();
        });
        $('.gotoCpLengend').click(function(e) {
            $('html, body').stop(true, true).animate({ scrollTop: $('.cp_legend').offset().top - 40 }, 600, 'linear');
            $(this).blur();
            e.preventDefault();
        });
        $('.gotoBasic').click(function(e) {
            $('html, body').stop(true, true).animate({ scrollTop: $('.basic').offset().top - 40 }, 600, 'linear');
            $(this).blur();
            e.preventDefault();
        });
        $('.gotoRecommend').click(function(e) {
            $('html, body').stop(true, true).animate({ scrollTop: $('.recommend').offset().top - 40 }, 600, 'linear');
            $(this).blur();
            e.preventDefault();
        });
        $('.gotoOtherVideo').click(function(e) {
            $('html, body').stop(true, true).animate({ scrollTop: $('.othervideo').offset().top - 40 }, 600, 'linear');
            $(this).blur();
            e.preventDefault();
        });
        $('.gotoChange').click(function(e) {
            $('html, body').stop(true, true).animate({ scrollTop: $('.change').offset().top - 40 }, 600, 'linear');
            $(this).blur();
            e.preventDefault();
        });
        $('.gotoCpTopic').click(function(e) {
            $('html, body').stop(true, true).animate({ scrollTop: $('.cp_topic').offset().top - 40 }, 600, 'linear');
            $(this).blur();
            e.preventDefault();
        });
        $('.gotoCpStory').click(function(e) {
            $('html, body').stop(true, true).animate({ scrollTop: $('.cp_story').offset().top - 40 }, 600, 'linear');
            $(this).blur();
            e.preventDefault();
        });

    }
    //
    $('.map_tag').find('a').each(function(index, el) {
        var zoneName = $(this).attr('class');
        console.log(zoneName);
        $(this).hover(function() {
            $('.tw_map').find('.' + zoneName).addClass('active');
        }, function() {
            $('.tw_map').find('a').removeClass('active');
        });
    });
    //
    // $('.tw_map a').each(function(index, el) {
    //     $this = $(this);
    //     $this.mousemove(function(e) {
    //         $(this).find('span').show();
    //         // var TEST = $('span').position();
    //         // var TESTX = TEST.left;
    //         // var TESTY = TEST.top;
    //         // var parentOffset = $(this).parent().offset();
    //         // var relX = e.pageX - parentOffset.left;
    //         // var relY = e.pageY - parentOffset.top
    //         // console.log('mouseX = '+TESTX +'mouseY = '+ TESTY);
    //         // console.log('relX = '+relX +'relY = '+ relY);
    //         var relX = e.pageX;
    //         var relY = e.pageY;
    //         $(this).find('span').css({ left: relX + 100, top: relY - 50 });
    //         //取每個path的name值
    //         //mouse div 放入 path的 name值
    //     });
    //     $this.mouseout(function(event) {
    //         $('.taiwan_map a span').hide();
    //     });
    // });
    // $('.tw_map a').each(function(index, el) {
    //     // $("#log").text("pageX: " + event.pageX + ", pageY: " + event.pageY);
    //     $(this).on("mousemove", function(event) {
    //         $(this).find('span').show();
    //         $(this).find('span').css("top", event.pageY).css('left', event.pageX)
    //     });
    // });
    $(window).on("load resize scroll", function(e) {
        var window_H = $(window).innerHeight();
        var windowTop = $(window).scrollTop();
        $('.section').each(function(index, el) {
            // 可以+130 讓圖進入多點再跑動畫
            var thisTop = Math.floor($(this).offset().top - windowTop + 200);
            //imgTop < window_H 是指進入到最底部
            //imgTop>0 是指還沒滾到最上方
            //同時條件成立 代表物件在看得到的地方才會trigger動畫
            if (thisTop < window_H && thisTop > 0) {
                $(this).addClass('effect');
            }
        });
    });
    $(window).on("load resize scroll", function(e) {
        var window_H = $(window).innerHeight();
        var windowTop = $(window).scrollTop();
        $('.mask').each(function(index, el) {
            // 可以+130 讓圖進入多點再跑動畫
            var imgTop = Math.floor($(this).offset().top - windowTop + 130);
            //imgTop < window_H 是指進入到最底部
            //imgTop>0 是指還沒滾到最上方
            //同時條件成立 代表物件在看得到的地方才會trigger動畫
            if (imgTop < window_H && imgTop > 0) {
                $(this).addClass('effect');
            }
        });
    });
    // before
    $('.before-for').on('init reInit afterChange', function(event, slick, currentSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $('.controls').html(i + '/' + slick.slideCount);
    });
    $('.before-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        swipe: false,
        arrows: true,
        swipeToSlide: false,
        lazyLoad: 'ondemand',
        asNavFor: '.before-nav',
        infinite: true
    });
    $('.before-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.before-for',
        dots: true,
        arrows: true,
        lazyLoad: 'ondemand',
        focusOnSelect: true,
        infinite: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 545,
            settings: {
                arrows: true,
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: false
            }
        }]
    });
    // after
    $('.after-for').on('init reInit afterChange', function(event, slick, currentSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $('.controls').html(i + '/' + slick.slideCount);
    });
    $('.after-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        swipe: false,
        arrows: true,
        swipeToSlide: false,
        lazyLoad: 'ondemand',
        asNavFor: '.after-nav',
        infinite: true
    });
    $('.after-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.after-for',
        dots: true,
        arrows: true,
        lazyLoad: 'ondemand',
        focusOnSelect: true,
        infinite: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 545,
            settings: {
                arrows: true,
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: false
            }
        }]
    });
});