!(function($) {
  "use strict";
var home = true;

  // Check if mobile
  if (Modernizr.touch) { 
    $('.social-links').removeClass('hoverable').addClass('nohover');
    $('.repo').removeClass('hoverable').addClass('nohover');
  } else { 
    console.log('hoverable');
     $('.social-links').addClass('hoverable').removeClass('nohover');
     $('.repo').addClass('hoverable').removeClass('nohover');
  }

  // Nav Menu
  $(document).on('click', '.nav-menu a, .mobile-nav a', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var hash = this.hash;
      var target = $(hash);
      if (target.length) {
        e.preventDefault();

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if (hash == '#header') {
          $('.credits').fadeIn(200); home = true;
          $('#header').removeClass('header-top');
          $("section").removeClass('section-show');
          if ($('body').hasClass('mobile-nav-active')) {
            $('body').removeClass('mobile-nav-active');
            $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
            $('.mobile-nav-overly').fadeOut();
          }
          return;
        }
        else{
          $('.credits').fadeOut(200);
          home = false;
        }

        if (!$('#header').hasClass('header-top')) {
          $('#header').addClass('header-top');
          setTimeout(function() {
            $("section").removeClass('section-show');
            $(hash).addClass('section-show');

          }, 350);
        } else {
          $("section").removeClass('section-show');
          $(hash).addClass('section-show');
        }

        $('html, body').animate({
          scrollTop: 0
        }, 350);

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }

        return false;

      }
    }
  });

  // Change header opacity on scroll
  $(document).scroll(()=>{
    if(document.scrollingElement.scrollTop != 0){
        $('header').removeClass('opacity95');
        if(!$('header').hasClass('opacity100')){
      $('header').addClass('opacity100');
    }

    }
    else{
      $('header').removeClass('opacity100');
      if(!$('header').hasClass('opacity95')){
      $('header').addClass('opacity95');
    }
    }
  });

  // Show contact
  var emailShown = false;
  $('.email').click(()=>{
    if(!emailShown){
    document.querySelector('.email').innerHTML = '<i class="icofont-mail-box"></i><span>ZZ66[at]rice.edu</span></a>';
    emailShown = true;
    }
    else{
    document.querySelector('.email').innerHTML = '<i class="icofont-mail-box"></i><span>Email</span></a>';
    emailShown = false;
    }
  });

  // Activate/show sections on load with hash links
  if (window.location.hash) {
    var initial_nav = window.location.hash;
    if ($(initial_nav).length) {
      $('#header').addClass('header-top');
      $('.nav-menu .active, .mobile-nav .active').removeClass('active');
      $('.nav-menu, .mobile-nav').find('a[href="' + initial_nav + '"]').parent('li').addClass('active');
      setTimeout(function() {
        $("section").removeClass('section-show');
        $(initial_nav).addClass('section-show');
      }, 350);
    }
  }

  // Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none" id="mobile-menu-btn"><i class="icofont-navigation-menu"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $('#mobile-menu-btn').click(()=>{
      if($('.credits').is(":visible")){
        $('.credits').hide();
        //$('.credits').fadeOut(200);
      }
      else if(home){
        //$('.credits').fadeIn(200);
        $('.credits').show();
      }
    });

    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      $('.mobile-nav-overly').toggle();
    });

    $(document).click(function(e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

})(jQuery);

 