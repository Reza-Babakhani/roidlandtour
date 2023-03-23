$(document).ready(function () {
	AOS.init();

	lightbox.option({
		resizeDuration: 200,
		wrapAround: true,
		imageFadeDuration: 250,
		alwaysShowNavOnTouchDevices: true,
		wrapAround: true,
		showImageNumberLabel: false,
	});
	$(".owl-carousel").owlCarousel({
		autoplay: false,
		rtl: true,
		center: true,
		items: 1,
		loop: true,
		margin: 10,
		responsive: {
			600: {
				items: 3,
				margin: 60,
			},
		},
		dots: false,
		nav: true,
		navText: [
			"<img src='./img/prev.png' aria-label='prev' alt='prev'>",
			"<img src='./img/next.png' aria-label='next' alt='next'>",
		],
	});
});
