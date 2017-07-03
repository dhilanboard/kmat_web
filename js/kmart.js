$(document).ready(function(){
	$('#menu-icon').click(function(){
		$(this).toggleClass('open');		
		$('.menu-items').toggle('slide', { direction: "right" }, 200);
	});
	
	$('.menu-items ul li a').click(function(event){
		$('#menu-icon').toggleClass('open');
		$('.menu-items').toggle('slide', { direction: "right" }, 200);

		$('html, body').animate({
			scrollTop: $( $.attr(this, 'href') ).offset().top
		}, 1000);
	});
	
	new jQueryCollapse($(".feature-list ul li"), {
		open: function() {
		  this.slideDown(150);
		},
		close: function() {
		  this.slideUp(150);
		},
		accordion: true
	});
	
	if(window.innerWidth <= 920) {
		var x = window.innerHeight;
		$('.header').css('height',x + 'px');
	}
	 	
});
