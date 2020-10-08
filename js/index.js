console.log("Your index.js has loaded correctly! ^_^");

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

if ($(window).width() <= 700) {
    $(document).ready(function() {
        $(window).scroll(function() {
            $(".container").each(function(i){
                var bottom_of_object = $(this).position().top + $(this).outerHeight();
                var bottom_of_window = $(window).scrollTop() + $(window).height();
                if( bottom_of_window <= bottom_of_object){
                    $(this).animate({"opacity" : "1"}, 1000)
                }
            });
        });
    });
    }else{
    $(document).ready(function() {
        $(window).scroll(function(){
            $(".container").each(function(i){
                var bottom_of_object = $(this).position().top + $(this).outerHeight();
                var bottom_of_window = $(window).scrollTop() + $(window).height();
                if( bottom_of_window > bottom_of_object){
                    $(this).animate({"opacity" : "1"}, 1000)
                } 
            });
        });
    }); 

    $(window).scroll(function(){
        $("#arrow1").css("opacity", 1 - $(window).scrollTop()  / 500);
        $("#hero").css("opacity", 1 - $(window).scrollTop()  / 500);  
        $("#arrow2").css("opacity", 2.05 - $(window).scrollTop() / 500);
    });
};