(function ($) {
  "use strict";

  // offcanvas-js
  $('.offcanvas-open').click(function() {
    $('.offcanvas-menu').addClass('active');
    $('.offcanvas-overlay').addClass('active');
  });
  $('.offcanvas-menu a').click(function() {
    $('.offcanvas-menu').removeClass('active');
    $('.offcanvas-overlay').removeClass('active');
  });
  $('.close-offcanvas').click(function() {
    $('.offcanvas-menu').removeClass('active');
    $('.offcanvas-overlay').removeClass('active');
  });
  $(document).mouseup(function(e){
    var container = $(".offmenu");
  
    // If the target of the click isn't the container
    if(!container.is(e.target) && container.has(e.target).length === 0){
      $('.offcanvas-menu').removeClass('active');
      $('.offcanvas-overlay').removeClass('active');
    }
  });


  // owl-carousel
  $('.collection-top-slider-active').owlCarousel({
    loop:true,
    margin:31,
    stagePadding: 50,
    autoWidth: true,
    autoplay: true,
    autoplayTimeout: 2500,
    autoplaySpeed: 1000,
    smartSpeed: 6000,
    autoplayHoverPause: true,
    nav:false,
    dots:false,
    navText: ['<span class="fas fa-chevron-left fa-2x"></span>','<span class="fas fa-chevron-right fa-2x"></span>'],
    responsive:{
      0:{
        margin: 12,
      },
      991:{
        margin: 15,
      },
      1199:{
        
      }
  }
  });

  $('.collection-full-slider-active').owlCarousel({
    loop:true,
    margin:31,
    responsiveClass:true,
    autoWidth: true,
    autoplay: true,
    autoplayTimeout: 2500,
    autoplaySpeed: 1000,
    smartSpeed: 6000,
    autoplayHoverPause: true,
    nav:false,
    dots:false,
    navText: ['<span class="fas fa-chevron-left fa-2x"></span>','<span class="fas fa-chevron-right fa-2x"></span>'],
    responsive:{
      0:{
        margin: 12,
      },
      991:{
        margin: 15,
      },
      1199:{
        
      }
  }
  });


})(jQuery);




$(document).ready(function(){

  // scroll up
  $(function(){
    $.scrollUp();
  });


  // preloader
  $("#preloader").fadeOut(500);

})











