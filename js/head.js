$('.head .sub')
	.parent()
	.on('click', function () {
		$('.sub', this).slideToggle(200);
	});
