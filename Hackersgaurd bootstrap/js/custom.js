$(document).ready(function () {
    $(".header_links .dropdown").hover(function () {
        $(this).find(".submenu").stop().slideDown(300);
    }, function () {
        $(this).find(".submenu").stop().slideUp(300);
    });
});
