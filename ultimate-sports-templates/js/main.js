(function($) {
    $(function() {
        if($('input[type="radio"]').size()>0) $('input[type="radio"]').uniform();

        $('select').selectbox();

        $('.tabs_content ul.tabs li').click(function(){
            var attr=$(this).attr('data-href');
            $('.tabs_content ul.tabs li').removeClass('active');
            $(this).addClass('active');
            $('div.tabs_content').find('div.box').hide();
            $('div.tabs_content').find('div.box.'+attr).fadeIn();
        });

        $('.results_block').live('click',function(){
            if($(this).hasClass('active_results')){
                $(this).find('.close').hide();
                $(this).find('.open').show();
                $(this).find('.content_results').slideUp();
                $(this).removeClass('active_results');
            }
            else{
                $(this).find('.close').show();
                $(this).find('.open').hide();
                $(this).find('.content_results').slideDown();
                $(this).addClass('active_results');

            }
        });

        $('.add_mobile_menu').click(function() {
            if ($(this).hasClass('active')) {
                hideMobileNav();
            } else {
                activateMobileNav();
            }
        });


        $('.nav_mobile ul li').click(function(){
            $(this).find('.small_menu').slideDown();
        });

        var activateMobileNav = function() {
            $('header').find('.add_mobile_menu').addClass('active');
            $('header').find('.nav_mobile').addClass('active');
            $('header').find('.header_body').css('background', '#ac2020');
            $('header').find('.header_body').find('.logo').hide();
        }

        var hideMobileNav = function() {
            $('header').find('.add_mobile_menu').removeClass('active');
            $('header').find('.nav_mobile').removeClass('active');

            $('header').find('.header_body').css('background', 'none');
            $('header').find('.logo').show();
        }

        $(window).resize(function() {
            if ($(window).width() > 600) {
                hideMobileNav();
            }
        });

        var handler = $('#tiles li');
        if (handler.length) {
            handler.wookmark({
                // Prepare layout options.
                autoResize: true, // This will auto-update the layout when the browser window is resized.
                container: $('#main'), // Optional, used for some extra CSS styling
                offset: 20, // Optional, the distance between grid items
                //           outerOffset: 10, // Optional, the distance to the containers border
                itemWidth: 235 // Optional, the width of a grid item
            });
        }

        var width=$('body').width();
        if(width>=1000){
            var
                speed = 500,
                $scrollTop = $("<a/>")
                    .addClass('scrollTop')
                    .attr({href:'#', style:'display:none; z-index:9999; position:fixed;'})
                    .appendTo('body');

            $scrollTop.click(function(e){
                e.preventDefault();

                $( 'html:not(:animated),body:not(:animated)' ).animate({ scrollTop: 0}, speed );
            });
            //появление
            function show_scrollTop(){
                ( $(window).scrollTop() > 300 ) ? $scrollTop.fadeIn(600) : $scrollTop.fadeOut(600);
            }
            $(window).scroll( function(){ show_scrollTop(); } );
            show_scrollTop();
        }


    });
})(jQuery);