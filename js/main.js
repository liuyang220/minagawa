document.querySelector( "#nav-toggle" )
  .addEventListener( "click", function() {
    this.classList.toggle( "active" );
	$("#menu").toggle();
	$("body").toggleClass("toggleClass-whiteBackground");
	$("#logo").toggle();

	$("h1,hr,#content,#footer").toggle();	/*about me*/
  });