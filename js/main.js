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


$(document).ready(function() {
	// ANIMACION DEL BOTON DE SUBIR
	$(window).scroll(function(){
		if ($(this).scrollTop() > 500) {
			$('#btn_up').addClass('active');
		} else {
			$('#btn_up').removeClass('active');
		}
	});


	// ANIMACION DEL SCROLL 
	// ANIMACION DEL SCROLL 
	$('#btn_up').click(ScrollAnimation);

	function ScrollAnimation(e){
		e.preventDefault();
		var ancla = $(this).attr('href');
		ancla = ancla.substring(1);
		var position = $('#'+ancla).position();
		$('html, body').animate({scrollTop: (position.top)},  1500, 'easeInOutExpo');
	}


	// COMPROBAR CAMPOS VACIOS DEL FORMULARIO
	document.getElementById("form_contact").addEventListener('submit', function(e){
		e.preventDefault();
		let	name = document.getElementById('name').value;
		let	email = document.getElementById('email').value;
		let	message = document.getElementById('message').value;

		name = name.trim();
		email = email.trim();
		message = message.trim();

		if (name !== '' && email !== '' && message !== '') {
			document.getElementById("form_contact").submit();
		} else {
			if (name === '') {
				document.getElementById("name").classList.add('wrong');
			} else {
				document.getElementById("name").classList.remove('wrong');
			}
			if (email === '') {
				document.getElementById("email").classList.add('wrong');
			} else {
				document.getElementById("email").classList.remove('wrong');
			}
			if (message === '') {
				document.getElementById("message").classList.add('wrong');
			} else {
				document.getElementById("message").classList.remove('wrong');
			}
		}
	});
});