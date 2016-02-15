$(function () {

	// Task1 HomeWork_7_8 

	var $tabs = $('.tabs_items');
	var $tabsContent = $('.tabs_content')
	
	$tabs.on('click', function(e) {
		$tabs.removeClass('tabs_items_selected').eq($(this).index()).addClass('tabs_items_selected');
		e.preventDefault();
		// $tabsContent.removeClass('tabs_content_selected').eq($(this).index()).addClass('tabs_content_selected');
		$tabsContent.hide().eq($(this).index()).show();	
	});

	// Task1 HomeWork_7_8

	var $textArea = $('.form_field_block');
	var $advice = $('.advice_item');

	
	
		$textArea.hover(
			   function() {
			     var elNum = $textArea.index(this);
			    $advice.eq(elNum).show(); 	
			     
			   }, 
			   function() {
			     var elNum = $textArea.index(this);
			    $advice.eq(elNum).hide(); 
			   });
		
	    
	var $submit = $('.button')

	$submit.on('click', function() {
		$advice.show();
	});

});


