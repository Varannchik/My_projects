$(window).load(function(){
    /*--------------news select-------------*/
    $('.news_select i').live('click',function(){
        $(this).closest('.news_select').toggleClass('active');
        $(this).closest('.news_select').find('.news_select_block').slideToggle(200);
    })
    $('.news_select_year').live('click',function(){
        if($(this).closest('li').hasClass('active'))
        {
            $('.news_select_block ul ul').slideUp(200);
            $('.news_select_block > ul > li').removeClass('active');
        }
        else
        {
            $('.news_select_block ul ul').slideUp(200);
            $(this).siblings('ul').slideDown(200);
            $('.news_select_block > ul > li').removeClass('active');
            $(this).closest('li').addClass('active');
        }

    })
    $('.news_select_block a').live('click',function(){
        var year=$(this).closest('ul').siblings('.news_select_year').text()+'/';
        var month=$(this).text();
        $(this).closest('.news_select').find('.year').text(year);
        $(this).closest('.news_select').find('.month').text(month);
        $(this).closest('.news_select').find('.news_select_block').slideUp(200,function(){
            $('.news_select_block > ul > li').removeClass('active');
            $('.news_select_block ul ul').hide();
            $(this).closest('.news_select').removeClass('active');
        });
        return false;
    })

    resize_image_block('.news_block_slider',430,270);
    resize_image_block('.news_block_video',430,270);

    $(".news_block_slider").each(function(){
        if($(this).find("li").size()>1){
            $(this).find("li").width($(".news_block_slider").width());
            $(this).touchCarousel({
                itemsPerMove: 1,
                pagingNav: true,
                scrollbar: false,
                scrollToLast: true,
                loopItems: false
            });
        }
    })

})

$(window).resize(function(){
    resize_image_block('.news_block_slider',430,270);
    resize_image_block('.news_block_video',430,270);
})


