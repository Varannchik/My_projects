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
                touch: $(window).width() > 600 ? true : false
            });
    });
}());