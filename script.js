$(document).ready(function(){

  $("ul#nav-links").hide();

  $("li#menu-icon").on("click", function(){
    $("ul#nav-links").fadeToggle("fast", function(){
      $("section.image").toggleClass("moved");
    });
  });
})
