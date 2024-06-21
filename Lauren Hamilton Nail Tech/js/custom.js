/****************************Header***********************************/

$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('header').addClass("sticky");
    }
    else {
        $('header').removeClass("sticky");
    }
});


jQuery(document).ready(function () {
    jQuery('.mobileIcon').click(function () {
        jQuery("body").toggleClass('menu-open');
    });
});