$(document).ready(function() {

    // Preloader
	$(window).on('load', function() {
        $('.preloader div').fadeOut();
        $('.preloader').delay(150).fadeOut('slow');
        $('body').delay(240).css({'overflow':'visible'});
    })

	// Smooth Scroll
	$('.smoothScroll').click(function() {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top + (-60)
				}, 900);
				return false;
			}
		}
	});

});