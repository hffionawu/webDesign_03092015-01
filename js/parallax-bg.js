	
function parallaxBg() {
$(function(){
	
	$('.parallax').each(function(){
		var $objWindow = $(window);
		var $bgObj = $(this);
		$(window).on('scroll', function() {
			var yPos = +($objWindow.scrollTop() / $bgObj.data('speed')); 
           
			var coords = '100% '+ yPos + 'px';
            // Animate the background
			 $bgObj.css({ 
				 backgroundPosition: coords,
			   transition: 'background-image all 400ms',}, 400, 'linear');
           
		});
		
	});
});
}
parallaxBg();
	/*
	css
	div.parallax {	position: relative;	min-height: 100%; height: 100%; background-image: url();background-position: left top;
	background-repeat: no-repeat;background-attachment: fixed;-webkit-background-size: 100% auto;background-size: 100% auto;}
	*/