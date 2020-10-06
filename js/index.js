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

(function ($) {
    $(function () {
        $('nav ul li > a:not(:only-child)').click(function (e) {
            $(this).siblings('.nav-dropdown').toggle();
            $('.nav-dropdown').not($(this).siblings()).hide();
            e.stopPropagation()
        });
        $('html').click(function () {
            $('.nav-dropdown').hide();
        });
        $('#nav-toggle').on('click', function () {
            this.classList.toggle('active') 
        });
        $('#nav-toggle').click(function () {
            $('nav ul').toggle()
        });
    })
})(jQuery);