// PRELOADER
$(window).on('load', function () {
	$('#preloader').delay(500).fadeOut('slow', function () {
		$(this).remove();
	});
});


$(document).ready(function() {
	
	// AMINACION DE MUEBLES
	let modelos = ['modelo1','modelo2','modelo3'];
	let modelo = 0;

	setTimeout(function(){
		$('#'+ modelos[modelo]).addClass('hidden');
		modelo++;
		$('#'+ modelos[modelo]).removeClass('hidden');
	}, 1000);

	let intervalo = setInterval(() => {
		$('#'+ modelos[modelo]).addClass('hidden');
		modelo++;

		if (modelo > 2) {
			modelo = 0;
			$('#'+ modelos[modelo]).removeClass('hidden');
		} else {
			$('#'+ modelos[modelo]).removeClass('hidden');

		}
	}, 3000);


	// MOSTRAR/OCULTAR BOTON DE WHATSAPP
	$(window).scroll(function(){
		if ($(this).scrollTop() > 800) {
			$('#whatsapp').removeClass('hidden');
		} else {
			$('#whatsapp').addClass('hidden');
		}
	});
});