$(function () {
  "use strict"

  // Menu js start
  var navoff = $(".Menu_Part").offset().top;
  $(window).on("scroll", function () {
    var scrolling = $(this).scrollTop();
    if (scrolling > navoff) {
      $(".Menu_Part").addClass("Menu_Fixed");
    } else {
      $(".Menu_Part").removeClass("Menu_Fixed");
    }
  });


  // side content wrapper
  // $('.nav_trigger').click(function () {
  //   $('.site_content_wrapper').toggleClass('scaled_side_nav');
  // })


  // typed js start
  var typed = new Typed('#typed', {
    stringsElement: '#typed_strings'
  });

  // COUNTER UP JS START
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });

  // mixet up start
  var containerEl = document.querySelector('.Portfolio_Items_Area');
  var mixer = mixitup(containerEl);

  // VenoBox start
  $(document).ready(function () {
    $('.venobox').venobox();
  });

  // SLICK SLIDER START
  $('.Testimonial_Slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    vertical: true,
    autoplaySpeed: 2000,
    speed: 1500,
    dots: true,
    prevArrow: $('.Prev_Arrow'),
    nextArrow: $('.Next_Arrow'),
  });

  
  // BRAND SLIDER START
  $('.Brand_Item_Area').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 2000,
    arrows: false,
  });

  // PROGRESS BAR START
  $(document).ready(function () {
    const Subscribe_Section = document.querySelector('#Subscribe_Section');
    for (var i = 1; i <= 100; i++) {
      const blocks = document.createElement('div')
      blocks.classList.add('block');
      Subscribe_Section.appendChild(blocks);
    }

    function generate() {
      anime({
        targets: '.block',
        translateX: function () {
          return anime.random(-700, 700)
        },
        translateY: function () {
          return anime.random(-700, 700)
        },
        scale: function () {
          return anime.random(1, 5)
        },
      })
    }

    generate()
  });

  
  $(document).ready(function () {
    $('#bar1').barfiller({
      barColor: '#f68338'
    });
    $('#bar2').barfiller({
      barColor: '#f68338'
    });
    $('#bar3').barfiller({
      barColor: '#f68338'
    });
    $('#bar4').barfiller({
      barColor: '#f68338'
    });
    $('#bar5').barfiller({
      barColor: '#f68338'
    });
    $('#bar6').barfiller({
      barColor: '#f68338'
    });
    $('#bar7').barfiller({
      barColor: '#f68338'
    });
    $('#bar8').barfiller({
      barColor: '#f68338'
    });
  });


});