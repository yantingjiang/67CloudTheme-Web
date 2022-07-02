$(function () {
	$('.row3 .item .title').on('click', function () {
		$(this).toggleClass('open').next().slideToggle(200);
	});
	$('.row3 .item .content').on('click', function () {
		navigator.clipboard.writeText($(this).text());
		layui.layer.msg('命令已复制到剪切板');
	});
});
