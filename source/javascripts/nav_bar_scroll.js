$(document).ready(function() {
  // navbar transition jQuery script
  $(window).scroll(function(e){
    if ($(this).scrollTop() > 500) {
      $(".navbar").css({
        "margin-top": "-70px"
      });
    }
    else {
      $(".navbar").css({
        "margin-top": "0px"
      });
    }
  });
});
