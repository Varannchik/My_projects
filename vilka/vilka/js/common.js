$(function() {
  
  // stars rating
  //-----------------------------------------------------------------------------
	$('.stars_rating a,.stars_rating span').hover(function(){
		if(!$(this).closest('.stars_rating').hasClass('static'))
		{
			$(this).siblings('.value').width(($(this).index())*10 + '%');
		}    
	});
    $('.stars_rating a,.stars_rating span').on('click',function(){
		if(!$(this).closest('.stars_rating').hasClass('static'))
		{
			$(this).siblings('.value').width(($(this).index())*10 + '%');
		}        
        return false;
    });
  //-----------------------------------------------------------------------------
	
	
  // recipes
  //-----------------------------------------------------------------------------
	$('.recipes_item').hover(function(){
		$(this).find('.text').stop(true,true).slideDown(200);
		$(this).find('.time, .recipe_rating').fadeIn(200).animate({opacity:1},200);
	}, function(){
		$(this).find('.time, .recipe_rating').fadeOut(200).animate({opacity:0},200);
		$(this).find('.text').stop(true,true).slideUp(200);
	});
  //-----------------------------------------------------------------------------



    // main comment
    //-----------------------------------------------------------------------------
    var main_comment_text = $('.main_comment_text').height();
    $('.main_comment_expand').on('click',function(){
        var text = $(this).siblings('.main_comment_text');
        var text_height_max = text.find('.inner').height();
        if(text.hasClass('visible')){
            text.removeClass('visible');
            text.stop().animate({height: main_comment_text});
        } else {
            text.addClass('visible');
            text.stop().animate({height: text_height_max});
        }
        $('.main_comment_expand a').toggleClass('active');

        ///для new_comments!!!
        $(this).closest('.main_comment').find('.comments_new_answers').slideToggle(300);


        return false;
    });
    //-----------------------------------------------------------------------------

    //-------------------------------------------------------------------
    //show commetns
    $('.and_show_comments').on('click', function(){
        $(this).closest('.main_comment').find('.main_comment_expand').click();
    });
  

  // catalog item
  //-----------------------------------------------------------------------------
	$('.catalog_item .info').hover(function(){
		var x = $(this).parents('.catalog_item').find('.fade_text');
		  x.show();
		return false;
		},function(){    var x = $(this).parents('.catalog_item').find('.fade_text');
		  x.hide();});
  //-----------------------------------------------------------------------------
	  
	  
  
  // dropdown
  //-----------------------------------------------------------------------------

    $('.selector_body').hover(function(){
        var dd = $(this).find('.drop_down');
        dd.stop(true,true).slideDown(function(){
            $(this).find('.drop_down-slider').nanoScroller();
        });
    },
    function(){
        var dd = $(this).find('.drop_down');
        if($(this).find('input[type=text]').is(':focus')) {
            return false;
        } else {
            dd.stop(true,true).slideUp();
        }
    });

  
	  $('.selector_body li').on('click',function(){
		$(this).siblings('li').removeClass('active');
		$(this).addClass('active');
		$(this).parents('.drop_down').slideUp();
		$(this).parents('.selector_body').find('input[type=text]').val($(this).text());
		if($(this).parent().hasClass('change_caption')){
		  /*var text = $(this).attr('data-caption');
		  var caption = $($(this).parent().attr('data-caption_id'));
		  caption.stop(true,true).fadeTo(300,0,function(){
			$(this).html(text).stop(true,true).fadeTo(300,1);
		  });*/
		}
	  });
	  
	  $('.drop_down-buttons a').on('click',function(){
		var caption = $($(this).parent().attr('data-caption_id'));
		var category_list = $($(this).parent().attr('data-category_id'));
		var text = '';
		var active_list_item = category_list.find('li.active');
		if($(this).hasClass('prev')){
		  if(active_list_item.index()>1){
			text = active_list_item.removeClass('active').prev().addClass('active').attr('data-caption');
		  } else {
			return false;
		  }
		} else {
		  if(active_list_item.index()<(category_list.find('li').length-1)){
			text = active_list_item.removeClass('active').next().addClass('active').attr('data-caption');
		  } else {
			return false;
		  }
		  console.log(category_list.find('li').length);
		  console.log(active_list_item.index());
		}
		caption.stop(true,true).fadeTo(300,0,function(){
		  $(this).html(text).stop(true,true).fadeTo(300,1);
		});
		return false;
	  });
  
	  $('.selector_body input[type=text]').on('keyup',function(){
		var text = $(this).val();
		var list_items = $(this).parents('.selector_body').find('li');
		var list_items_result = list_items.filter(function( index ) {
		  return $(this).is(":contains('"+ text +"')");
		});
		list_items_result.show().removeHighlight().highlight(text);
		list_items.not(list_items_result).not('.placeholder').hide();
		$(this).parents('.selector_body').find('.drop_down-slider').nanoScroller();
		//console.log(text);
	  });
  //-----------------------------------------------------------------------------
 

 
  // search dropdown
  //-----------------------------------------------------------------------------
	  $('.search_category').hover(function(){
		$('.search').addClass('dd_visible');
		$(this).find('ul').stop(true,true).slideDown();
	  }, function(){
		$(this).find('ul').stop(true,true).slideUp(function(){
		  $('.search').removeClass('dd_visible');
		});
	  });
	  $('.search_category a').on('click',function(){
		$('#search_category').val($(this).text());
		$('#search_category_label').text($(this).text());
		$('.search_category ul').stop(true,true).slideUp(function(){
		  $('.search').removeClass('dd_visible');
		});
		return false;
	  });
  //-----------------------------------------------------------------------------
 
 
  // header, dd, city nav dropdown
  //-----------------------------------------------------------------------------
	  $('.header_nav-1 li').has('ul').addClass('has_sub');
	  $('.header_nav-1 > ul > li, .header_logo .city').hover(function(){
		$(this).find('ul').stop(true,true).slideDown(200);
	  }, function(){
		$(this).find('ul').stop(true,true).slideUp(200);
	  });
  //-----------------------------------------------------------------------------
  
  // header
  //-----------------------------------------------------------------------------
	  $('.header_links li').hover(function(){
		$(this).find('.hint').stop(true,true).fadeIn(100);
	  }, function(){
		$(this).find('.hint').stop(true,true).fadeOut(100);
	  });
	  
		$('.header_search .search input[type="text"]').focus(function(){$(this).closest('.search').addClass('active')})
		$('.header_search .search input[type="text"]').blur(function(){$(this).closest('.search').removeClass('active')})
		
		$('.free_order .close').on('click',function(){
			$('.free_order_block').animate({width:'0px'},100,function(){$('.free_order_block').hide()});
			return false;
		})
		
		setTimeout(function(){$('.free_order_block').show().animate({width:'208px'},500)},3000);
  //-----------------------------------------------------------------------------


	

  // MAP
  //-----------------------------------------------------------------------------
    $('.map_screen_btn_down').live('click',function(){
		var parent=$(this).closest('.map ')
        var height=parent.find('.yamap_section').attr('data-maxheight')+'px';
        parent.find('.yamap_section').animate({height:height},0).addClass('active');
        myMap1.container.fitToViewport();
    })
    $('.map_screen_btn_up').live('click',function(){
		var parent=$(this).closest('.map ')		
        var height=parent.find('.yamap_section').attr('data-minheight')+'px';
        parent.find('.yamap_section').animate({height:height},0).removeClass('active');
    })
  //-----------------------------------------------------------------------------

  // manu filters
  //-----------------------------------------------------------------------------
    $('.dd_nav > ul > li').hover(function(){
        $(this).find('.nano_list').stop(true,true).slideDown(200,function(){$(".nano_list").nanoScroller();});
        if($(this).is('.dd_nav > ul > li:last-child')){
            $(this).parents('.dd_nav').addClass('dd_visible');
        }
    }, function(){
        $(this).find('.nano_list').stop(true,true).slideUp();
        $(this).parents('.dd_nav').removeClass('dd_visible');
    });
  //-----------------------------------------------------------------------------

  $('.one_page_header').hover(function(){
      $('.one_page_header_back').stop(true,true).fadeOut(100);
    },function(){
      $('.one_page_header_back').stop(true,true).fadeIn(100);
  })
});



