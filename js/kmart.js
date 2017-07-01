$(document).ready(function(){
	$('#menu-icon').click(function(){
		$(this).toggleClass('open');		
		$('.menu-items').toggle('slide', { direction: "right" }, 200);
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
	 	
});