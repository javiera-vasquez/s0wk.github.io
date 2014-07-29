// Init foudnation library
$(document).foundation();

// Function of the site
$( window ).ready(function() {
    $('.progress-bar li').on('click', function(){
        $(this).toggleClass('active')
    });
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
});

// Calculate the height and width proyect hover
window.onload = function() {
    $(".overlay").css("width", $(".fixed-img").width());
    $(".overlay").css("height", $(".fixed-img").height());
    $(".progress-bar li").css("height", $(".progress-bar li").width());
};

// Resize function for the proyect hover
$( window ).resize(function() {
    $(".overlay").css("width", $(".fixed-img").width());
    $(".overlay").css("height", $(".fixed-img").height());
    $(".progress-bar li").css("height", $(".progress-bar li").width());
});

