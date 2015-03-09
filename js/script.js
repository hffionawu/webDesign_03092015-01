
	$(function(){
$('a[href*="http"], a[href*="https"]').attr('target', 'new');
			
		});

$(document).ready(function() {
	
	$('.parallax').parallax({
	bleed: 10,
		zIndex: 0,
		speed: -0.1,
		
	});
 $('a[data-rel*=lightcase]').lightcase({
     transition : 'scrollHorizontal' ,
	 showSequenceInfo : true,//顯示序列信息
	 swipe: true,
	 fullScreenModeForMobile: true,
 }); 

  $("#owl").owlCarousel({
       navigation : false,
      autoPlay: 3000, //Set AutoPlay to 3 seconds
      paginationSpeed : 400,
	  stopOnHover: true,
      items : 4,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3],
	  itemsMobile: [300, 1],
	  itemsTablet:	[768,2],
 
  });
	
	})
