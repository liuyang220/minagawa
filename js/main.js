document.querySelector( "#nav-toggle" )
  .addEventListener( "click", function() {
    this.classList.toggle( "active" );
	$("#menu").toggle();
	$("body").toggleClass("toggleClass-whiteBackground");
	$("#logo").toggle();
  });