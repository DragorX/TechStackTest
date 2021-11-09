document.addEventListener("DOMContentLoaded", function () {
	$('body').on('click', '.menu-mobile-triger', function (event) {

		if ($(this).hasClass('open')) {
			$('nav').hide('fast');
			$(this).removeClass('open');
			// $('header').removeClass('color');
			// $('body').css('overflow', 'auto');
		} else {
			$('nav').show('fast');
			$(this).addClass('open');
			// $('header').addClass('color')
			// $('body').css('overflow', 'auto ');
		}
	});

// $('.section-head').slick({
// 		dots: false,
// 		infinite: true,
// 		autoplay: true,
// 		autoplaySpeed: 4000,
// 		speed: 500,
// 		slidesToShow: 1,
// 		arrows: false,
// 		asNavFor: '.head_text_holder'
// 	});


// $('.head_text_holder').slick({
// 	dots: true,
// 	infinite: true,
// 	autoplay: true,
// 	fade: true,
// 	autoplaySpeed: 4000,
// 	speed: 500,
// 	slidesToShow: 1,
// 	arrows: false,
// 	asNavFor: '.section-head',
// 	appendDots: $('.slick-dots-custom')
// });

	// var leftArrow = '<button type="button" class="slick-prev"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M7.11053 17.2486L21.3509 31.4888C21.6803 31.8184 22.12 32 22.5888 32C23.0576 32 23.4973 31.8184 23.8266 31.4888L24.8753 30.4403C25.5577 29.7572 25.5577 28.6468 24.8753 27.9647L12.9173 16.0066L24.8886 4.03535C25.218 3.70573 25.3998 3.26632 25.3998 2.79777C25.3998 2.3287 25.218 1.88929 24.8886 1.5594L23.8399 0.511216C23.5103 0.181592 23.0709 1.2346e-06 22.602 1.19362e-06C22.1332 1.15264e-06 21.6936 0.181592 21.3642 0.511215L7.11053 14.7644C6.78038 15.095 6.59905 15.5365 6.60009 16.0059C6.59905 16.477 6.78038 16.9182 7.11053 17.2486Z" fill="#26472D"/></g><defs><clipPath id="clip0"><rect width="32" height="32" fill="white" transform="translate(32 32) rotate(-180)"/></clipPath></defs></svg></button>';
	// var rightArrow = '<button type="button" class="slick-next"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M24.8895 14.7514L10.6491 0.511215C10.3197 0.181592 9.88003 0 9.41122 0C8.94241 0 8.50274 0.181592 8.17338 0.511215L7.12467 1.55966C6.44227 2.24284 6.44227 3.35321 7.12467 4.03535L19.0827 15.9934L7.1114 27.9646C6.78204 28.2943 6.60019 28.7337 6.60019 29.2022C6.60019 29.6713 6.78204 30.1107 7.1114 30.4406L8.16011 31.4888C8.48974 31.8184 8.92915 32 9.39796 32C9.86677 32 10.3064 31.8184 10.6358 31.4888L24.8895 17.2356C25.2196 16.905 25.401 16.4635 25.3999 15.9941C25.401 15.523 25.2196 15.0818 24.8895 14.7514Z" fill="#26472D"/></g><defs><clipPath id="clip0"><rect width="32" height="32" fill="white"/></clipPath></defs></svg></button>';
	// $('.slick_feedback').slick({
	// 	dots: true,
	// 	infinite: true,
	// 	speed: 300,
	// 	slidesToShow: 1,
	// 	arrows: true,
	// 	prevArrow: leftArrow,
	// 	nextArrow: rightArrow,
	// 	responsive: [
	// 		{
	// 			breakpoint: 1024,
	// 			settings: {
	// 				arrows: false
	// 			}
	// 		},
	// 	]
	// });
});
