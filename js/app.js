// Init foudnation library
$(document).foundation();

// Function of the site
$( window ).ready(function() {
    $(".overlay").css("width", $(".fixed-img").width());
    $(".overlay").css("height", $(".fixed-img").height());
});

// Resize function for the proyect hover
$( window ).resize(function() {
    $(".overlay").css("width", $(".fixed-img").width());
    $(".overlay").css("height", $(".fixed-img").height());
});
