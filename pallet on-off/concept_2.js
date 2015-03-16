

$("#toggle").click(function() {
  var closing = $(this).hasClass('on');

  $(this).toggleClass("on");

  if((!closing && $("#menu").css('display')=='none') || (closing && $("#menu").css('display')=='block')) {
    $("#menu").slideToggle();
  }
  if((!closing && $("#menu1").css('display')=='none') || (closing && $("#menu1").css('display')=='block')) {
    $("#menu1").slideToggle();
  }
});

$(".closeMenu").click(function() {
  $(this).parent().slideToggle();
});
