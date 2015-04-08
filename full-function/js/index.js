// the search bar slide down or collapse up while clicking search icon
$(document).ready(function(){

	//the search bar slide left or back while clicking search icon
	$('#searchIcon , #closeIcon').click(function(){
		if($('.search-bar').position().left > 0) {
			$('.search-bar').animate({left:'0',backgroundColor:'#d3e5f2'},200);
			$('#searchIcon , #closeIcon').animate({color:'#217cbc'},200);
		}else{
			$('.search-bar').animate({left:'181',backgroundColor:'white'},200);
			$('#searchIcon , #closeIcon').animate({color:'#333'},200);
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

});

//if the side menu is shown, set the background color to be darker and the subheader to be blue
var sidemenuColor = function(){
	if($('.side-menu').is(':visible')){
		$('.shadow').show(150,function(){
			$(this).animate({backgroundColor:'rgba(0,0,0,0.2)'})
		});
		$('.subheader').animate({backgroundColor:'#d3e5f2'});
	}else{
		$('.subheader').animate({backgroundColor:'white'});
		$('.shadow').hide();
	}
};


//hightlight current view in the side menu

// var category = $('nav').children('a,div');
// for(var i = 0; i<category.length ; i++){
// 	if (category[i].text()==$('.current-view').text()){
// 		category[i].css('backgroundColor':'#d3e5f2');
// 	}
// }
