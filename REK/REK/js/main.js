$(function(){

    $('.wrapper').bind('click',function(){
        $('.sb-search').removeClass('sb-search-open')
    })
    $('.sb-search').live('click',function(){
        $('.sb-search').addClass('sb-search-open')
    })


		/*---- mein_menu for small window ----*/
	if($('body').width()<500)
	{
		$('.menu').live('click',function(){

			if($(this).height()<10)
			{
				var size=$(this).find('li').size()-1;
				var height_item=$(this).find('li').height();
				var height=size*height_item;
				$(this).animate({height:height},200);
				$(this).addClass('active');
			}
			else
			{
				$(this).animate({height:'0'},200);
				$(this).removeClass('active');
			}

            return false;
		})
	}
})

$(window).resize(function(){
    /*---- mein_menu for small window ----*/
    if($('body').width()<500)
    {
        $('.menu').css('height','0px');
        $('.menu').live('click',function(){

            if($(this).height()<10)
            {
                var size=$(this).find('li').size()-1;
                var height_item=$(this).find('li').height();
                var height=size*height_item;
                $(this).animate({height:height},200);
                $(this).addClass('active');
            }
            else
            {
                $(this).animate({height:'0'},200);
                $(this).removeClass('active');
            }

            return false;
        })
    }
    else
    {
        $('.menu').die();
        $('.menu').css('height','auto')
    }

})



