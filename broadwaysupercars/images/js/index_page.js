$(window).load(function(){
    $("#slides").slides({
        responsive: true,
        navigateStart: function( current ){
            $('.main_slider_text').fadeOut();
        },
        navigateEnd: function( current ){
            var html=$('#slide_'+current+' .slider_text').html();
            $('.main_slider_text').html(html);
            $('.main_slider_text').fadeIn();
        }
    });
    $('.main_slider').css({'visibility':'visible','height':'auto'});
    $('.main_slider_text').fadeIn();
    $('#slides').height($("#slides img").height());
    var margin_top=-($("#slides img").height()*0.6)+'px';
    $('.main_content').css({'margin-top':margin_top});

    $('.main_slider_left').live('click',function(){
        $('.slidesPrevious').click();
    })
    $('.main_slider_right').live('click',function(){
        $('.slidesNext').click();
    })

    if($('body').width()<960)
    {
        $(".main_logo_slider").touchCarousel({
            itemsPerMove: 1,
            pagingNav: true,
            scrollbar: false,
            scrollToLast: true,
            loopItems: false
        });
    }

    $(".main_testimonials_slider li").width($(".main_testimonials_slider").width());
    if($(".main_testimonials_slider li").size()>1){
        $(".main_testimonials_slider").touchCarousel({
            itemsPerMove: 1,
            pagingNav: true,
            scrollbar: false,
            scrollToLast: true,
            loopItems: false
        });
    }

    var size_specials_slider=Math.floor($(".specials_slider").width()/300);
    size_specials_slider=(size_specials_slider<1) ? 1 : size_specials_slider;
    $(".specials_slider li").width(Math.floor($(".specials_slider").width()/size_specials_slider));
    if($(".specials_slider li").size()>3){
        $(".specials_slider").touchCarousel({
            itemsPerMove: 1,
            pagingNav: true,
            scrollbar: false,
            colums:size_specials_slider
        });
    }


})


