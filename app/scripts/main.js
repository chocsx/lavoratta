$(document).ready(function(){
	$('.hamburger').click(function() {
			 $('nav ul').toggleClass('open');
			 $('.hamburger').toggleClass('is-active');
    });
    $('.slider').slick({
      dots: true
    });
})
