/**
 * Created with JetBrains PhpStorm.
 * User: 1
 * Date: 02.12.13
 * Time: 10:32
 * To change this template use File | Settings | File Templates.
 */
$(window).load(function() {

    /*Main page*/
    $('#enter').on('click',function(){
        $('.background_window').fadeIn();
        $('.popap_regestration').show();
        return false;
    });

    $('.close').on('click',function(){
        $('.popap_regestration').hide();
        $('.background_window').hide();
        return false
    });

    $('.popap_regestration .title span').on('click',function(){
        $('.popap_regestration .title span').removeClass('active_popup');
        $(this).addClass('active_popup');
    });

    $('.enter_window').on('click', function(){
        $('.enter_window_content').show();
        $('.regestration_window_content').hide();
    });
    $('.regestration_window').on('click', function(){
        $('.enter_window_content').hide();
        $('.regestration_window_content').show();
    });

    $('#rem_pass').on('click',function(){
       $('.remember_password').show();
    });

    /*How it works*/
    $('.tab1').on('click',function(){
        $('.tab').removeClass('tab_active');
        $(this).addClass('tab_active');
        $('.content_tab2').hide();
        $('.content_tab1').fadeIn();
    });
    $('.tab2').on('click',function(){
        $('.tab').removeClass('tab_active');
        $(this).addClass('tab_active');
        $('.content_tab1').hide();
        $('.content_tab2').fadeIn();
    });



    /*Settings*/

        $('#change_password').bind('click',function(){
            popup_open('.popap_change_password');
            return false;
        });

        $('.close,.background_window').bind('click',function(){
            $('.popap_change_password').hide(100);
            $('.background_window').hide(100);
            return false;
        });

        $('#change_telephone').bind('click',function(){
            popup_open('.popap_change_telephone');
            return false;
        });

        $('.close,.background_window').bind('click',function(){
            $('.popap_change_telephone').hide(100);
            $('.background_window').hide(100);
            return false;
        });

        $('#change_sait').bind('click',function(){
            popup_open('.popap_change_sait');
            return false;
        });

        $('.close,.background_window').bind('click',function(){
            $('.popap_change_sait').hide(100);
            $('.background_window').hide(100);
            return false;
        });

        $('#change_name_company').bind('click',function(){
            popup_open('.popap_change_name_company');
            return false;
        });

        $('.close,.background_window').bind('click',function(){
            $('.popap_change_name_company').hide(100);
            $('.background_window').hide(100);
            return false;
        });

        $('#regestration_btn').bind('click',function(){
            popup_open('.popup_ok');
            $('.popap_regestration').hide();
            return false;
        });

        $('.close,.background_window').bind('click',function(){
            $('.popup_ok').hide(100);
            $('.background_window').hide(100);
            return false;
        });

        $('.delete_scrin').bind('click',function(){
            popup_open('.delete_scrin_popup');
            return false;
        });

        $('.close,.background_window, .yes, .no').bind('click',function(){
            $('.delete_scrin_popup').hide(100);
            $('.background_window').hide(100);
            return false;
        });
        $('.open_popup_size').on('click',function(){
            $(this).closest('article').find('.popup_size').animate({left:'320px'});
            $(this).closest('article').find('.popup_size').addClass('active');
            return false;

        });

        $('.close,.close_popup').on('click',function(){
            $(this).closest('article').find('.popup_size').animate({left:'100%'});
            $(this).closest('article').find('.popup_size').removeClass('active');
            return false;
        });


    $('.down').live('click',function(){
        $(this).closest('.block_news').find('.hide_text').slideDown();
        $(this).css('display','none');
        $(this).closest('.block_news').find('.up').css('display','block');
    });

    $('.up').live('click',function(){
        $(this).closest('.block_news').find('.hide_text').slideUp();

        $(this).css('display','none');
        $(this).closest('.block_news').find('.down').css('display','block');
    });

    /*News*/
    $('#arhiv').on('click',function(){

        $('.background_window').fadeIn();
        $('.popap_arhiv').show();
        return false;
    });

    $('.close,.background_window').on('click',function(){
        $('.popap_arhiv').hide(100);
        $('.background_window').hide(100);
        return false;
    });

});

var jcrop_check=0;
var flag_filter=0;
var activ_w;
$(window).load(function() {


    $('.jcrop_example').on('focusin',function(){
        $(this).find('.select_areal').hide();
        activ_w= $(this).prev('.popup_size');
    });

    $('.platform_1, .prev_platform').bind('click',function(){
        $('.platform').removeClass('active_title');
        $('.platform_1').addClass('active_title');
        $('.content_platform_2').hide();
        $('.content_platform_1').fadeIn();
    });
    $('.platform_2, .next_platform').bind('click',function(){
        $('.platform').removeClass('active_title');
        $('.platform_2').addClass('active_title');
        $('.content_platform_1').hide();
        $('.content_platform_2').fadeIn();




            // Для примера 1
            $('#cropbox1,#cropbox2').Jcrop({ // Привязываем плагин JСrop к изображению с id=cropbox1
                aspectRatio: 0,
                onChange: function(){
                    updateCoords;

                    if(activ_w.hasClass('active')){
                        if(jcrop_check==0){
                            activ_w.hide();
                        }
                    }
                    jcrop_check=1;
                },
                onSelect: function(){updateCoords;jcrop_check=0;
                    if(activ_w.hasClass('active')){

                        activ_w.show();
                    }
                }

            });

            // Для примера 2
            var api = $.Jcrop('#cropbox222',{ // Привязываем плагин JСrop к изображению с id=cropbox2
                setSelect: [ 0, 0, 0, 200 ]
            });
            var i, ac;

            // Обработчик, который прерывает действие
            function nothing(e) {
                e.stopPropagation();
                e.preventDefault();
                return false;
            };

            // Обработчик события для запуска анимации
            function anim_handler(ac) {
                return function(e) {
                    api.animateTo(ac);
                    return nothing(e);
                };

            };

            // Устанавливаем координаты областей для анимации
            var ac = {
                anim1: [0,0,40,600],
                anim2: [115,100,210,215],
                anim3: [80,10,760,585],
                anim4: [105,215,665,575],
                anim5: [495,150,570,235]
            };

            // Привязываем соответствующий обработчик события
            for(i in ac) jQuery('#'+i).click(anim_handler(ac[i]));

            // Для примера 3
            $('#cropbox3').Jcrop({ // Привязываем плагин JСrop к изображению с id=cropbox3
                setSelect: [ 20, 130, 480, 230 ],
                addClass: 'jcrop_custom',
                bgColor: 'blue',
                bgOpacity: .5,
                sideHandles: false,
                minSize: [ 50, 50 ]
            });



    });
});

function updateCoords(c) {
    $('.x').val(c.x);
    $('.y').val(c.y);
    $('.w').val(c.w);
    $('.h').val(c.h);

    $('.x2').val(c.x2);
    $('.y2').val(c.y2);


    var rx = 200 / c.w; // 200 - размер окна предварительного просмотра
    var ry = 200 / c.h;

    $('#preview').css({
        width: Math.round(rx * 800) + 'px',
        height: Math.round(ry * 600) + 'px',
        marginLeft: '-' + Math.round(rx * c.x) + 'px',
        marginTop: '-' + Math.round(ry * c.y) + 'px'
    });
};



function checkCoords() {
    if (parseInt($('#w').val())) return true;
    alert('Пожалуйста, выберите область для обрезки.');
    return false;
};

function popup_open(name)
{
    $('.background_window').hide();
    $('.popap_change_password').hide();
    $('.background_window').show();
    var height=$(name).height();
    var width=$(name).width();
    var top=$(window).scrollTop()+$("body").height()/2-height/2-10;
    var left=$("body").width()/2-width/2;
    if(top<$(window).scrollTop()+10){top=$(window).scrollTop()+10}
    $(name).css({"left":left,"top":top});
    $(".background_window").show();
    $(name).fadeIn('200');
}


