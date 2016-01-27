$(function () {
	$('.popup_close').on('click', function (e) {
		$('.overlay').hide();
		$('.popup').hide();
	});
	$('.button_zoom').on('click', function (e) {
		$('.overlay').show();
		$('.popup').show();
	});
});