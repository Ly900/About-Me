$(document).ready(function(){

  var toggleNav = function() {
    var scrollTop = $(window).scrollTop();
    var inputChecked = $("input#toggle").is(":checked");
    var $divScoot = $("div.scoot");
    if (scrollTop < 20 & inputChecked) {
      $divScoot.addClass("scootDown");
    } else if (scrollTop < 20 & !inputChecked) {
      $divScoot.removeClass("scootDown");
    } else if (scrollTop > 20 & !inputChecked) {
      $divScoot.removeClass("scootDown");
    };
  }; // ends toggleNav function

  $("input#toggle").on("click", toggleNav);

 //& $("input#toggle").is(":checked")


  $("div#nav-links a").on("click", function(event) {
    $('#toggle').attr('checked', false);
    // $("div.scoot").toggleClass("scootDown");
  })




}); // ends document.ready
