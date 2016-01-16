$(document).ready(function(){

  var toggleNav = function() {
    $("input#toggle").on( "click", function() {
      $("div.image-blurbs").toggleClass("scootDown");
    });
  };

  toggleNav();

  $("div#nav-links a").on("click", function() {
    $('#toggle').attr('checked', false);
    $("div.image-blurbs").toggleClass("scootDown");
  })




}); // ends document.ready
