// Sticky Header [START]

$(document).ready(function(){

  $(window).resize(function(){
    
    var windowHeight = $(window).height();

    var ninetypercent = .95 * windowHeight;

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

//Particle JS [START]


particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 100,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});



//Particle JS [END]

});