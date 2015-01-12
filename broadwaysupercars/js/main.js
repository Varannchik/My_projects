$(function(){
    $('.modal_close,.background_window').click(function(){
        popup_close()
    })

    var count=$('.auto_logo_slider li').size();
    var width=Math.ceil($('.auto_logo_slider').width()/64);
    if(width<count)
    {
        $('.auto_logo_slider').jcarousel({
            scroll: 5
        });
    }

    if($('input[type="checkbox"]').size()>0) $('input[type="checkbox"]').uniform();
    //if($('input[type="radio"]').size()>0) $('input[type="radio"]').uniform();

    if($('select').size()>0){
		$('select').each(function(){		
			if($(this).closest('.car_form_shablon').size()==0){
				$(this).chosen();
				//$(".chzn_select-deselect").chosen({allow_single_deselect:true});			
			}
		})
       
    }

    $('.phone_menu_btn').live('click',function(){
        if($(this).hasClass('active'))
        {
            $('.menu_block').animate({left:'-180px'},150)
        }
        else
        {
            $('.menu_block').animate({left:'0px'},150)
        }
        $(this).toggleClass('active');

    })

    $('.sub_menu_link > a').live('click',function(){
        /*if(!$(this).closest('li').hasClass('fixed_active'))
        {*/
			$(this).closest('li').removeClass('fixed_active');
			if($(this).closest('li').hasClass('active'))
			{
				$(this).closest('li').find('.sub_menu').removeClass('z_index_preor').slideUp(200);
				$(this).closest('li').removeClass('active');				
			}
			else
			{
				 $('.sub_menu_link').removeClass('active');
				 $(this).closest('li').addClass('active');
				 $('.sub_menu').slideUp();
				 $(this).closest('li').find('.sub_menu').addClass('z_index_preor').slideDown(200);
			}	
        /*}*/
        return false;
    })

    $('.news_block_video_play').live('click',function(){
        var href=$(this).attr('data-href');
        $(this).hide();
        $(this).siblings('img').hide();
        $(this).siblings('iframe').attr('src',href).show();
    })

    $('.login_link').live('click',function(){
        if($('.login_content').size()>0){
            var href=$(this).attr('data-href');
            if(!$('.'+href).hasClass('active'))
            {
                $('.login_content').slideUp(300);
                $('.'+href).slideDown(300,function(){
                    $('.login_content').removeClass('active');
                    $('.'+href).addClass('active');
                });
            }
            return false;
        }
    })

    $('.header_profile').bind('click',function(){
        $('.general_tips').fadeToggle(100);
        return false;
    });

})

function anchor(){
	$("a.anchorLink").click(function () {	
		var caller = this;
	
		var locationHref = window.location.href;
		var elementClick = $(caller).attr("href");
		var destination = $(elementClick).offset().top;
		$('html,body').animate({ scrollTop: destination}, 500);
		
	});
};
	
function popup_open(name)
{
    $('.background_window').hide();
    $('.modal,.modal_gray').hide();

    $('.background_window').show();

    var height=$(name).height();

    var width=$(name).width();


    var top=$(window).scrollTop()+$("body").height()/2-height/2-10;

    var left=$("body").width()/2-width/2;

    if(top<$(window).scrollTop()+10){top=$(window).scrollTop()+10}

    $(name).css({"left":left,"top":top});

    $(".background_window").show();
    $(name).fadeIn('200');

    if($(name+' select').size()>0)$(name+' select').chosen();
}

function popup_close()
{

    $('.background_window').fadeOut('100');
    $('.modal,.modal_gray').fadeOut('100');
    //$('.modal').removeClass('active');

}


function resize_image_block(name,width,height){
    var k=width/height;
    $(name).each(function(){
        $(this).height($(this).width()/k);
    })
}

function big_image_arrangement(k){
    if(!k)k=0.25;
    var top=$('.big_image_block').height()*k;
    $('.big_image_content').css({'margin-top':-top,'min-height':top});
}

$(window).load(function(){
    position_photo('.image_block');
});
/*- position photo-*/
function position_photo(name){
    $(name).each(function(){
        var block_width=$(this).width();
        var block_height=$(this).height();
        $(this).css('overflow','hidden');
        $(this).find('img').css({'max-width':'none','width':'auto'});
        var img_width=$(this).find('img').width();
        var img_height=$(this).find('img').height();
        var k=block_width/img_width;

        var x=img_height*k;
        if(x<block_height)
        {
            $(this).find('img').css('height',block_height);
            var m=(parseInt(img_width*block_height/img_height)-block_width)/2;
            $(this).find('img').css('margin-left',-m);
        }
        else if(x>block_height)
        {
            $(this).find('img').css('width',block_width);
            var m=(x-block_height)/2;
            $(this).find('img').css('margin-top',-m);
        }
        else
        {
            $(this).find('img').css({'width':block_width,'height':block_height});
        }
        $(this).find('img').show();

    });
}
