/* <![CDATA[ */
(function($){

	"use strict";

    $(document).ready(function(){

		/* Parallax Effect
		================================================== */
		$('.parallax .parallax-banner-1').parallax("50%", 0.2);
		$('.newsletter').parallax("50%", 0.2);

		/* Scroll to Main
		================================================== */
		$('.site-branding a[href*=#]').click( function(event) {

				event.preventDefault();

				$('#ut-navigation a').removeClass('selected');
				$('#ut-navigation li:first-child a').addClass('selected');

				$.scrollTo( $(this).attr('href') , 650, { easing: 'swing' , offset: -80} );

		});


		$('#ut-navigation a[href*=#]').click( function(event) {

				event.preventDefault();

				$('#ut-navigation a').removeClass('selected');
				$(this).addClass('selected');

				$.scrollTo( $(this).attr('href') , 650, { easing: 'swing' , offset: -80} );

		});


		$('#learn-more').click( function(event) {

			event.preventDefault();
			$.scrollTo( $('#your-brand') , 650, { easing: 'swing' , offset: -80} );

		});




	});

})(jQuery);

new cbpScroller( document.getElementById( 'mainsite' ) );

 /* ]]> */