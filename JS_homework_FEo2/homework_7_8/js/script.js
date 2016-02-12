$(function () {
	var $tabs = $('.tabs_items');
	var $tabsContent = $('.tabs_content')
	$tabs.on('click', function(e) {
		$tabs.removeClass('tabs_items_selected').eq($(this).index()).addClass('tabs_items_selected');
		e.preventDefault();
		$tabsContent.hide().eq($(this).index()).addClass('tabs_content_selected');
	});
});


