$(function () {
	$('#about').on('click', function (event) {
		event.target.matches('#about') && $('.content', this).toggleClass('show');
	});
});
