$('.head .sub')
	.parent()
	.on('click', function () {
		$('.sub', this).slideToggle(200);
	});
$('.head .menu').on('click', function () {
	if ($('.nav').css('left') == '0px') {
		$('.nav').css('left', '-50%');
	} else {
		$('.nav').css('left', '0%');
	}
});
$(window).on('resize', function () {
	if (window.innerWidth >= 992) {
		$('.nav').attr('style', '');
	}
});
