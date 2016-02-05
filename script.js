$(document).ready(function(){

  var removeScoot = function() {
    $("div.scoot").removeClass("scootDown");
  }

  var navLinkClick = function() {
    $("div#nav-links a").on("click", function(event) {
      $('#toggle').attr('checked', false);
      removeScoot();
    });
  }

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
    navLinkClick();
  }; // ends toggleNav function

  $("input#toggle").on("click", toggleNav);






}); // ends document.ready
