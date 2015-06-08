
	/*$('#hamburger').on('click', function() {
		$('#menu').show();
		$('#container').hide();
	}); */

	$("#hamburger").click(function() {
		$("#container").toggle();
		$("#menu").toggle();
		$("body").css('background-color','#fff');
	});
