$(function(){

//    !!!!!!!!!!!!!!!!
    var isTablet = navigator.userAgent.match(/(iPad|iPhone|iPod|Android|BlackBerry|Windows Phone)/);
    if(isTablet){
        var pl = $('.header_search .search .placeholder').width();
        var pl_new = parseInt(pl)-20;
        $('.header_search .search .placeholder').width(pl_new);
    }
//    !!!!!!!!!!!!!!!!!!



    $('.bill_cost').hover(function(){
        $(this).find('.bill_hint_wrapper').stop(true, true).toggle(200);
    });

    $('.block_with_scroll').nanoScroller();


    $(window).scroll(function () {

        /*========= restaurant_promo ездяющяя шапка ============*/
        //console.log($(window).scrollTop());
        if( $(window).scrollTop() >= 150 && $(window).scrollTop() < 410 ) {
            $('.blue_arrow_left').css({'right': 135, 'left': 'auto'});
            //$('.blue_arrow_left, .blue_arrow_right').hide();
            $('.promo_restaurant_main_block_top').show();
            $('.promo_restaurant_main_block_top').css({'position': 'absolute','top': ($(window).scrollTop()-161)});
        }
        else if( $(window).scrollTop() >= 410 ){
            $('.promo_restaurant_main_block_top').css({'position': 'absolute','top': '260px'});
        }
        else if($(window).scrollTop() < 150){
            //$('.blue_arrow_left, .blue_arrow_right').show();
            $('.blue_arrow_left').css({'right': 'auto', 'left': 26});
            $('.promo_restaurant_main_block_top').css({'position': 'absolute','top': '0'});
        }
        /*========= End restaurant_promo ездяющяя шапка ============*/

    });


   $(window).load(function(){

//        if($('#main_interesting_caption').height()<25){
//            $('#main_interesting_caption').css('line-height', '52px');
//        }
//        else{
//            $('#main_interesting_caption').css('line-height', 'normal');
//        }


//        $('.change_caption').bind("DOMSubtreeModified",function(){
//            var timer = setInterval(function() {
//                if($('#main_interesting_caption').height()<25){
//                    $('#main_interesting_caption').css('line-height', '52px');
//                }
//                else{
//                    $('#main_interesting_caption').css('line-height', 'normal');
//                }
//            }, 10);
//        });



        $(window).resize(function(){

            var slider_img_height = $('.rest_promo_main_slider li > img').height();
            var slider_img_margin = -((slider_img_height-605)/2);
            $('.rest_promo_main_slider li > img').css('margin-top', slider_img_margin);


            var video_container_nav_height = $('.video_container').find('img').height();
            $('.video_container_nav').height(video_container_nav_height);
        });


        /* <!--==== restaurant_promo слайдеры ====--> */

        $(".forPromo").carouFredSel({
            responsive: true,
            auto:false,
            width: '100%',
            scroll: {
                items:1,
                onBefore:function(){$('.image_slider_item .text').animate({bottom:'-500px'},500)},
                onAfter:function(){$('.image_slider_item .text').animate({bottom:'0px'},500)}
            },
            prev: '#review_restaurant-prev',
            next: '#review_restaurant-next',
            items: {
                height: 636,
                visible: {
                    min: 1,
                    max: 1
                }
            }
        });


        var restaurant_promo_news_slider=Math.floor($(".restaurant_promo_events_slider").width()/310);
        $(".restaurant_promo_events_slider").carouFredSel({
            responsive: true,
            auto:false,
            width: '100%',
            scroll: {
                items:1,
                onBefore:function(){
                    $('.restoran_promo_slider_active').html('').hide()
                }
            },
            next: '#ev-next',
            prev: '#ev-prev',
            items: {
                width: 380,
                visible: {
                    min: 2,
                    max: 3
                }
            }
        });

        var restaurant_promo_events_slider=Math.floor($(".restaurant_promo_news_slider").width()/310);
        $(".restaurant_promo_news_slider").carouFredSel({
            responsive: true,
            auto:false,
            width: '100%',
            scroll: {
                items:1,
                onBefore:function(){
                    $('.restoran_promo_slider_active').html('').hide()
                }
            },
            next: '#next',
            prev: '#prev',
            items: {
                width: 380,
                height: 307,
                visible: {
                    min: 2,
                    max: 4
                }
            }
        });


        var restaurant_promo_comment_slider=Math.floor($(".restaurant_promo_comment_slider").width()/310);
        $(".restaurant_promo_comment_slider").carouFredSel({
            responsive: true,
            auto:false,
            width: '100%',
            scroll: 1,
            next: '#comment-next',
            prev: '#comment-prev',
            items: {
                width: 380,
                height: 177,
                visible: {
                    min: 2,
                    max: 3
                }
            }
        });


        var restaurant_promo_slider=Math.floor($(".restaurant_promo_slider").width()/310);
        $(".restaurant_promo_slider").carouFredSel({
            responsive: true,
            auto:false,
            width: '100%',
            scroll: 1,
            next: '#comment-next',
            prev: '#comment-prev',
            items: {
                width: 407,
                height: 177,
                visible: {
                    min: 2,
                    max: 3
                }
            }
        });

        var rest_promo_main_slider=Math.floor($(".rest_promo_main_slider").width());
        $(".rest_promo_main_slider").carouFredSel({
            responsive: true,
            auto:false,
            width: '100%',
            scroll: {
                items: 1,
                fx:'uncover',
                duration: 800
            },


            next: '.blue_arrow_right',
            prev: '.blue_arrow_left',
            items: {
                height: 605,
                visible: {
                    min: 1,
                    max: 1
                }
            }
        });

        var img_height = $('.rest_promo_main_slider li > img').height();
        //var slider_img_margin = -((slider_img_height-605)/2);

        //alert(img_height);
        $('.rest_promo_main_slider li > img').css('margin-top', -((img_height-605)/2));


        $(".rest_promo_main_slider_block").css({'height':'auto','overflow':'visible'});

    });


    /* <!--==== End restaurant_promo слайдеры ====--> */


    $('.like_ind').on('click', function(){
        $(this).closest('.btn_wrap').find('.btn_new').removeClass('white');
        $(this).closest('.btn_wrap').find('.like_ind').addClass('green');
        $(this).closest('.btn_wrap').find('.dis_ind').addClass('red');
        $(this).closest('.btn_wrap').find('.like_gray_btn, .dislike_gray_btn').hide();
        $(this).closest('.btn_wrap').find('.like_white_btn, .dislike_white_btn').show();
    });

    $('.dis_ind').on('click', function(){
        $(this).closest('.btn_wrap').find('.like_ind').removeClass('green');
        $(this).closest('.btn_wrap').find('.dis_ind').removeClass('red');
        $(this).closest('.btn_wrap').find('.btn_new').addClass('white');
        $(this).closest('.btn_wrap').find('.like_white_btn, .dislike_white_btn').hide();
        $(this).closest('.btn_wrap').find('.like_gray_btn, .dislike_gray_btn').show();
    });

    var video = $('.video_container > textarea').val();

    $('.video_icon').on('click',function(){
        var height = $('.video_container_nav').height();
        var width = $('.video_container_nav').width();

        $('.video_container > .video_container_nav, .video_container > img, .video_container > textarea').remove();
        $('.video_container').append(video);
        $('#video1').height(height);
        $('#video1').width(width);
        $('#video_embed1').height(height);
        $('#video_embed1').width(width);
    });



    /* <!--==== Меню ====--> */
    $('.top_toggle_el').on('click', function(){
        $(this).toggleClass('active');
        $(this).find('.toggle_menu_nav').toggleClass('active', 200);
        $(this).closest('.top_toggle_el_wrapper').find('.sub_toggle_el').toggle(200);
        $(this).closest('.top_toggle_el_wrapper').find('.sub_toggle_el').last().addClass('last');

        var sub_toggle_el = $('.sub_toggle_el');
        if(sub_toggle_el.hasClass('active')){
            sub_toggle_el.removeClass('active');
            sub_toggle_el.removeClass('last');
            $('.sub_toggle_menu_nav').removeClass('active');
            $('.sub_toggle_more').hide();
        }
    });
    $('.clickable').on('click', function(){
        var index = $('.clickable').index(this);
        //alert(index);
        $('.sub_toggle_el').eq(index-1).toggleClass('last');
        $(this).closest('.sub_toggle_el').toggleClass('active', 200);
        $(this).find('.sub_toggle_menu_nav').toggleClass('active', 200);
        $(this).closest('.sub_toggle_el').find('.sub_toggle_more').toggle(200);
        $(this).closest('.sub_toggle_el').find('.lite_blue_line').last().addClass('last');
        //$('.lite_blue_line').last().addClass('last');
    });
    /* <!--==== End Меню ====--> */



    /*===== restaurant_promo map  ====*/
    $('.place_in_map').on('click', function(){
        $('.map_wrapper').height(300);
        $('.place_in_map, #YMapsID').hide();
        $('.map_screen_btn_up, #YMapsID_big').show();
    });

    $('#rest_promo').on('click', function(){
        $('.map_wrapper').height(59);
        $('.place_in_map, #YMapsID').show();
        $('.map_screen_btn_up, #YMapsID_big').hide();
    });
    /*===== End restaurant_promo map  ====*/


    /*===== ADD  REVIEW pop up  ====*/
    $('.add_review').on('click', function(){
        popup_open('.add_review_popup');
        return false;
    });
    $('.big_close_popup_btn').on('click', function(){
        popup_close();
    });
    /*===== ADD  REVIEW pop up  ====*/



    /*===== table_booking pop up  ====*/

    $('.booking_btn').on('click', function(){
        $('.step2_block').hide();
        $('.step3_block').hide();
        $('.step2').removeClass('active');
        $('.step3').removeClass('active');
        $('.step1_block').show();
        $('.step1').addClass('active');
        popup_open('.table_booking');
        return false;
    });
    $('.header_btn').on('click', function(){
       popup_open('.table_booking');
    });
    $('.close_popup_btn').on('click', function(){
       popup_close();
    });

    $('.background_window').on('click', function(){
        popup_close();
    });

        /* tab nav */
    $('#to_step2').on('click', function(){
        $('.step1_block').hide();
        $('.step2_block').show();
        $('.step1').removeClass('active');
        $('.step2').addClass('active');
        return false;
    });

    $('#to_step3').on('click', function(){
        $('.step2_block').hide();
        $('.step3_block').show();
        $('.step2').removeClass('active');
        $('.step3').addClass('active');
        return false;
    });


    $('#back_to_step1').on('click', function(){
        $('.step2_block').hide();
        $('.step1_block').show();
        $('.step2').removeClass('active');
        $('.step1').addClass('active');
        return false;
    });

    $('.popup_booking_finish_btn').on('click',function(){
        popup_open('.finish_table_booking');
    });

    $('.finish_table_booking_btn').on('click',function(){
        popup_close();
    });
        /* End tab nav */

    /*===== End table_booking pop up  ====*/

    $('.datepicker_block_calendar').on('click', function(){
        $(this).closest('.datepicker_block').find('input').focus();
    });

    /*=============== Input with "+" and "-" =================*/
    $('.input_val_plus').on('click', function(){
        var curr_val = $(this).closest('.input_with_plus_minus').find('input').val();
        if($.isNumeric(curr_val)){
            var new_val = Math.floor(curr_val)+1;
            $(this).closest('.input_with_plus_minus').find('input').val(new_val);
        }
    });

    $('.input_val_minus').on('click', function(){
        var curr_val = $(this).closest('.input_with_plus_minus').find('input').val();
        if($.isNumeric(curr_val)){
            var new_val = Math.floor(curr_val)-1;
            if(new_val>=0)  $(this).closest('.input_with_plus_minus').find('input').val(new_val);
        }
    });
    /*===============  End Input with "+" and "-" =================*/


    /*===============  TIME Input =================*/
    $('.time_inputs').focus(function(){
        //console.log('focus');
        $(this).closest('.time').css('border', '1px solid #348efd');
    });

    $('.time_inputs').focusout(function(){
        //console.log('focus_out');
        $(this).closest('.time').css('border', '1px solid #dbdbdb');
    });
    /*===============  End TIME Input =================*/


    $('.review_type_btn').on('click', function(){
       $('.review_type_btn').not($(this)).removeClass('active');
       $(this).addClass('active');
    });


    $('.add_photo').on('click', function(){
        $('.hide_input_type_file').click();
    });


    /* calendar */
    /* Russian (UTF-8) initialisation for the jQuery UI date picker plugin. */
    /* Written by Andrew Stromnov (stromnov@gmail.com). */
    jQuery(function($){
        $.datepicker.regional['ru'] = {
            closeText: 'Закрыть',
            prevText: '&#x3c;Пред',
            nextText: 'След&#x3e;',
            currentText: 'Сегодня',
            monthNames: ['Января','Февраля','Марта','Апреля','Майя','Июня',
                'Июля','Августа','Сентября','Октября','Ноября','Декабря'],
            monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн',
                'Июл','Авг','Сен','Окт','Ноя','Дек'],
            dayNames: ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'],
            dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
            dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
            weekHeader: 'Не',
            dateFormat: 'dd.mm.yy',
            firstDay: 1,
            isRTL: false,
            showMonthAfterYear: false,
            yearSuffix: ''};
        $.datepicker.setDefaults($.datepicker.regional['ru']);
    });

    /*=== Залы на слайдере ===*/
   var hall_number = $('.hall_number');
   hall_number.hover(function(){
       $('.hall_number').not($(this)).closest('.hall_number_wrapper').find('.hall_number_hint.hidden').hide(0);
       $(this).closest('.hall_number_wrapper').find('.hall_number_hint.hidden').stop(true, true).toggle(200);
   });

    hall_number.on('click', function(){
        hall_number.not($(this)).removeClass('active');
        $(this).addClass('active');
        var hallNum = hall_number.index(this);
        console.log(hallNum);

        var rest_promo_main_slider = $(".rest_promo_main_slider");
        rest_promo_main_slider.trigger("finish");
        rest_promo_main_slider.trigger("slideTo", hallNum);
    });
    /*=== End Залы на слайдере ===*/


//    $('.my_alcohole').on('click', function(){
//        $(this).toggleClass('active');
//    });

});





