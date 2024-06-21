var container = $('.container');
var leftOffset = container.offset().left;
var rightOffset = leftOffset;

$('.approach_otr ').css('padding-left', leftOffset);














var swiper = new Swiper(".approach_swiper", {
    slidesPerView: 2.485,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


