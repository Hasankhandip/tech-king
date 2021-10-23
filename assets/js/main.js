"use strict";

    // aos animation
    AOS.init();

// preloader start
$(window).on("load", function () {
  $(".preloader")
    .delay(500)
    .animate(
      {
        opacity: "0",
      },
      500,
      function () {
        $(".preloader").css("display", "none");
      }
    );
});
// preloader end

// header-section
$(window).on("scroll", function(){
  if ($(this).scrollTop() > 150) {
    $(".header-section").addClass("active");
  } else {
    $(".header-section").removeClass("active");
  }
})

// slick slider

$(document).ready(function(){
  $('.banner-slider').slick({
    prevArrow: '<a href="#0" class="prev"><i class="fas fa-arrow-left"></i></a>',
    nextArrow: '<a href="#0" class="next"><i class="fas fa-arrow-right"></i></a>'
  });
});



// scroll-top btn start
$(window).on("scroll", function () {
  if ($(this).scrollTop() > 300) {
    $(".scroll-top").addClass("active");
  } else {
    $(".scroll-top").removeClass("active");
  }
});

$(".scroll-top").on("click", function () {
  $("html, body").animate({ scrollTop: 0 }, 500);
});
// scroll-top btn end


// magnific popup
$(document).ready(function() {
  $('.pulse-btn').magnificPopup(
    {type:'iframe'}
    );
});


// header-sidebar

$(".hdr-search-bar").on("click", function(){
  $(".header-search-bar-content").addClass("active");
  $(".header-search-bar-content-wrapper").addClass("active");
});

$(".header-search-bar-back-btn").on("click", function(){
  $(".header-search-bar-content").removeClass("active");
  $(".header-search-bar-content-wrapper").removeClass("active");
});