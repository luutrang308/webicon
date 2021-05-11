$(document).ready(function(){
  new WOW().init();
  /* site35_head_col0_icon */
  $('.open_form').click(function() {
    $('.form_search').toggleClass('active')
  })

  $('.icon_open_menu').click(function() {
    $('.section_header').toggleClass('active')
  })

  $('.slider_banner').slick({
    dots: true,
    infinite: true,
    speed: 300,
    autoplaySpeed: 6000,
    arrows: false,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
  });

  $('.slider_categories').slick({
    dots: false,
    infinite: true,
    speed: 300,
    autoplaySpeed: 8000,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,    
    arrows: true,
    prevArrow: "<button class='prev slick-prev'><img class='left-arrow ' src='./assets/img/left.png' alt=''></button>",
    nextArrow: "<button class='next slick-next'><img class='right-arrow ' src='./assets/img/right.png' alt=''></button>",
    
  });

  $(window).scroll(function(){
    if ($(this).scrollTop() > 500) {
      $('.backtotop').fadeIn();
    } else {
      $('.backtotop').fadeOut();
    }
  });
  $('.backtotop').click(function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
  });

  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
      $('.site35_head_col0_icon').addClass('active');
    } else {
      $('.site35_head_col0_icon').removeClass('active');
    }
  });














  
  

  $('.form_item img').click(function() {
    $('.form_item').toggleClass('active');
  });
  $('.form_item p').click(function() {
    $('.form_item').toggleClass('active');
  });

  

  


});

