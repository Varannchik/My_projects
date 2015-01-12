var radio;
$(window).load(function(){
    big_image_arrangement();
    resize_image_block('.testimonials_block_image',286,150);
    resize_image_block('.on_demond_image',416,356);


    var size_specials_slider=Math.floor($(".gellary_slider").width()/240);
    size_specials_slider=(size_specials_slider<1) ? 1 : size_specials_slider;
    $(".gellary_slider li").width(Math.floor($(".gellary_slider").width()/size_specials_slider));
    if($(".gellary_slider li").size()>4){
        $(".gellary_slider").touchCarousel({
            itemsPerMove: 1,
            pagingNav: true,
            scrollbar: false,
            colums:size_specials_slider

        });
    }

    $('.car_form_left_select select').change(function(){
        $('.car_form_right_photo').hide().removeClass('active');
        var val=$(this).val();
        $('.car_form_right_photo[data-href='+val+']').show().addClass('active');
    })
})

$(window).resize(function(){
    big_image_arrangement();
    resize_image_block('.testimonials_block_image',286,150);
})

$(document).ready(function() {
    $('.calendar_wrapper input').live('focus',function(){
        var calendar_block= $(this).closest('.calendar_wrapper').find('.calendar_block');
        calendar_block.fadeIn(200);
        $(this).closest('.calendar_wrapper').find('.calendar_block_arrow').fadeIn(200);

        if(calendar_block.offset().left<5){
            calendar_block.css('left',parseInt(calendar_block.css('left'))-calendar_block.offset().left+5+'px');
        }

        if(calendar_block.offset().left+calendar_block.width()>$('body').width()-5){
            var right=$('body').width()-(calendar_block.offset().left+calendar_block.width())-30;
            calendar_block.css('left',parseInt(calendar_block.css('left'))+right+'px');
        }
        $(this).addClass('active');
        $('.calendar_background').show();
    })


    $('.calendar_background').live('click',function(){
        $(this).hide();
        $('.calendar_block').fadeOut(200);
        $('.calendar_block_arrow').fadeOut(200);
        $('input.active').removeClass('active');
    })

    radio=0;
    $('.car_form_add_link').live('click',function(){
        radio++;
        var html=$('.car_form_shablon').html();
        var block=$(html);
        block.find('label.car_form_yes').attr('for','radio'+radio);
        block.find('input.car_form_yes').attr('id','radio'+radio);
        radio++;
        block.find('label.car_form_no').attr('for','radio'+radio);
        block.find('input.car_form_no').attr('id','radio'+radio);
        $('.car_forms_block').append(block);
        $('.car_forms_block').find('.car_form:hidden').slideDown(200,function(){});
        return false;
    })

    $('.car_form_remove_link').live('click',function(){
        $(this).closest('.car_form').slideUp(200,function(){$(this).closest('.car_form').remove()})
        return false;
    })

    update_calendar();
    $('.calendar_block,.car_form_shablon,.car_form_shablon .car_form').hide().css('opacity','1');

});

function update_calendar(){
    var date = new Date();
    var m = date.getMonth();
    var y = date.getFullYear();

    $('.calendar_start').fullCalendar({
        selectable:true,
        events: [
            {
                id: 999,
                title: '<span class="one_data gray_data" data-long="0.5">Unavlbl <span class="data_val">15/09/2013</span></span>',
                start: new Date(y, m, 15),
                allDay: false
            },
            {
                title: '<span class="one_data gray_data" data-long="1">Unavlbl<span class="data_val">16/09/2013</span></span>',
                start: new Date(y, m, 16)
            },
            {
                title: '<span class="one_data gray_data" data-long="1">Unavlbl<span class="data_val">17/09/2013</span></span>',
                start: new Date(y, m, 17)
            },
            {
                title: '<span class="long_data  blue_data">$850.00</span>',
                start: new Date(y, m, 18),
                end: new Date(y, m, 19)
            },
            {
                title: '<span class="long_data blue_data">$1 200.00</span>',
                start: new Date(y, m, 20),
                end: new Date(y, m, 21)
            },
            {
                id: 999,
                title: '<span class="one_data blue_data">$850.00</span>',
                start: new Date(y, m, 22),
                allDay: false
            },
            {
                title: '<span class="one_data gray_data" data-long="1">Unavlbl<span class="data_val">23/09/2013</span></span>',
                start: new Date(y, m, 23)
            },
            {
                title: '<span class="one_data gray_data" data-long="1">Unavlbl<span class="data_val">24/09/2013</span></span>',
                start: new Date(y, m, 24)
            },
            {
                title: '<span class="one_data gray_data" data-long="1">Unavlbl<span class="data_val">25/09/2013</span></span>',
                start: new Date(y, m, 25)
            },
            {
                title: '<span class="one_data blue_data">$850.0</span>',
                start: new Date(y, m, 26),
                allDay: false
            },
            {
                title: '<span class="one_data gray_data" data-long="1">Unavlbl<span class="data_val">27/09/2013</span></span>',
                start: new Date(y, m, 27)
            },
            {
                title: '<span class="one_data gray_data" data-long="1">Unavlbl<span class="data_val">28/09/2013</span></span>',
                start: new Date(y, m, 28)
            }
        ],
        eventRender: function(event, element) {
            var htmlObject = $(element.find('span.fc-event-title').text());
            // console.log(element..findwidth())
            if(htmlObject.hasClass('gray_data')){element.find('span.fc-event-title').addClass('calendar_data_active');}
            else{element.find('span.fc-event-title').addClass('calendar_data_noactive');}
            element.find('span.fc-event-title').html(element.find('span.fc-event-title').text());


        },
        eventClick: function(calEvent, jsEvent, view) {
            var htmlObject = $(calEvent.title);
            var htmlclickObject=$(jsEvent.target);

            if(htmlObject.hasClass('blue_data'))
            {
                var data=htmlObject.find('.data_val').text();
                $('input.active').val(data);
                $('.calendar_background').hide();
                $('.calendar_block').fadeOut(200);
                $('.calendar_block_arrow').fadeOut(200);
                $('input.active').removeClass('active');
            }
        }
    });
}