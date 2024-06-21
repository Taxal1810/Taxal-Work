

/**********************************swiper******************************/

var swiper = new Swiper(".ihre_slider", {
    slidesPerView: 2,
    spaceBetween: 40,
    keyboard: {
        enabled: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1.4,
            spaceBetween: 20,
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        769: {
            spaceBetween: 25,
        },
        901: {
            spaceBetween: 30,
        },
        1025: {
            spaceBetween: 40,
        }
    },
});


/****************************Header***********************************/

$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('header').addClass("sticky");
    }
    else {
        $('header').removeClass("sticky");
    }
});

/********************Menu**************************/

jQuery(document).ready(function () {
    jQuery('.mobileIcon').click(function () {
        jQuery("body").toggleClass('menu-open');
    });
});

/***************accordin***************/

$(document).ready(function () {
    $('.agenda_acco_main').on('click', function () {
        if ($(this).hasClass('active')) {
            $(this).siblings('.agenda_acco_content').slideUp(400);
            $(this).removeClass('active');
        } else {
            $('.agenda_acco_content').slideUp(400);
            $('.agenda_acco_main').removeClass('active');
            $(this).siblings('.agenda_acco_content').slideDown(400).css('display', 'flex');
            $(this).toggleClass('active');
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.six_otr');

    sections.forEach(section => {
        const parallaxImage = section.querySelector('.bg_img img');

        function updateParallax() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const sectionOffsetTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const windowHeight = window.innerHeight;

            // Check if the section is in the viewport
            if (scrollTop + windowHeight > sectionOffsetTop && scrollTop < sectionOffsetTop + sectionHeight) {
                const offset = (scrollTop - sectionOffsetTop) * 0.5; // Adjust this value for different parallax effects
                parallaxImage.style.transform = `translateY(${offset}px)`;
            }
        }

        window.addEventListener('scroll', updateParallax);
        window.addEventListener('resize', updateParallax);
        updateParallax();
    });
});

