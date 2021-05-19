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
    dots: false,
    infinite: true,
    speed: 300,
    autoplaySpeed: 6000,
    arrows: false,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
  });

  $('.play_img').click(function() {
    $('.video_page').addClass('active');
  });

  $('.slider_about').slick({
    dots: false,
    infinite: true,
    speed: 300,
    autoplaySpeed: 8000,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: false,    
    arrows: true,
    prevArrow: "<button class='prev slick-prev'><img class='left-arrow ' src='./assets/img/left.png' alt=''></button>",
    nextArrow: "<button class='next slick-next'><img class='right-arrow ' src='./assets/img/right1.png' alt=''></button>",
    
  });






















  


  $('.slide_for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slide_nav'
  });
  $('.slide_nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slide_for',
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    arrows: true,
    prevArrow: "<button class='prev slick-prev'><img class='left-arrow ' src='./assets/img/left.png' alt=''></button>",
    nextArrow: "<button class='next slick-next'><img class='right-arrow ' src='./assets/img/right.png' alt=''></button>",
    
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.slider_lichsu').slick({
    dots: false,
    infinite: true,
    speed: 300,
    autoplaySpeed: 6000,
    arrows: false,
    slidesToShow: 4,
    adaptiveHeight: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.slider_img').slick({
    dots: false,
    infinite: true,
    speed: 300,
    autoplaySpeed: 6000,
    arrows: true,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
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


var TabPictureView = {
    classPreview    : ".preview_img",
    elmGirdImg      : ".list_grid_img",
    elmGirdItem     : ".gird_img_item",
    elmSlidePreview : ".slider_preview_img",
    elmClosePreview : ".close_preview_img",
    slickActive     : null,

    unSlick: function(elm = null) {
        if (elm == null) {
            elm = this.slickActive;
        }
        elm.slick('unslick');
    },

    setSlick: function(elmSetSlick) {
        this.slickActive = $(elmSetSlick).slick({
            dots: true,
            slidesToShow: 1,
        });
    },

    openPreview: function(elmClick) {
        var elementPreview = $(elmClick).find(this.classPreview);
        var sliderPreview = elementPreview.find(this.elmSlidePreview);
        elementPreview.show();
        this.setSlick(sliderPreview);
    },

    closePreview : function(elmClick){
        this.unSlick();
        $(elmClick).closest(this.classPreview).hide();
    },

    setClickLibraryPicture : function(){
        $(this.elmGirdImg).on('click', this.elmGirdItem, function(e) {
            if($(e.target).hasClass(TabPictureView.classPreview) || $(e.target).closest(TabPictureView.classPreview).length > 0){
                return true;
            }
            TabPictureView.openPreview(this);
        });
        $(this.elmGirdImg).on('click', this.elmClosePreview, function() {
            TabPictureView.closePreview(this);
        });
    }
}

TabPictureView.setClickLibraryPicture();