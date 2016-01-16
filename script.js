$(document).ready(function(){


  // console.log($(window).width());
  //
  // var $window = $(window);
  // if ($window.width() > 339){
  //   alert("hi!");
  // };

  // $("ul#nav-links").hide();
  //
  // $("li#menu-icon").on("click", navToggle);
  //
  // function moveMainImage(){
  //   $("section.image").toggleClass("moved");
  // };
  //
  // function navToggle(){
  //   $("ul#nav-links").slideToggle("fast", moveMainImage);
  // };

  // var $input = $("input#toggle");

  // if ("$input(:checked)") {
    // $("section.image").addClass("scootDown");
    // alert("hi")
  // }

  $("input#toggle").on( "click", function() {
    $("div.image-blurbs").toggleClass("scootDown");
  });

})
