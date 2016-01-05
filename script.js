$(document).ready(function(){

  $("ul#nav-links").hide();

  $("li#menu-icon").on("click", function(){
    $("ul#nav-links").slideToggle("fast", function(){
      $("section.image").toggleClass("moved");
    });
  });

})
