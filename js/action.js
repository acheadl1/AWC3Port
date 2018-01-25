$(document).ready(function(){

  $(window).resize(function(){
    
    var windowHeight = $(window).height();

    var ninetypercent = .9 * windowHeight;

    $(document).scroll(function(){
      
      var y = $(this).scrollTop();
      
      if( y > ninetypercent) {
        
        $('#nav').addClass('navTop');
      } else {
        $('#nav').removeClass('navTop');
      }
    });

  }).resize();
  
});