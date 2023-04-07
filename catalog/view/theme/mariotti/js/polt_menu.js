$(document).ready(function () {
    var wind_pos;
    $(window).on('load', function () {
        wind_pos = $(window).scrollTop();
    })
    if ($('.polt_off').length) {
        $('.polt_off').offcanvas({
            modifiers: 'left,overlay',
            triggerButton: false
        })
            .on('opening.offcanvas', function (e) {
                $('.slicknav_nav li.current-menu-parent.slicknav_collapsed > a > .slicknav_arrow').trigger('click');
            })
            .on('open.offcanvas', function (e) {
                $('body').addClass('overflow_none');
                wind_pos = $(window).scrollTop();
            })
            .on('close.offcanvas', function (e) {
                $('body').removeClass('overflow_none');
                $(window).scrollTop(wind_pos);
            })
            .on('closing.offcanvas', function (e) {
                $('.slicknav_nav li.current-menu-parent.slicknav_collapsed > a > .slicknav_arrow').trigger('click');
            });
        $(document).on('click', '.mob_menu_trigger', function (e) {
            e.preventDefault();
            $('.menu_sec_fixed a').trigger('click');
        })
    }
    $(document).on('open.offcanvas', function (e) {
        var dataOffcanvas = $(e.target).data('offcanvas-component');
        $(e.target).swipe({
            swipeLeft: function () {
                dataOffcanvas.close();
            }
        });
    });
    $(document).on('click', '.polt_off_btn', function (e) {
        e.preventDefault();
        var dataOffcanvas = $($(this).attr('href')).data('offcanvas-component');
        dataOffcanvas.open();
    })
    $('.nav_menu').clone().addClass('mob_nav_menu').appendTo('.mob_nav_menu_w');
    $('.menu__left-top').clone().addClass('mob_cat_menu none').appendTo('body').hide();
    var parent_cnt = parseInt($('.mob_cat_menu .double_list:first-child .sub_cat_in_menu > ul').parents('div').length);
    $('.mob_cat_menu .sub_cat_in_menu > ul').addClass('sub_cat_in_menu_ul')
    $('.mob_cat_menu li').removeClass('menu__left-item');
    $('.mob_cat_menu .img_internal_menu, .mob_cat_menu .opacity_bg').remove();
    for (var i = 0; i <= parent_cnt; i++) {
        $('.mob_cat_menu a').each(function () {
            if ( $(this).parent().is( 'div' ) ) {
                $(this).unwrap();
            }
        })
        $('.sub_cat_in_menu_ul').each(function () {
            if ( $(this).parent().is( 'div' ) ) {
                $(this).unwrap();
            }
        })
    }
    $('.mob_cat_menu ul, .mob_cat_menu li').removeClass('sf-with-ul, sf-menu');
    $('.mob_cat_menu').slicknav({
        label: "Меню",
        prependTo: ".slick_off",
        allowParentLinks: true,
        'closedSymbol': '',
        'openedSymbol': '',
        init: function () {
            $('.mob_cat_menu').slicknav('open');
            $('.mob_cat_menu').hide();
            setTimeout(function () {
                $('.mob_cat_menu').remove();
            })
        }
    });
    $('.menu__left-top').slicknav('open');
    $('.slick_off .slicknav_btn').remove();
    $('.menu__top').clone().removeClass('menu__top').appendTo('.menu__top_off')
    $('.menu__top_off li, .menu__top_off a').removeClass('menu__top-item menu__top-link')

    $('.menu__left-bot').clone().removeClass('menu__left-bot').appendTo('.menu__left-bot_off')
    // $('.menu__left-bot_off li, .menu__top_off a').removeClass('menu__top-item menu__top-link')
});






// $(document).ready(function () {
//     var wind_pos;
//     $(window).on('load', function () {
//         wind_pos = $(window).scrollTop();
//     })
//     if ($('.polt_off').length) {
//         $('.polt_off').offcanvas({
//             modifiers: 'left,overlay',
//             triggerButton: false
//         })
//             .on('open.offcanvas', function (e) {
//                 $('body').addClass('overflow_none');
//                 wind_pos = $(window).scrollTop();
//             })
//             .on('close.offcanvas', function (e) {
//                 $('body').removeClass('overflow_none');
//                 $(window).scrollTop(wind_pos);
//             });
//         $(document).on('click', '.mob_menu_trigger', function (e) {
//             e.preventDefault();
//             $('.menu_sec_fixed a').trigger('click');
//         })
//     }
//     $(document).on('open.offcanvas', function (e) {
//         var dataOffcanvas = $(e.target).data('offcanvas-component');
//         $(e.target).swipe({
//             swipeLeft: function () {
//                 dataOffcanvas.close();
//             }
//         });
//     });

//     $('.nav_menu').clone().addClass('mob_nav_menu').appendTo('.mob_nav_menu_w');
//     $('.menu__left-top').clone().addClass('mob_cat_menu none').appendTo('body').hide();
//     var parent_cnt = parseInt($('.mob_cat_menu .double_list:first-child .sub_cat_in_menu > ul').parents('div').length);
//     $('.mob_cat_menu .sub_cat_in_menu > ul').addClass('sub_cat_in_menu_ul')
//     $('.mob_cat_menu li').removeAttr('class');
//     $('.mob_cat_menu .img_internal_menu, .mob_cat_menu .opacity_bg').remove();
//     for (var i = 0; i <= parent_cnt; i++) {
//         $('.mob_cat_menu a').each(function () {
//             if ( $(this).parent().is( 'div' ) ) {
//                 $(this).unwrap();
//             }
//         })
//         $('.sub_cat_in_menu_ul').each(function () {
//             if ( $(this).parent().is( 'div' ) ) {
//                 $(this).unwrap();
//             }
//         })
//     }
//     $('.mob_cat_menu ul, .mob_cat_menu li').removeClass('sf-with-ul, sf-menu');
//     $('.mob_cat_menu').slicknav({
//         label: "Меню",
//         prependTo: ".slick_off",
//         allowParentLinks: true,
//         'closedSymbol': '',
//         'openedSymbol': '',
//         init: function () {
//             $('.mob_cat_menu').slicknav('open');
//             $('.mob_cat_menu').hide();
//             setTimeout(function () {
//                 $('.mob_cat_menu').remove();
//             })
//         }
//     });
//     $('.menu__left-top').slicknav('open');
//     $('.slick_off .slicknav_btn').remove();
// });