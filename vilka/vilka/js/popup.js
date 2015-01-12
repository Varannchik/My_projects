function popup_open(name)
{
    $('.background_window').hide();
    $('.modal').hide();

    $('.background_window').show();

    var height=$(name).height();

    var width=$(name).width();


    var top=$(window).scrollTop()+$("body").height()/2-height/2-10;

    var left=$("body").width()/2-width/2;

    if(top<$(window).scrollTop()+10){top=$(window).scrollTop()+10}

    $(name).css({"left":left,"top":top});

    $(name).fadeIn('200');
}

function popup_close()
{

    $('.background_window').fadeOut('100');
    $('.modal').fadeOut('100');

}