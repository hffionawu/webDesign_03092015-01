
	$(function(){
$('a[href*="http"], a[href*="https"]').attr('target', 'new');
		
		});

$(document).ready(function() {

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
	if($("#infinite-scroll").length != 0){
	 $("#infinite-scroll").load('assist/load1.html .frame');
		$(window).on('scroll', function(){
    if($(window).scrollTop() == $(document).height() - $(window).height())  {
        $('div.page-nav').show();
          
            if($("#infinite-scroll * ").length != 0){
                $("#infinite-scroll").delay(200).fadeIn(400);
                $('div.page-nav').hide();
            }else {
                $('div.page-nav').html('No more posts to show.');
            }
        }
      
    });
	}//if
	})
