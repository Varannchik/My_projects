(function() {
    // tiny helper function to add breakpoints
    var flexslider;

    $(document).ready(function() {
        // The slider being synced must be initialized first
        $('#carousel')
            .flexslider({
                animation: "slide",
                controlNav: false,
                animationLoop: true,
                slideshow: false,
                itemWidth: 230,
                move:1,
                itemMargin: 10,
                minItems: 4,
                maxItems: 4,
                asNavFor: '#slider',
                touch: $(window).width() > 600 ? true : false,
                start: function(slider) {
                    flexslider = slider;
                }
            });

        $('#slider').flexslider({
            animation: "slide",
            controlNav: false,
            animationLoop: true,
            slideshow: true,
            start: function(slider) {
                $('.progress_bar').animate({'width': "100%"}, 7000, function(){
                    $(this).css({'width' : 0})
                });
            },
            before: function(slider) {
                slider.stop();
                slider.play();

                $('.progress_bar').stop(true, true);
                $('.progress_bar').css({'width' : 0});
                $('.progress_bar').animate({'width': "100%"}, 7000, function(){
                    $(this).css({'width' : 0})
                });
            }
        });
    });
}());