$(document).ready(function(){

  $("ul#nav-links").hide();

  $("ul#menu-icon").on("click", function(){
    $("ul#nav-links").fadeToggle("fast", function(){

    });
  });


})
