$(document).ready(function(){

  $("ul#nav-links").hide();

  $("ul#brand-and-icon").on("click", function(){
    $("ul#nav-links").fadeToggle("fast", function(){
      $("section.first").toggleClass("image");
    });
  });


})
