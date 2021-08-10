// Preloader
$(window).on('load', function () {
	$('#preloader').delay(500).fadeOut('slow', function () {
		$(this).remove();
	});
});


let wow = new WOW().init();
let wowMobil = new WOW({boxClass: 'wow-mobil', mobile: false}).init();


$(document).ready(function() {
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('#header').addClass('header');
		} else {
			$('#header').removeClass('header');
		}
	});



	// ANIMACION DEL SCROLL 
	$('#header a, #hero a').click(ScrollAnimation);

	function ScrollAnimation(e){
		// Evitamos que se haga el scroll
		e.preventDefault();
		// Capturamos el ancla
		var ancla = $(this).attr('href');
		// Le quitamos el numeral # para solo quedarnos con el nombre de la sección
		ancla = ancla.substring(1);
		// Obtenemos la posición de la sección
		var position = $('#'+ancla).position();
		// Hacemos el efecto scroll y le restamos algunos pixeles, en este caso 180
		$('html, body').animate({scrollTop: (position.top - 71)},  1500, 'easeInOutExpo');
	}


	// ANIMACION DEL MENU MOVIL
	$('.btn_mobile_menu').click(() => {
		$('.background').css({'display' : 'block'});
		$('.nav').css({'left' : '0'});
	});
	$('.background').click(() => {
		$('.nav').css({'left' : '-260px'});
		$('.background').css({'display' : 'none'});
	});
	$('.nav li').click(() => {
		$('.nav').css({'left' : '-260px'});
		$('.background').css({'display' : 'none'});
	});


	$("#text_animation").Morphext({
	    animation: "flipInX",
	    separator: ",",
	    speed: 3000,
	});
});