$(function(){
	 $('.slideshow').addClass('animated fadeInRight');
	
	$(window).scroll(function(e){
	var h = $('#header').offset().top;
	var top = $('#nav').offset().top;
	var scrollPos = $(window).scrollTop();	
	var $elm = $('.slideshow');
		if(scrollPos > h + 80 ){
		$elm.toggleClass('fadeOutLeft', 'fadeInRight');
		}else if(scrollPos > top + 40  ){
		$elm.toggleClass('fadeOutLeft', 'fadeInUp')
		
		
		}
	});
						
						

});	