$(document).ready(function() {


    $('.news-slider--enter').slick({
        dots: false,
        infinite: true,
        speed: 900,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow:"<button type='button' class='slick-prev pull-left sbtn'></button>",
        nextArrow:"<button type='button' class='slick-next pull-right sbtn'><span></span><span></span><span></span></button>",
        responsive: [
          {
            breakpoint: 970,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              // infinite: true,
              // dots: true
            }
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              // infinite: true,
              // dots: true
            }
          },
        ]
    });


    
    $('.green-sl-enter').slick({
      dots: false,
      infinite: true,
      speed: 900,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      prevArrow:"<button type='button' class='slick-prev pull-left sbtn'></button>",
      nextArrow:"<button type='button' class='slick-next pull-right sbtn'><span></span><span></span><span></span></button>",
    })


})