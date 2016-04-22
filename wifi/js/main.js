// Focalizar
$(document).ready(function(){
	$(window).resize(function(){
		var widthSize = $('body').width();
		
		if(widthSize > '840'){
			$('nav ul').css('display','block');
		}else{
			$('nav ul').css('display','none');
		}	
	});
	$(".tooltipon").popover({ trigger: "hover" });
	//Focalizar scroll
	/*
	$('.nav-scroll li a').on('click', function(){
		$('.nav-scroll li a span.circulo').removeClass('current-scroll');
		var marcar = '.' + $(this).attr('class') + ' span.circulo';
		$(marcar).addClass('current-scroll');
	})
	*/
	// Subir al inicio
	$('.subir').on('click', function(){    	
	    var focalizar = $("#inicio").position().top;
	    $('html,body').animate({scrollTop: focalizar}, 500);
	});
	// Focalizar secciones
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 800, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});
//Nav Responsive
$('.nav-responsive').on('click', function(){
	$('nav ul').slideToggle('slow');
	$('nav ul').toggleClass('abierto');
});
// Arranca slide js
$('.tooltipon').popover()
$('.modal').modal('hidden')


