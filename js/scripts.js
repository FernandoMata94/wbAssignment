$('.slider').slick({
  infinite: true,
  dots: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  fade: false,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: false,
  variableWidth: true,
  prevArrow: $('.prev-slide'),
  nextArrow: $('.next-slide'),
  responsive: [
    {
      breakpoint: 580,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true
      },
    },
  ],
});



$('.burguer').click(function () {
  $('.sidemenu').toggleClass('active');
  $('.burguer').toggleClass('active');
});

//funcion para cambiar de color el nav cuando pasa la clase "ancla"
var lastScrollTop = 0;
$(window).scroll(function (e) {
  $altoportada = $('.ancla').height();
  var st = $(this).scrollTop();
  if (st > $altoportada) {
    $('nav').addClass('activo')
  } else {
    $('nav').removeClass('activo')
  }
  if ($(".responsive-menu").hasClass("activo")) {
    $('nav').addClass('scrolldown')
  }
  lastScrollTop = st;

});

/***** empieza timeline para los iconos ******/

let tmline = gsap.timeline({
  scrollTrigger: {
    trigger: ".objetivos",
    toggleActions: "play none none none",
    start: "top center"
    //markers: true
  }
});

tmline.from(".icon", {
  opacity: 0,
  scale: 0,
  duration: .8
});

tmline.from(".puntos", {
  rotation: "360",
  transformOrigin: '50% 50%',
  repeat: -1,
  duration: 15,
  ease: "linear"
});

/***** ANIMACION PARA TODa la pagina ******/

const textos = gsap.utils.toArray('.text');
textos.forEach(text => {
  gsap.from(text, {
    opacity: 0,
    y: -50,
    delay: .8,
    ease: Expo.easeOut,
    duration: 2,
    scrollTrigger: {
      trigger: text,
      toggleActions: "restart none none reverse",
      start: "top 80%",
      /*start: "top 80%",*/
      //markers:true
    }
  })
});


const underlines = gsap.utils.toArray('.underlineChild');
underlines.forEach(underline => {
  gsap.to(underline, {
    width:"95%",
    ease: Power4.easeOut,
    duration: 2,
    delay:.6,
    scrollTrigger: {
      trigger: underline,
      toggleActions: "restart none none reverse",
      start: "top 80%",
      //markers:true
    }
  })
});


//////////////////background color

gsap.utils.toArray(".color").forEach(function(elem) {

  var color = elem.getAttribute('data-color');

  ScrollTrigger.create({
    trigger: elem,
    start:'top 50%',
    end:'bottom 50%',
    onEnter: () => gsap.to('body', {backgroundColor:color}),
    onLeave: () => gsap.to('body', {backgroundColor:'white'}),
    onLeaveBack: () => gsap.to('body', {backgroundColor:'white'}),
    onEnterBack: () => gsap.to('body', {backgroundColor:color}),
    //markers:true
  });

});

//////////////////


/////////////////

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
