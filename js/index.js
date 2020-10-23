console.log("Your index.js has loaded correctly! ^_^");


setTimeout(function() {
  $('.logo-background').fadeOut();
}, 3500);
setTimeout(function() {
  $('.preloader h2').fadeOut();
}, 3750);
setTimeout(function() {
  $('.preloader').fadeOut('slow');
}, 3000);
  
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

document.addEventListener("DOMContentLoaded", function() {
  var lazyloadImages;    

  if ("IntersectionObserver" in window) {
    lazyloadImages = document.querySelectorAll(".lazy");
    var imageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var image = entry.target;
          image.classList.remove("lazy");
          imageObserver.unobserve(image);
        }
      });
    });

    lazyloadImages.forEach(function(image) {
      imageObserver.observe(image);
    });
  } else {  
    var lazyloadThrottleTimeout;
    lazyloadImages = document.querySelectorAll(".lazy");
    
    function lazyload () {
      if(lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout);
      }    

      lazyloadThrottleTimeout = setTimeout(function() {
        var scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function(img) {
            if(img.offsetTop < (window.innerHeight + scrollTop)) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
            }
        });
        if(lazyloadImages.length == 0) { 
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
      }, 20);
    }

    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
  }
})