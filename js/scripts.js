$(document).ready(function() {
    $('#mycarousel').carousel({interval:2000});

    /* for the elements in the document (when ready) that have the
    * id carousel-pause (our pause button above), when the user clicks
     * (.click is an event method), execute this function
     * which in turn finds the carousel element and pauses it*/
    $('#carouselButton').click(function() {

        /* For the carousel button, for the span tag within it (child)
        * If the span tag currently has the fa-pause class applied,
         * (button is acting as pause btn) perform the pause action and
        * flip the icon to a play icon .*/

        if($('#carouselButton').children('span').hasClass('fa-pause')){
            $('#mycarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
        } else{
            $('#mycarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
        }
    });
});

$(document).ready(function() {
    $('#reserveTableButton').click(function() {
        $('#reservetableModal').modal('show');
    });
    $('#loginButton').click(function() {
        $('#loginModal').modal('show');
    });
});