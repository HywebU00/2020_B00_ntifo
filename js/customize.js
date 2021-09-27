// 自行加入的JS請寫在這裡
$(function () {
    // qa
    $('.lp_qa>ul>li')
        .find('.qa_content')
        .each(function (index) {
            $(this)
                .find('.q_block')
                .children('a')
                .off()
                .click(function (e) {
                    $('.lp_qa').find('.a_block').stop().slideUp('400', 'easeOutQuint');

                    $(this).parent('.q_block').siblings('.a_block').stop().slideToggle('400', 'easeOutQuint');
                    e.preventDefault();
                });
        });
    // fixed_panel
    $('.fixed_panel').find('.active').find('.service_list').show();
    $('.fixed_panel')
        .find('h3 a')
        .each(function (index) {
            $(this)
                .off()
                .click(function (e) {
                    $(this)
                        .parents('.item')
                        .removeClass('active')
                        .addClass('active')
                        .siblings('.item')
                        .removeClass('active');
                    $(this).children('i').removeClass('fa-plus-square').addClass('fa-minus-square');
                    $(this)
                        .parents('.item')
                        .siblings('.item')
                        .find('i')
                        .removeClass('fa-minus-square')
                        .addClass('fa-plus-square');
                    $(this).parents('h3').siblings('.service_list').stop(true, true).slideDown('1000', 'easeOutQuint');
                    $(this)
                        .parents('.item')
                        .siblings()
                        .find('.service_list')
                        .stop(true, true)
                        .slideUp('1000', 'easeOutQuint');
                    $(this).blur();
                    e.preventDefault();
                });
        });
    var fixedPanelStatus = true;
    $('.fixed_panel')
        .find('.toggle_btn')
        .off()
        .click(function (e) {
            if (fixedPanelStatus) {
                $('.fixed_panel').stop().addClass('close');
                $(this).find('i').removeClass('fa-chevron-right').addClass('fa-chevron-left');
                fixedPanelStatus = false;
            } else {
                $('.fixed_panel').stop().removeClass('close');
                $(this).find('i').removeClass('fa-chevron-left').addClass('fa-chevron-right');
                fixedPanelStatus = true;
            }
            $(this).blur();
            e.preventDefault();
        });

    // initialize paroller.js and set attributes for selected elements
    $('.link .bg_img').paroller({
        factor: -0.1, // multiplier for scrolling speed and offset

        type: 'foreground', // background, foreground
        direction: 'vertical', // vertical, horizontal
        transition: 'transform 0.25s linear', // CSS transition
    });
    $('.tabSet .leaf_bg').paroller({
        factor: 0.15, // multiplier for scrolling speed and offset
        type: 'foreground', // background, foreground
        direction: 'vertical', // vertical, horizontal
        transition: 'transform 0.25s linear', // CSS transition
    });
    $('.magazine .left_bg').paroller({
        factor: 0.3, // multiplier for scrolling speed and offset
        type: 'foreground', // background, foreground
        direction: 'vertical', // vertical, horizontal
        transition: 'transform 0.25s ease-out', // CSS transition
    });
    $('.magazine .right_bg').paroller({
        factor: 0.5, // multiplier for scrolling speed and offset
        type: 'foreground', // background, foreground
        direction: 'vertical', // vertical, horizontal
        transition: 'transform 0.15s ease-out', // CSS transition
    });
    //wow
    wow = new WOW({
        boxClass: 'wow', // default
        animateClass: 'animated', // default
        offset: 0, // default
        mobile: true, // default
        live: true, // default
    });
    new WOW().init();
    //sticky sidebar
    if ($('.link_img').length > 0) {
        var stickySidebar = new StickySidebar('.link_img', {
            containerSelector: '.lp_link',
            topSpacing: 300,
            bottomSpacing: 0,
            minWidth: 545,
            resizeSensor: true,
        });
    }
    //sticky sidebar
    if ($('.stickySidebar').length > 0) {
        var stickySidebar = new StickySidebar('.stickySidebar', {
            containerSelector: '.main',
            topSpacing: 200,
            bottomSpacing: 800,
            minWidth: 768,
            resizeSensor: true,
        });
    }
    if ($('.td_logo').length > 0) {
        var stickyTD = new StickySidebar('.td_logo', {
            containerSelector: '.mag_grid',
            topSpacing: 93,
            bottomSpacing: 0,
            minWidth: 992,
            resizeSensor: true,
        });
    }
    // 首頁輪播
    var $carousel = $('.mpSlider').slick({
        mobileFirst: true,
        dots: false,
        arrow: true,
        infinite: true,
        speed: 2000,
        autoplaySpeed: 4000,
        autoplay: true,
        fade: true,
        lazyLoaded: true,
        lazyLoad: 'ondemand',
        ease: 'ease',
        pauseOnHover: false,
    });
    /* The first slide will not get the animation,
    therefore I add and remove a class that will trigger the css animation */
    $carousel.find('.slick-current').addClass('start');
    /* I use a set-timeoutfunction to hinder optimization
    of adding and removing classes */
    setTimeout(function () {
        $carousel.find('.start').removeClass('start');
    }, 0);
    // publish_slider
    var $carousel_publish = $('.publish_slider').slick({
        mobileFirst: true,
        dots: false,
        arrow: true,
        infinite: true,
        speed: 2000,
        autoplaySpeed: 4000,
        autoplay: true,
        fade: true,
        lazyLoaded: true,
        lazyLoad: 'ondemand',
        ease: 'ease',
        pauseOnHover: false,
    });
    /* The first slide will not get the animation,
    therefore I add and remove a class that will trigger the css animation */
    $carousel_publish.find('.slick-current').addClass('start');
    /* I use a set-timeoutfunction to hinder optimization
    of adding and removing classes */
    setTimeout(function () {
        $carousel_publish.find('.start').removeClass('start');
    }, 0);

    // 廣告輪播
    $('.cooperationSlider').slick({
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
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: true,
                },
            },
            {
                breakpoint: 545,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: true,
                },
            },
            {
                breakpoint: 200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                },
            },
        ],
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
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 545,
                settings: {
                    arrows: true,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                },
            },
        ],
    });
    $('.cp_slider').slickLightbox({
        caption: 'caption',
        lazyLoad: 'ondemand',
        useHistoryApi: 'true',
        ease: 'ease',
        lazy: true,
    });
    //
    $('.cppic_slider').slick({
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,
        // pauseOnHover: true,
        // pauseOnFocus: true,
        // focusOnSelect: true,
        // accessibility: true,
        // lazyLoad: 'ondemand',
        // ease: 'ease',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 545,
                settings: {
                    arrows: true,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                },
            },
        ],
    });
    // cp_photo
    $('.Slider-for').on('init reInit afterChange', function (event, slick, currentSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $('.controls').html(i + '/' + slick.slideCount);
    });
    $('.Slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        swipe: false,
        swipeToSlide: false,
        lazyLoad: 'ondemand',
        asNavFor: '.Slider-nav',
        infinite: true,
    });
    $('.Slider-nav').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        asNavFor: '.Slider-for',
        dots: true,
        arrows: true,
        lazyLoad: 'ondemand',
        focusOnSelect: true,
        infinite: true,
    });
});
