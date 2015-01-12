/**
 * Created by Анна on 22.09.14.
 */

    $(window).load(function() {
        $('.tabs_content ul.tabs li').click(function(){
            var attr=$(this).attr('data-href');
            $('.tabs_content ul.tabs li').removeClass('active');
            $(this).addClass('active');
            $('div.tabs_content').find('div.box').hide();
            $('div.tabs_content').find('div.box.'+attr).show();
        });
        $('.left_banner ul.tabs li').click(function(){
            var attr=$(this).attr('data-href');
            $('.left_banner ul.tabs li').removeClass('active');
            $(this).addClass('active');
            $('div.left_banner').find('div.box').hide();
            $('div.left_banner').find('div.box.'+attr).show();
        });

    });
