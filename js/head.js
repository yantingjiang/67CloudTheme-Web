$(function () {
	$('.sub-menu')
		.parent()
		.on('click', function (event) {
			event.target.matches('.menu>li') && $('.sub-menu', this).slideToggle(200);
		});
	$('#open_menu').on('click', function () {
		$('.head .menu').css('box-shadow', '1px 1px 50px rgba(0, 0, 0, 0.25)').css('left', '0%');
		$('#shade').show().css('opacity', '0.3');
	});
	$('#close_menu').on('click', function () {
		$('.head .menu').css('box-shadow', '').css('left', '-50%');
		$('#shade').hide().css('opacity', '0');
	});
	$('#shade').on('click', function () {
		$('#close_menu').click();
	});
	$(window).on('resize', function () {
		if (window.innerWidth > 767) {
			$('.head .menu').attr('style', '');
			$('#shade').attr('style', '');
		}
	});
});
