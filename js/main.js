$(document).ready(function () {
    $('.content').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
    });

    $(document).ready(function(){
        $(".menu, .arrow-link").on("click","a", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1000);
        });
    });

});





