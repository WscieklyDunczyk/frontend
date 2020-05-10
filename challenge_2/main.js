$(window).on("scroll", function () {
    if ($(window).scrollTop()) {
      $("nav").addClass("nav_scroll");
    } else {
      $("nav").removeClass("nav_scroll");
    }
  });