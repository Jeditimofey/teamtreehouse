
$(document).ready(function(){

	$(window).scroll(function() {
	    if ( $(this).scrollTop() > 500) {
	    
	        $('.content>nav>a:not(:last-child)').fadeOut(100);
	      	$('.content>nav>:last-child').addClass('visible-button');

	      	$('header').hover(
	      			function(){
	      				$('.content>nav>a:not(:last-child)').fadeIn(100);
	      			}, function(){
	      				$('.content>nav>a:not(:last-child)').fadeOut(100);
	      			}
	      	); 
	    }  else {
	    	$('.content>nav>a:not(:last-child)').fadeIn();
	      	$('.content>nav>:last-child').removeClass('visible-button');
	      	$('header').unbind('mouseenter mouseleave');
	    } 


	});


	
});

