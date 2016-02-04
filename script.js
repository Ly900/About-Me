$(document).ready(function(){

  var toggleNav = function() {
    // console.log($("input#toggle").is(":checked"));
    if ($(window).scrollTop() < 20 & $("input#toggle").is(":checked")) {
      $("div.scoot").addClass("scootDown");
    } else if ($(window).scrollTop() < 20 & !$("input#toggle").is(":checked")) {
      $("div.scoot").removeClass("scootDown");
    } else if ($(window).scrollTop() > 20 & !$("input#toggle").is(":checked")) {
      $("div.scoot").removeClass("scootDown");
    };
  }; // ends toggleNav function

  $("input#toggle").on("click", toggleNav);


 //& $("input#toggle").is(":checked")


  $("div#nav-links a").on("click", function(event) {
    $('#toggle').attr('checked', false);
    // $("div.scoot").toggleClass("scootDown");
  })




}); // ends document.ready
