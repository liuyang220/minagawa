/*document.querySelector( "#nav-toggle" )
  .addEventListener( "click", function() {
    this.classList.toggle( "active" );
	$("#menu").toggle();
	$("body").toggleClass("toggleClass-whiteBackground");
	$("#logo").toggle();
	$("h1,hr,#content,#footer").toggle();
  });

  var select = function() {
  	$('.all').click(function() {
  		$('.projects-branding, .projects-print, .projects-motion, .projects-web').show();
  	});

  	$('.branding').click(function() {
  		$('.projects-web, .projects-print, .projects-motion').hide();
  	});

  	$('.web').click(function() {
  		$('.projects-branding, .projects-print, .projects-motion').hide();
  	});

  	$('.print').click(function() {
  		$('.projects-branding, .projects-web, .projects-motion').hide();
  	});

	$('.motion').click(function() {
	  		$('.projects-branding, .projects-print, .projects-web').hide();
	  	});
  };

  $(document).ready(select);*/

  document.querySelector( "#nav-toggle" )
  .addEventListener( "click", function() {
    this.classList.toggle( "active" );
	$("#menu").toggle();
	$("body").toggleClass("toggleClass-whiteBackground");
	$("#logo").toggle();
	$("h1,hr,#content,#footer").toggle();
  });

  var select = function() {
  	$('.all').click(function() {
  		$('.projects-branding, .projects-print, .projects-motion, .projects-web').show();
  	});

  	$('.branding').click(function() {
  		$('.projects-branding, .projects-print, .projects-motion, .projects-web').show();
  		$('.projects-web, .projects-print, .projects-motion').hide();
  	});

  	$('.web').click(function() {
  		$('.projects-branding, .projects-print, .projects-motion, .projects-web').show();
  		$('.projects-branding, .projects-print, .projects-motion').hide();
  	});

  	$('.print').click(function() {
  		$('.projects-branding, .projects-print, .projects-motion, .projects-web').show();
  		$('.projects-branding, .projects-web, .projects-motion').hide();
  	});

	$('.motion').click(function() {
			$('.projects-branding, .projects-print, .projects-motion, .projects-web').show();
	  		$('.projects-branding, .projects-print, .projects-web').hide();
	  	});
  };

  $(document).ready(select);