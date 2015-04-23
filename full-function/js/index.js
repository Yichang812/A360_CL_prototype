$(document).ready(function(){

//the search bar slide left or back while clicking search icon
	$('#searchIcon , #closeIcon').click(function(){
		//if search bar is not visible, show it
		if($('.search-bar').position().left !== 0) {
			$('.search-bar').animate({left:'0',backgroundColor:'#116fb8'},200);
			$('#searchIcon , #closeIcon').animate({color:'white'},200);
		}else{
			$('.search-bar').animate({left:'181',backgroundColor:'white'},200);
			$('#searchIcon , #closeIcon').animate({color:'#333'},200);
		}
	});

	$('.search-bar').hover(
		//the function works only when the search bar is not visible
		function() {
			if($('.search-bar').position().left !== 0){
				$(this).css('backgroundColor', '#116fb8');
				$('#searchIcon').css('color', 'white');
			}
		},
		function(){
			if($('.search-bar').position().left !== 0){
				$(this).css('backgroundColor', 'white');
				$('#searchIcon').css('color', '#333');
			}
		});


	// the side menu slide down or back while clicking hamburger menu icon
	// the toggle function used here is from 'jquery ui' library
	$('#menuIcon').click(function(){
		$('.side-menu').toggle('slide',{direction:'up'},200,sidemenuColor);
	});

	//change the name of current view when user selected a category
	$('nav').children('a,div').click(function(){
		var category = $(this).text();
		$('.current-view').text(category);
		$('.side-menu').toggle('slide',{direction:'up'},200,sidemenuColor);
	});

	//if the side menu is shown, set the background color to be darker and the subheader to be blue
	var sidemenuColor = function(){
		if($('.side-menu').is(':visible')){
			$('.shadow').show(150,function(){
				$(this).animate({backgroundColor:'rgba(0,0,0,0.2)'})
			});
			$('.search-bar').hide();
			$('.subheader').animate({backgroundColor:'#116fb8',zIndex:'2'});
			$('.current-view,#menuIcon').animate({color:'white'});

		}else{
			$('.subheader').animate({backgroundColor:'white',zIndex:''});
			$('.current-view,#menuIcon').animate({color:'#333'});
			$('.shadow').hide();
			$('.search-bar').show();
		}
	};
});


