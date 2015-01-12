var toggleHandler = function(toggle) {
    var toggle = toggle;
    var radio = $(toggle).find("input");

    var checkToggleState = function() {
        if (radio.eq(0).is(":checked")) {
            $(toggle).removeClass("toggle-off");
        } else {
            $(toggle).addClass("toggle-off");
        }
    };

    checkToggleState();

    radio.eq(0).live('click',function() {
        $(toggle).toggleClass("toggle-off");
    });

    radio.eq(1).live('click',function() {
        $(toggle).toggleClass("toggle-off");
    });
};

$(document).ready(function() {
    $(".toggle").each(function(index, toggle) {
       // toggleHandler(toggle);
    });

    $(".toggle label").live('click',function(){
        var par=$(this).closest('.toggle');
        var radio =par.find("input");

        if (radio.eq(0).is(":checked")) {
            console.log('1');
            par.removeClass("toggle-off");
        } else {
            console.log('2');
            par.addClass("toggle-off");
        }
    })
});
