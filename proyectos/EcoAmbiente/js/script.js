// PRELOADER
$(window).on('load', function () {
	$('#preloader').delay(500).fadeOut('slow', function () {
		$(this).remove();
	});
});


// INICIAR WOW
let wow = new WOW().init();


$(document).ready(function() {
	// ANIMACION DEL MENU MOVIL
	$('.main_menu .btn_mobile_menu').click(() => {
		$('.mobile_menu').css({'display' : 'block'});
		setTimeout(() => {
			$('.mobile_menu .background').css({'opacity' : '1'});
			$('.mobile_menu .nav').css({'left' : '0'});
		}, 100);
	});
	$('.mobile_menu .background').click(() => {
		$('.mobile_menu .nav').css({'left' : '-120%'});
		$('.mobile_menu .background').css({'opacity' : '0'});
		setTimeout(() => {
			$('.mobile_menu').css({'display' : 'none'});
		}, 500);
	});
	$('.mobile_menu li').click(() => {
		$('.mobile_menu .nav').css({'left' : '-120%'});
		$('.mobile_menu .background').css({'opacity' : '0'});
		setTimeout(() => {
			$('.mobile_menu').css({'display' : 'none'});
		}, 500);
	});


	// ANIMACION DEL SCROLL 
	$('.btn_down a').click(ScrollAnimation);

	function ScrollAnimation(e){
		e.preventDefault();
		var ancla = $(this).attr('href');
		ancla = ancla.substring(1);
		var position = $('#'+ancla).position();
		$('html, body').animate({scrollTop: (position.top)}, 1000, 'easeInOutExpo');
	}
});