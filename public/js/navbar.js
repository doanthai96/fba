$('.toggle').on('click', function() {
  $('.menu').toggleClass('expanded');  
  $('span').toggleClass('hidden');  
  $('.container1 , .toggle').toggleClass('close');  
  setInterval(function(){ 
	  $('.body1').removeClass("body1--before");
	  $('.body1').css({"min-height": 0, "background-color":"white"});
	  setInterval(function(){ 
	  	$('.menu').addClass("fixed");
	  	$('.header').css({"margin-top": "87.75px"});
	  }, 500);
   }, 1000);

});