$(function() {
  $(window).on("scroll", function() {
    if($(window).scrollTop() > 110) {
      $(".directory").addClass("active");
    } else {
      $(".directory").removeClass("active");
    }
  });
});
