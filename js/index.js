console.log("Your index.js has loaded correctly! ^_^");

$(document).ready(function(){
    $("#orchids").hover(function(){
        $("#orchid-reveal").css("opacity","100%");
    },
    function(){
        $("#orchid-reveal").css("opacity","0%")
    });
});

$(document).ready(function(){
    $("#paint").hover(function(){
        $("#paint-reveal").css("opacity","100%");
    },
    function(){
        $("#paint-reveal").css("opacity","0%")
    });
});

$(document).ready(function(){
    $("#cat").hover(function(){
        $("#cat-reveal").css("opacity","100%");
    },
    function(){
        $("#cat-reveal").css("opacity","0%")
    });
});

$(window).scroll(function(){
    $(".bounce").css("opacity", 1 - $(window).scrollTop() / 250); 
  });