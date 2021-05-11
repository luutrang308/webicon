$(document).ready(function(){
  new WOW().init();
  
  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
      $('.section_header').addClass('active');
    } else {
      $('.section_header').removeClass('active');
    }
  });

  $('.form_item img').click(function() {
    $('.form_item').toggleClass('active');
  });
  $('.form_item p').click(function() {
    $('.form_item').toggleClass('active');
  });

  $('.slider_banner').slick({
    dots: true,
    infinite: true,
    speed: 300,
    autoplaySpeed: 1200,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
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


});

