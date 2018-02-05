// Stick Header [START]

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

//Sticky Header [END]

//User Skill Lines [START]

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    var aboutSection = $("#about");
    var aboutPosition = aboutSection.offset().top;
    if (scroll >= aboutPosition) {
        $("#skill-line1").removeClass("skill-less");
    } else {
        $("#skill-line1").addClass("skill-less");
    }
});

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    var aboutSection = $("#about");
    var aboutPosition = aboutSection.offset().top;
    if (scroll >= aboutPosition) {
        $("#skill-line2").removeClass("skill-less");
    } else {
        $("#skill-line2").addClass("skill-less");
    }
});

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    var aboutSection = $("#about");
    var aboutPosition = aboutSection.offset().top;
    if (scroll >= aboutPosition) {
        $("#skill-line3").removeClass("skill-less");
    } else {
        $("#skill-line3").addClass("skill-less");
    }
});

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    var aboutSection = $("#about");
    var aboutPosition = aboutSection.offset().top;
    if (scroll >= aboutPosition) {
        $("#skill-line4").removeClass("skill-less");
    } else {
        $("#skill-line4").addClass("skill-less");
    }
});

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    var aboutSection = $("#about");
    var aboutPosition = aboutSection.offset().top;
    if (scroll >= aboutPosition) {
        $("#skill-line5").removeClass("skill-less");
    } else {
        $("#skill-line5").addClass("skill-less");
    }
});

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    var aboutSection = $("#about");
    var aboutPosition = aboutSection.offset().top;
    if (scroll >= aboutPosition) {
        $("#skill-line6").removeClass("skill-less");
    } else {
        $("#skill-line6").addClass("skill-less");
    }
});

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    var aboutSection = $("#about");
    var aboutPosition = aboutSection.offset().top;
    if (scroll >= aboutPosition) {
        $("#skill-line7").removeClass("skill-less");
    } else {
        $("#skill-line7").addClass("skill-less");
    }
});

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    var aboutSection = $("#about");
    var aboutPosition = aboutSection.offset().top;
    if (scroll >= aboutPosition) {
        $("#skill-line8").removeClass("skill-less");
    } else {
        $("#skill-line8").addClass("skill-less");
    }
});

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    var aboutSection = $("#about");
    var aboutPosition = aboutSection.offset().top;
    if (scroll >= aboutPosition) {
        $("#skill-line9").removeClass("skill-less");
    } else {
        $("#skill-line9").addClass("skill-less");
    }
});

//LinK Smooth Scrolling [START]

$("a").on('click', function(event) {

    if (this.hash !== "") {

      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 850, function(){
   
          window.location.hash = hash;
      });
    }


  });

//LinK Smooth Scrolling [END]



});