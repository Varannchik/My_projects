$(window).load(function(){
    big_image_arrangement();
	resize_image_block('.news_block_video',406,296);
	resize_image_block('.testimonials_block_image',406,296);

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

    update_calendar();
})

$(window).resize(function(){
    big_image_arrangement();
	resize_image_block('.news_block_video',406,296);
	resize_image_block('.testimonials_block_image',406,296);
})

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
            if(htmlObject.hasClass('gray_data')){element.addClass('calendar_data_active');}
            else{element.addClass('calendar_data_noactive');}
            element.find('span.fc-event-title').html(element.find('span.fc-event-title').text());
        },
        eventClick: function(calEvent, jsEvent, view) {
            var htmlObject = $(calEvent.title);
            var htmlclickObject=$(jsEvent.target);

            if(htmlclickObject.hasClass('gray_data'))
            {
                var data=htmlObject.find('.data_val').text();
                $('input.active').val(data);
            }
        },
        select:function(startDate, endDate, allDay, jsEvent, view ){
            var s_data=new Date(startDate);
            var s_date=s_data.getDate();
            var s_month=s_data.getMonth()+1;
            var s_year=s_data.getFullYear();

            var end_data=new Date(endDate);
            var end_date=end_data.getDate();
            var end_month=end_data.getMonth()+1;
            var end_year=end_data.getFullYear();

            $('.start_date_input').val(s_month+'/'+s_date+'/'+s_year);
            $('.end_date_input').val(end_month+'/'+end_date+'/'+end_year);
        }
    });
    $.fullCalendar.formatDate()
}