$(document).ready(function(){

  var aboutMePage = (function() {

    function removeScoot() {
      $("div.scoot").removeClass("scootDown");
    };

    function navLinkClick() {
      $("div#nav-links a").on("click", function(event) {
        $('#toggle').attr('checked', false);
        removeScoot();
      });
    };

    function toggleNav() {
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

    var makeSkillBubbles = {
      skills:
      [
      "HTML5",
      "CSS3",
      "SASS",
      "Bootstrap",
      "Javascript",
      "JQuery",
      "Ajax",
      "Angular",
      "Git",
      "Github",
      "Ruby",
      "Rails",
      "SQL",
      "MongoDB",
      "PostgresQL",
      "Node.js",
      "Express",
      "Java",
      "Photoshop CC",
      "Liquid",
      "Shopify"
      ],
      makeBubbles: function() {
        for (var i = 0; i < makeSkillBubbles.skills.length; i++) {
          var skill = "<li>" + this.skills[i] + "</li>";
          $("ul.skills").append(skill);
        }
      }
    }

    makeSkillBubbles.makeBubbles();

})();

}); // ends document.ready
