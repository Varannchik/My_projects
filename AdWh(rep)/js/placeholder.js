/*
CopyRight by:
	Lebedenko Nikolay Nikolayevich (Lebnik)
How use:
	$("FORM").placeholderLebnik();
Contact with me:
	http://yapro.ru/
	http://vkontakte.ru/club23074103
	http://www.facebook.com/pages/YaPro-CMS/184609554891388
	http://twitter.com/lebnik
	http://yalebnik.livejournal.com/
	http://odnoklassniki.ru/group/50396187918481
	http://totx.ya.ru/
	http://lebnik.habrahabr.ru/
*/
$(function(){
		
		
		
	$(".placeholder").each(function(){
		
				
		var i = document.createElement('input');// проверка поддержки
		if('placeholder' in i){ return true; }// placeholder support
	
		var placeholder = $(this).attr("placeholder");

		if(placeholder){
			
			$(this).data("placeholder",placeholder).removeAttr("placeholder").focus(function(){
				
				if($(this).val()==placeholder){
					$(this).val("");
				}
				
				$(this).removeClass("placeholder_block");
				
			}).blur(function(){
				var v = $(this).val();
				if(v=="" || v==" " || v==placeholder){
					$(this).addClass("placeholder_block").val(placeholder);
					
				}
			}).trigger("blur");
		}
	});

})