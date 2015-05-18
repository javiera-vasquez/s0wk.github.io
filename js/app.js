
// Init foudnation library
$(document).foundation();

// Function of the site
$( window ).ready(function() {
    $('.progress-bar li').on('click', function(){
        $(this).toggleClass('active');
    });
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
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
    $(".overlay-12, .over-image").css("width", $(".fixed-img-12").width());
    $(".overlay-12, .over-image").css("height", $(".fixed-img-12").height());
    $(".progress-bar li").css("height", $(".progress-bar li").width());
    $("#iphone").fadeIn(500);
};

// Resize function for the proyect hover
$( window ).resize(function() {
    $(".overlay").css("width", $(".fixed-img").width());
    $(".overlay").css("height", $(".fixed-img").height());
    $(".overlay-12, .over-image").css("width", $(".fixed-img-12").width());
    $(".overlay-12, .over-image").css("height", $(".fixed-img-12").height());
    $(".progress-bar li").css("height", $(".progress-bar li").width());
});

// board = 52f3feeb07e6f51c53f7ea4d
// key = 6e3df77c1f05d93cb5afa32ed468ce98
// token = 8233ec2524d1c48fcb44ac6c4371289d8e4418b5b64e42837ffb922ad2956eb0

// (function() {
//   var trelloApi = "https://api.trello.com/1/boards/4eea4ffc91e31d1746000046/url?key=6e3df77c1f05d93cb5afa32ed468ce98&token=8233ec2524d1c48fcb44ac6c4371289d8e4418b5b64e42837ffb922ad2956eb0";
//   $.getJSON( trelloApi, {
//     format: "json"
//   })
//     .done(function( data ) {
//         console.log(data);
//     });
// })();
