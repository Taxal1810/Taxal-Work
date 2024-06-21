jQuery(document).ready(function ($) {
    // Use $ as an alias for jQuery inside this function
    var swiper = new Swiper('.dawn_swiper', {
        slidesPerView: 1.2,
        spaceBetween: 50,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
});



$(document).ready(function () {
    // Function to update the left offset and apply it as a CSS property
    function updateOffset() {
        var leftOffset = $(".grail_row").offset().left;
        $(".dawn_swiper").css("padding-left", leftOffset);
    }
    // Initial offset on document ready
    updateOffset();
    // Update offset on window resize
    $(window).resize(function () {
        updateOffset();
    });
    // Update offset on window load
    $(window).on("load", function () {
        updateOffset();
    });
});




var copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logo-slider").appendChild(copy);



$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#header').addClass('show');
        } else {
            $('#header').removeClass('show');
        }
    });
    $('#header').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });
});


///faq///



// $(document).ready(function () {
//     $(' .fhenix_faq_box:nth-child(1) .fhenix_faq_que').addClass('active');
//     $(' .fhenix_faq_box:nth-child(1) .fhenix_faq_ans').slideDown();
//     $('.fhenix_faq_que').on('click', function () {
//         if ($(this).hasClass('active')) {
//             $(this).siblings('.fhenix_faq_ans').slideUp();
//             $(this).removeClass('active');
//         }
//         else {
//             $('.fhenix_faq_ans').slideUp();
//             $('.fhenix_faq_que').removeClass('active');
//             $(this).siblings('.fhenix_faq_ans').slideToggle();
//             $(this).toggleClass('active');
//         }
//     });
// });


$(document).ready(function () {
    $('.fhenix_faq_que').on('click', function () {
        if ($(this).hasClass('active')) {
            $(this).siblings('.fhenix_faq_ans').slideUp();
            $(this).removeClass('active');
        } else {
            $('.fhenix_faq_ans').slideUp();
            $('.fhenix_faq_que').removeClass('active');
            $(this).siblings('.fhenix_faq_ans').slideToggle();
            $(this).toggleClass('active');
        }
    });
    // Hide the answer of the first question by default
    $('.fhenix_faq_box:nth-child(1) .fhenix_faq_ans').hide();
});


