// the search bar slide down or collapse up while clicking search icon 
$(document).ready(function(){
	$('#searchIcon').click(function(){
		$('.search-bar').toggle('slide',{direction:'up'},200);
		if($('.side-menu').is(':visible')){
			$('.side-menu').toggle('slide',{direction:'right'},200);
		}
		
	});
});

// the side menu slide to left or back while clicking hamburger menu icon
$(document).ready(function(){
	$('#menuIcon').click(function(){
		$('.side-menu').toggle('slide',{direction:'right'},200);
		if($('.search-bar').is(':visible')){
			$('.search-bar').toggle('slide',{direction:'up'},200);
		}
	});
});


$(document).ready(function(){
	$('nav').children('a').click(function(){
		var category = $(this).text();
		$('.category-name').text(category);//change the category title
	});
});
