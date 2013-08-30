//new doc for modal
$(document).ready(function() {
	$('.button1').click(function() {
		console.log('what');
		$('.modal').addClass('active');
	})

	$('.button2').click(function() {
		// console.log('this is sooooo cool');
		// 	window.getComputedStyle(modal.get(0)).getPropertyValue("top");
		$('.modal').removeClass('active');
	})
	// var modal = $('.modal');
	// console.log(getComputedStyle(modal.get(0)).changePropertyValue("top", "4px"));
})

















