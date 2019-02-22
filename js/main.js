jQuery(document).ready(function() {
	$('.search__input').on('focusin', function(){
		$('.search__button').addClass('search__button_active');
	});

	$('.search__input').on('focusout', function(){
		if($("#search").val()) {
			$('.search__button').addClass('search__button_active');
  		} else {
  			$('.search__button').removeClass('search__button_active');
  		}
	});

	$('.slider_big').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: true,
		swipe: false,
	});

	$('.slider_small').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		autoplay: true,
		autoplaySpeed: 3000,
		fade: true,
	});

	$('.wish__slider').slick({
		infinite: true,
		slidesToShow: 6,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		autoplay: true,
		autoplaySpeed: 3000,
	});

	$('.news__slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		fade: true,
		autoplay: true,
		autoplaySpeed: 3000,
	});

});

