// PRELOADER
$(window).on('load', function () {
	$('#preloader').delay(500).fadeOut('slow', function () {
		$(this).remove();
	});
});


// INICIAR WOW
let wow = new WOW().init();


$(document).ready(function(){
	// ANIMACION DEL HERO
	$(window).scroll(function(){
		let scroll = $(this).scrollTop();
		let height = $(window).height();

		if (scroll <= height) {
			let position = scroll * -0.30;

			$('.header').css({
				'background-position': '0 ' + position + 'px'
			})
		}
		
		if ($(this).scrollTop() >= (200) ) {
			$('.header #main_nav').css({
				'margin-top': '0'
			})
		} else {
			$('.header #main_nav').css({
				'margin-top': '15px'
			})
		}
	});


	// ANIMACION AL HACER HOVER EN MAIN NAV
	$('#main_nav .main_menu ul a').mouseover(hover);
	function hover(){
		$(this).addClass('animated rubberBand');
		setTimeout(() => {
			$(this).removeClass('animated rubberBand');
		}, 1000);
	}


	// ANIMACION DEL SCROLL 
	$('#main_nav ul a, #main_nav a[href*="#hero"]').click(ScrollAnimation);

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
		$('html, body').animate({scrollTop: (position.top - 68)}, 1500, 'easeInOutExpo');
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


	// ANIMACIONES
    window.onscroll = function() {
		animationServicesDonuts();
		animationProducts();
		animationParallaxDonuts();
	};

	let width = window.innerWidth;
	let height = window.innerHeight;


	// ANIMACION DE LAS DONAS FLOTANTES 3D
	function animationServicesDonuts() {
		let sections =  height/4;

		let position1 = ($('#position_img1').position()).top;
		position1 -= height;
		let position2 = ($('#position_img2').position()).top;
		position2 -= height;

    	let scroll = window.pageYOffset;

    	// PRIMERA DONA
		if ( scroll >= position1 && scroll <= (position1 + height + 300) ) {
			if ( scroll < (position1 + (sections)) ) {
				document.getElementById("image").style.transform = 'perspective(400px) rotateY(0deg) rotateX(15deg) translateX(0) translateY(10px)';
			}
			else if ( scroll < (position1 + (sections*2)) ) {
				document.getElementById("image").style.transform = 'perspective(400px) rotateY(20deg) rotateX(0deg)  translateX(-10px) translateY(0)';
			}
			else if ( scroll < (position1 + (sections*3)) ) {
				document.getElementById("image").style.transform = 'perspective(400px) rotateY(0deg) rotateX(-15deg) translateX(0) translateY(-10px)';
			}
			else if ( scroll < (position1 + (sections*4)) ) {
				document.getElementById("image").style.transform = 'perspective(400px) translateX(0px) translateY(0) rotate3d(0, 0, 1, 45deg)';
			}
		}
		
		// SEGUNDA DONA
		if (scroll >= position2 && scroll <= (position2 + height + 300) ) {
			if ( scroll < (position2 + (sections)) ) {
				document.getElementById("image2").style.transform = 'perspective(400px) rotateY(0deg) rotateX(15deg) translateX(0) translateY(10px)';
			}
			else if ( scroll < (position2 + (sections*2)) ) {
				document.getElementById("image2").style.transform = 'perspective(400px) rotateY(-20deg) rotateX(0deg)  translateX(10px) translateY(0)';
			}
			else if ( scroll < (position2 + (sections*3)) ) {
				document.getElementById("image2").style.transform = 'perspective(400px) rotateY(0deg) rotateX(-15deg) translateX(0) translateY(-10px)';
			}
			else if ( scroll < (position2 + (sections*4)) ) {
				document.getElementById("image2").style.transform = 'perspective(400px) translateX(0px) translateY(0) rotate3d(0, 0, 1, -45deg)';
			}
		}
	}
	// End animation Services Donuts //


	// ANIMACION DE LOS PRODUCTOS
	function animationProducts(){
		let scroll = window.pageYOffset;
		let position = ($('.products').position()).top;
		let height = window.innerHeight;


		if (scroll >= position) {
			$('#products .title').addClass('fixed');
			$('#products #pdt1').addClass('fixed');
		}
		else {
			$('#products .title').removeClass('fixed');
			$('#products #pdt1').removeClass('fixed');
		}

		if (scroll >= (position + height - 48) ) {
			$('#products #pdt2').addClass('fixed');
		}
		else {
			$('#products #pdt2').removeClass('fixed');
		}

		if (scroll >= (position + (height * 2) - 48) ) {
			$('#products #pdt3').addClass('fixed');
		}
		else {
			$('#products #pdt3').removeClass('fixed');
		}

		if (scroll >= (position + (height * 3) - 48) ) {
			$('#products .title').addClass('down');
			$('#products #pdt1').addClass('down');
			$('#products #pdt2').addClass('down');
			$('#products #pdt3').addClass('down');
			$('#products #pdt4').addClass('fixed');
		}
		else {
			$('#products .title').removeClass('down');
			$('#products #pdt1').removeClass('down');
			$('#products #pdt2').removeClass('down');
			$('#products #pdt3').removeClass('down');
			$('#products #pdt4').removeClass('fixed');
		}
	}
	// End animation Products //

	// ANIMACION DEL FONDO DE DONAS
	function animationParallaxDonuts(){
		let position = ($('.parallax2').position()).top;
		position -= height;

		let scroll = $(this).scrollTop();

		if (scroll >= position && scroll < (position + height + 400) ) {
			let position2 = (scroll - position );
			
			position2 = width - (position2 * 2);

			$('.parallax2 #background').css({
				'left': position2 + 'px'
			})
		}
	}
	// End animation Parallax Donuts //


	// ANIMACION DEL FORMULARIO DE CONTACTO
	function formFocus(e) {
		let position = $(this).position().top;
		medidaImagen = 70;
		medidaImagen /=4;

		$('#img2').css({
			'top': (position - medidaImagen) + 'px',
			'left': '5px'
		})
	}
	$('.contact_form input, .contact_form textarea').focus(formFocus);

	function formBlur(e) {
		$('#img2').css({
			'top': '-30px',
			'left': '-30px'
		})
	}
	$('.contact_form input, .contact_form textarea').blur(formBlur);
	// End animation Contact Us Form //
});