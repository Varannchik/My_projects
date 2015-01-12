$(function(){
            $('.portfolio_filter li').click(function(){
                $('.portfolio_filter li').removeClass('active');
                $(this).addClass('active');
            })

            $('.portfolio_cat_menu li').click(function(){
                $('.portfolio_cat_menu li').removeClass('active');
                $(this).addClass('active');
            })
			
            $('.portfolio_block').click(function(){
                if($(this).hasClass('active'))
                {
                    $('.portfolio_block').removeClass('active');
                    $('.portfolio_detail').slideUp('200');
                }
                else
                {
                    var total_width=$('.portfolio_content').width();
                    var total_size=$('.portfolio_content .main_portfolio_block').size();
                    var parent=$(this).closest('.main_portfolio_block')
                    var width_item=parent.width();
                    var size=parent.index('.portfolio_content .main_portfolio_block')+1;
                    var size_line=Math.round(total_width/width_item);
                    var n=Math.ceil(size/size_line);
                    //alert(width_item);
                    var html=$(this).parent('div').find('.portfolio_item_content').html();
                    var left=$(this).offset().left+$(this).width()/2-15-$('.portfolio_content').offset().left;
                    var pos=(total_size<(n*size_line))? total_size-1:(n*size_line-1);
                    if($('.portfolio_detail').size()>0)
                    {

                        var old_active=$('.portfolio_content .active').closest('.main_portfolio_block');
                        var old_active_item=old_active.index('.portfolio_content .main_portfolio_block')+1;
                        $('.portfolio_block').removeClass('active');
                        $(this).addClass('active');
                        if(n==Math.ceil(old_active_item/size_line))
                        {
                            $('.portfolio_detail').html(html);
                        }
                        else
                        {
                            $('.portfolio_detail').remove();
                            $('.portfolio_content .main_portfolio_block').eq(pos).after('<div class="portfolio_detail">'+html+'</div>');
                            $('.portfolio_detail').slideDown('200', function() {
								var scroll_top=$('.portfolio_content .active').offset().top-10;
								$('html,body').animate({ scrollTop: scroll_top}, 200);
							});
                        }
                    }
                    else
                    {
                        $('.portfolio_block').removeClass('active');
                        $(this).addClass('active');
                        $('.portfolio_content .main_portfolio_block').eq(pos).after('<div class="portfolio_detail">'+html+'</div>');
                        $('.portfolio_detail').slideDown('200', function() {
								var scroll_top=$('.portfolio_content .active').offset().top-10;
								$('html,body').animate({ scrollTop: scroll_top}, 200);
							});
                    }
                    $('.portfolio_detail_arrow').css({'left':left});



                }
            })
})