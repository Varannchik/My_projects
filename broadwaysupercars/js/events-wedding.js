$(window).load(function(){
    big_image_arrangement();
    resize_image_block('.testimonials_block_image',449,312);
    resize_image_block('.border_image_block',460,356);


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
	
	
	/*------------DATEPICKER---------------*/
	if($('body').width()>600)
	{
		update_calendar();
	}
	else
	{
		$( ".start_date_input" ).datepicker();
		$( ".end_date_input" ).datepicker();				
	}
	
	
	
})

$(window).resize(function(){
    big_image_arrangement();
    resize_image_block('.testimonials_block_image',449,312);
    resize_image_block('.border_image_block',460,356);
})

function update_calendar(){
    var date = new Date();
    var m = date.getMonth();
    var y = date.getFullYear();

    $('.calendar_start').fullCalendar({
        selectable:true,
		firstDay:1,
        events: [			
			{
                title: '<span class="long_data blue_data three_of_third">$1 200.00</span>',
                start: new Date(y, m, 1),
				end: new Date(y, m, 3)
            },	
			{
                title: '<span class="two first_data blue_data one_of_third">$700</span>',
                start: new Date(y, m, 1)
            },
            {
                title: '<span class="two last_data blue_data one_of_third">$700</span>',
                start: new Date(y, m, 1)
            },	
            {
                title: '<span class="one_data blue_data two_of_third">$1 200.00</span>',
                start: new Date(y, m, 1)
            },	
			{
                title: '<span class="two first_data blue_data one_of_third">$700</span>',
                start: new Date(y, m, 2)
            },
            {
                title: '<span class="two last_data blue_data one_of_third">$700</span>',
                start: new Date(y, m, 2)
            },	
            {
                title: '<span class="one_data blue_data two_of_third">$1 200.00</span>',
                start: new Date(y, m, 2)
            },	
			{
                title: '<span class="two first_data blue_data one_of_third">$700</span>',
                start: new Date(y, m, 3)
            },
            {
                title: '<span class="two last_data blue_data one_of_third">$700</span>',
                start: new Date(y, m, 3)
            },	
            {
                title: '<span class="one_data blue_data two_of_third">$1 200.00</span>',
                start: new Date(y, m, 3)
            },		
			{
                title: '<span class="two first_data blue_data one_of_two">$700</span>',
                start: new Date(y, m, 4)
            },
            {
                title: '<span class="two last_data blue_data one_of_two">$700</span>',
                start: new Date(y, m, 4)
            },	
            {
                title: '<span class="one_data blue_data two_of_two">$1 200.00</span>',
                start: new Date(y, m, 4)
            },	
			{
                title: '<span class="two first_data blue_data one_of_two">$700</span>',
                start: new Date(y, m, 5)
            },
            {
                title: '<span class="two last_data blue_data one_of_two">$700</span>',
                start: new Date(y, m, 5)
            },	
            {
                title: '<span class="one_data blue_data two_of_two">$1 200.00</span>',
                start: new Date(y, m, 5)
            },	
			{
                title: '<span class="two first_data blue_data one_of_two">$700</span>',
                start: new Date(y, m, 6)
            },
            {
                title: '<span class="two last_data blue_data one_of_two">$700</span>',
                start: new Date(y, m, 6)
            },	
            {
                title: '<span class="one_data blue_data two_of_two">$1 200.00</span>',
                start: new Date(y, m, 6)
            },		
			{
                title: '<span class="two first_data blue_data one_of_two">$700</span>',
                start: new Date(y, m, 7)
            },
            {
                title: '<span class="two last_data blue_data one_of_two">$700</span>',
                start: new Date(y, m, 7)
            },	
            {
                title: '<span class="one_data blue_data two_of_two">$1 200.00</span>',
                start: new Date(y, m, 7)
            },	
			{
                title: '<span class="long_data blue_data three_of_third">$1 200.00</span>',
                start: new Date(y, m, 8),
				end: new Date(y, m, 10)
            },	
			{
                title: '<span class="two first_data blue_data one_of_third">$700</span>',
                start: new Date(y, m, 8)
            },
            {
                title: '<span class="two last_data blue_data one_of_third">$700</span>',
                start: new Date(y, m, 8)
            },	
            {
                title: '<span class="one_data blue_data two_of_third">$1 200.00</span>',
                start: new Date(y, m, 8)
            },	
			{
                title: '<span class="two first_data blue_data one_of_third">$700</span>',
                start: new Date(y, m, 9)
            },
            {
                title: '<span class="two last_data blue_data one_of_third">$700</span>',
                start: new Date(y, m, 9)
            },	
            {
                title: '<span class="one_data blue_data two_of_third">$1 200.00</span>',
                start: new Date(y, m, 9)
            },	
			{
                title: '<span class="two first_data blue_data one_of_third">$700</span>',
                start: new Date(y, m, 10)
            },
            {
                title: '<span class="two last_data blue_data one_of_third">$700</span>',
                start: new Date(y, m, 10)
            },	
            {
                title: '<span class="one_data blue_data two_of_third">$1 200.00</span>',
                start: new Date(y, m, 10)
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
			console.log('11');
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