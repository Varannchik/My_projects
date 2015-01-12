$(window).load(function(){



    var size_specials_slider=Math.floor($(".main_page_slider1").width()/280);
	$(".main_page_slider1").carouFredSel({
		responsive: true,
		auto:false,
		width: '100%',
		scroll: 1,
		prev: '.slider_prev',
		next: '.slider_next',
		items: {
			width: 430,
			height:'auto',
			//	height: '30%',	//	optionally resize item-height
			visible: {
				min: 2,
				max: 6
			}
		}
	});
    

    var size_specials_slider=Math.floor($(".main_page_slider2").width()/310);
	$(".main_page_slider2").carouFredSel({
		responsive: true,
		auto:false,
		width: '100%',
		scroll: 1,
		next: '#news-next',
		prev: '#news-prev',
		items: {
			width: 380,
			visible: {
				min: 2,
				max: 6
			}
		}
	});
    

    var size_specials_slider=Math.floor($(".main_page_slider3").width()/310);
	$(".main_page_slider3").carouFredSel({
		responsive: true,
		auto:false,
		width: '100%',
		scroll: 1,
		next: '#crit-next',
		prev: '#crit-prev',
		items: {
			width: 470,
			visible: {
				min: 2,
				max: 6
			}
		}
	});
    

	$(".main_page_slider4").carouFredSel({
		responsive: true,
		auto:false,
		width: '100%',
		height: 351,
		scroll: {
			items:1,
			onBefore:function(){$('.image_slider_item .text').animate({bottom:'-500px'},500)},
			onAfter:function(){$('.image_slider_item .text').animate({bottom:'0px'},500)}
		},
		prev: '#review_restaurant-prev',
		next: '#review_restaurant-next',
		items: {
			height: 351,
			visible: {
				min: 1,
				max: 1
			}
		}
	});
    

	$(".main_page_slider5").carouFredSel({
		responsive: true,
		auto:false,
		height: 'auto',
		width: '100%',
		scroll: 1,
		prev: '#photo_report-prev',
		next: '#photo_report-next',
		items: {
			visible: {
				min: 1,
				max: 1
			}
		}
	});
    

    var size_specials_slider=Math.floor($(".main_page_slider6").width()/300);
    $(".main_page_slider6").carouFredSel({
        responsive: true,
        auto:false,
        width: '100%',
        scroll: 1,
        prev: '#recipes-prev',
        next: '#recipes-next',
        scroll:{fx:'none',items:size_specials_slider},
        items: {
            width: 320,
            //	height: '30%',	//	optionally resize item-height
            visible: {
                min: 2,
                max: 6
            }
        }
    });


    $(".main_page_slider7").carouFredSel({
        responsive: true,
        auto:{
            pauseOnHover:true,
            play:true,
            timeoutDuration:5000
        },
        height: 'auto',
        width: '100%',
        scroll: {
            items:2
        },
        items: {
            visible: {
                min: 2,
                max: 2
            }
        }
    });


    $(".main_page_slider1,.main_page_slider2,.main_page_slider3,.main_page_slider4,.main_page_slider5,.main_page_slider6").css('visibility','visible');
    $(".main_page_slider1_body,.main_page_slider2_body,.main_page_slider3_body,.main_page_slider4_body,.main_page_slider5_body,.main_page_slider6_body").css({'height':'auto','overflow':'visible'});

    $('.slider_nav').height($('.main_page_slider1_body').height()-5);


    $('.main_comment_nav a').live('click',function(){
        var all=$('.main_comment_body_content > li');
        var size=$('.main_comment_body_content > li').size()-1;
        var number=all.index($('.main_comment_body_content > li.active'))+1;
        if(number>size){number=0}
        $('.main_comment_body_content > li').hide().removeClass('active');
        $('.main_comment_body_content > li').eq(number).addClass('active').fadeIn(800);
        return false;
    })
	
	$('.catalog_item').each(function(){
        var h=$(this).height()-$(this).find('header').height()-$(this).find('footer').height()-7-6;
        $(this).find('.fade_text').height(h);
    })	

})

$(window).resize(function(){

    $('.slider_nav').height($('.main_page_slider1_body').height()-5);
	
    $('.catalog_item').each(function(){
        var h=$(this).height()-$(this).find('header').height()-$(this).find('footer').height()-7-6;
        $(this).find('.fade_text').height(h);
    })	

})



var myMap;

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init () {
    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").
    myMap = new ymaps.Map('main_page_map_small',{
        // При инициализации карты обязательно нужно указать
        // её центр и коэффициент масштабирования.
        center:[55.76, 37.64], // Москва
        zoom:10
    });
    myMap1= new ymaps.Map('main_page_map_big', {
        // При инициализации карты обязательно нужно указать
        // её центр и коэффициент масштабирования.
        center:[55.76, 37.64], // Москва
        zoom:10
    });
    myMap1 = new ymaps.Map('main_page_map_popup',{
        // При инициализации карты обязательно нужно указать
        // её центр и коэффициент масштабирования.
        center:[55.76, 37.64], // Москва
        zoom:10
    });
   /* myMap.controls.add(
        new ymaps.control.ZoomControl()
    );
    myMap.controls.add('typeSelector');*/

}