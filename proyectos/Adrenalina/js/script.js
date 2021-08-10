// PRELOADER
$(window).on('load', function () {
	$('#preloader').delay(500).fadeOut('slow', function () {
		$(this).remove();
	});
});


// CONFIGURACION DEL CARRUSEL
$('.carousel').carousel({
	interval: 3000,
	pause: false
});


// INICIAR WOW
let wow = new WOW().init();


$(document).ready(() => {
	// ANIMACION AL HACER HOVER EN MAIN NAV
	$('.main_nav ul a').mouseover(hover);
	function hover(){
		$(this).addClass('animated jello');
		setTimeout(() => {
			$(this).removeClass('animated jello');
		}, 1000);
	}


	// ANIMACION DEL BOTON DEL MENU MOVIL
	$(document).on('click', '#btn_mobile', function(e){
        e.preventDefault();

        $('#btn_mobile').toggleClass('nav-is-visible');

        if ( $('#btn_mobile').hasClass('nav-is-visible') ) {
            $('#mobile_menu').slideDown();
        } else {
            $('#mobile_menu').slideUp();
        }
    });
    // ANIMACION DE ANCLA DEL MENU MOVIL
	$('#mobile_menu a').click(() => {
		$('#mobile_menu').slideUp();
		$('#btn_mobile').toggleClass('nav-is-visible');
	});


	// BARRA FIJA
	let navbar = document.getElementById("navbar");
	let about_us = document.getElementById("about_us");
	let sticky = navbar.offsetTop;

	window.onscroll = function() {
		if (window.pageYOffset >= sticky) {
			navbar.classList.add("sticky")
			about_us.classList.add("sticky")
		} else {
			navbar.classList.remove("sticky");
			about_us.classList.remove("sticky");
		}
	};


	// ANIMACION DEL SCROLL 
	$('#navbar ul a.active').click(ScrollAnimation);

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
		$('html, body').animate({scrollTop: (position.top - 68)}, 1000, 'easeInOutExpo');
	}

	// ANIMACION DEL SCROLL 2
	$('a[href*="#header"], a[href*="#about_us"]').click(ScrollAnimation2);

	function ScrollAnimation2(e){
		e.preventDefault();
		var ancla = $(this).attr('href');
		ancla = ancla.substring(1);
		var position = $('#'+ancla).position();
		$('html, body').animate({scrollTop: position.top}, 1000, 'easeInOutExpo');
	}
});

