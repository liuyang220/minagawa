document.querySelector( "#nav-toggle" )
  .addEventListener( "click", function() {
    this.classList.toggle( "active" );
	$("#container").toggleClass("toggleClass-whiteBorder toggleClass-blueBorder");
	$("#menu").toggle();
	$("body").toggleClass("toggleClass-whiteBackground");
	$("#logo").toggle();
  });