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

    $('.car_form_left_select select').live('change',function(){
        $(this).closest('.car_form').find('.car_form_right_photo').hide().removeClass('active');
        var val=$(this).val();
       $(this).closest('.car_form').find('.car_form_right_photo[data-href='+val+']').show().addClass('active');
    })
})

$(window).resize(function(){
    big_image_arrangement();
    resize_image_block('.testimonials_block_image',286,150);
})

$(document).ready(function() {
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
		$('.car_forms_block').find('.car_form:hidden').find("select").chosen();
		$('.calendar_block').show().css('opacity','1');
		update_calendar($('.car_forms_block').find('.car_form:hidden').find(".calendar_start"));
		$('.calendar_block').hide().css('opacity','1');
		$('.car_forms_block').find('.car_form:hidden').slideDown(200,function(){});
		
        return false;
    })

    $('.car_form_remove_link').live('click',function(){
        $(this).closest('.car_form').slideUp(200,function(){$(this).closest('.car_form').remove()})
        return false;
    })

	/*------------DATEPICKER---------------*/
	if($('body').width()>600)
	{
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
			$('.calendar_start').fullCalendar( 'today' );
		})


		$('.calendar_background').live('click',function(){
			$(this).hide();
			$('.calendar_block').fadeOut(200);
			$('.calendar_block_arrow').fadeOut(200);
			$('input.active').removeClass('active');
		})
		
		$('.car_forms_block .calendar_start').each(function(){
			update_calendar($(this));
		})
		
		$('.calendar_block,.car_form_shablon,.car_form_shablon .car_form').hide().css('opacity','1');
	}
	else
	{
		$( ".car_form_left input" ).datepicker();				
	}
	


});

function update_calendar(elem){
    var date = new Date();
    var m = date.getMonth();
    var y = date.getFullYear();

    elem.fullCalendar({
        selectable:false,
		firstDay:1,
        events: [			
			{
                title: '<span class="gray_data bottom">$1 200.00</span>',
                start: new Date(y, m, 1),
				end: new Date(y, m, 3)
            },	
            {
                title: '<span class="last_data gray_data top">$700</span>',
                start: new Date(y, m, 1)
            },			
			{
                title: '<span class="first_data gray_data top">$700</span>',
                start: new Date(y, m, 1)
            },	
            {
                title: '<span class="gray_data middle">$1 200.00</span>',
                start: new Date(y, m, 1)
            },	
			{
                title: '<span class="first_data gray_data top">$700</span>',
                start: new Date(y, m, 2)
            },
            {
                title: '<span class="last_data gray_data top">$700</span>',
                start: new Date(y, m, 2)
            },	
            {
                title: '<span class="gray_data middle">$1 200.00</span>',
                start: new Date(y, m, 2)
            },	
			{
                title: '<span class="first_data gray_data top">$700</span>',
                start: new Date(y, m, 3)
            },
            {
                title: '<span class="last_data gray_data top">$700</span>',
                start: new Date(y, m, 3)
            },	
            {
                title: '<span class="gray_data middle">$1 200.00</span>',
                start: new Date(y, m, 3)
            },		
			{
                title: '<span class="first_data blue_data top">$700</span>',
                start: new Date(y, m, 4)
            },
            {
                title: '<span class="last_data blue_data top">$700</span>',
                start: new Date(y, m, 4)
            },	
            {
                title: '<span class="blue_data middle">$1 200.00</span>',
                start: new Date(y, m, 4)
            },	
			{
                title: '<span class="first_data blue_data middle">$700</span>',
                start: new Date(y, m, 5)
            },
            {
                title: '<span class="last_data blue_data middle">$700</span>',
                start: new Date(y, m, 5)
            },	
            {
                title: '<span class="blue_data bottom">$1 200.00</span>',
                start: new Date(y, m, 5)
            },	
			{
                title: '<span class="first_data blue_data middle">$700</span>',
                start: new Date(y, m, 6)
            },
            {
                title: '<span class="last_data blue_data middle">$700</span>',
                start: new Date(y, m, 6)
            },	
            {
                title: '<span class="blue_data bottom">$1 200.00</span>',
                start: new Date(y, m, 6)
            },		
			{
                title: '<span class="first_data blue_data middle">$700</span>',
                start: new Date(y, m, 7)
            },
            {
                title: '<span class="last_data blue_data middle">$700</span>',
                start: new Date(y, m, 7)
            },	
            {
                title: '<span class="blue_data bottom">$1 200.00</span>',
                start: new Date(y, m, 7)
            },	
			{
                title: '<span class="blue_data bottom">$1 200.00</span>',
                start: new Date(y, m, 8),
				end: new Date(y, m, 10)
            },	
            {
                title: '<span class="last_data blue_data top">$700</span>',
                start: new Date(y, m, 8)
            },			
			{
                title: '<span class="first_data blue_data top">$700</span>',
                start: new Date(y, m, 8)
            },	
            {
                title: '<span class="blue_data middle">$1 200.00</span>',
                start: new Date(y, m, 8)
            },	
			{
                title: '<span class="first_data blue_data top">$700</span>',
                start: new Date(y, m, 9)
            },
            {
                title: '<span class="last_data blue_data top">$700</span>',
                start: new Date(y, m, 9)
            },	
            {
                title: '<span class="blue_data middle">$1 200.00</span>',
                start: new Date(y, m, 9)
            },	
			{
                title: '<span class="first_data blue_data top">$700</span>',
                start: new Date(y, m, 10)
            },
            {
                title: '<span class="last_data blue_data top">$700</span>',
                start: new Date(y, m, 10)
            },	
            {
                title: '<span class="blue_data middle">$1 200.00</span>',
                start: new Date(y, m, 10)
            },
        ],
        eventRender: function(event, element) {
            var htmlObject = $(element.find('span.fc-event-title').text());
            // console.log(element..findwidth())
            /*if(htmlObject.hasClass('gray_data')){element.find('span.fc-event-title').addClass('calendar_data_active');}
            else{element.find('span.fc-event-title').addClass('calendar_data_noactive');}*/
            element.find('span.fc-event-title').html(element.find('span.fc-event-title').text());


        },
        eventClick: function(calEvent, jsEvent, view) {
            var htmlObject = $(calEvent.title);
            var htmlclickObject=$(jsEvent.target);
        },
		dayClick:function(date){
            var one_date=date.getDate();
            var one_month=date.getMonth();
            var one_year=date.getFullYear();

			$('input.active').val(one_month+'/'+one_date+'/'+one_year);
			$('.calendar_background').hide();
			$('.calendar_block').fadeOut(200);
			$('.calendar_block_arrow').fadeOut(200);
			$('input.active').removeClass('active');
		}		
    });
}