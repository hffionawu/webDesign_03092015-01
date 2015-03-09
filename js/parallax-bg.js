function parallaxBg() {
	'use strict'
  $(document).ready(function () {
  
 
 $('.parallax').each(function(){
 var $window = $(window); 
 var $parallaxObj = $(this);
 var xPos = ['0% ', '50% '];
	 $window.on('scroll resize', function(){
 if($window.width() > 800){ 
var yPos = - ($window.scrollTop() / $parallaxObj.data('speed'));
var coords = xPos[0] + yPos + 'px';
$parallaxObj.css({
 backgroundPosition: coords,
		  })
		 }else{
var myPos = - ($window.scrollTop() / $parallaxObj.data('speed'));
 var mcoords = xPos[1] + myPos + 'px';
$parallaxObj.css({
		  backgroundPosition: mcoords,
		  })	 
		 }
		 return ;
	  });//window scroll
  });//each func
	
  });//ready func
  
	}
	/*
	css
	div.parallax {	position: relative;	min-height: 100%; height: 100%; background-image: url();background-position: left top;
	background-repeat: no-repeat;background-attachment: fixed;-webkit-background-size: 100% auto;background-size: 100% auto;}
	*/