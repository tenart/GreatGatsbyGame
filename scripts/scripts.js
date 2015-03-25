$('.choice').click(function() {
	$('.container').fadeOut();
	var showNew = $(this).attr("next");
	$(showNew).fadeIn();
})