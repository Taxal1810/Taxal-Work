/*======================== mobile-js =========================*/ 

jQuery(document).ready(function () {
  jQuery('.mobileIcon').click(function () {
    jQuery("body").toggleClass('menu-open');
  });
});


$(document).ready(function(){
    // Function to initialize tabbing
    function initializeTabs(){
        // Add active class to the first tab and corresponding content
        $('.deliver_btm_otr .deliver_btm_box_que:first-child').addClass('active');
        $('.deliver_bottom_right_tab .deliver_bottom_right:first-child').addClass('active').show();

        // Add click event handler for tab switching
        $('.deliver_btm_otr .deliver_btm_box_que').click(function(){
            // Remove active class from all tabs
            $('.deliver_btm_otr .deliver_btm_box_que').removeClass('active');
            // Add active class to the clicked tab
            $(this).addClass('active');
            // Remove active class from all tab contents
            $('.deliver_bottom_right_tab .deliver_bottom_right').removeClass('active');
            // Hide all tab contents
            $('.deliver_bottom_right_tab .deliver_bottom_right').hide();
            // Show the corresponding tab content based on index
            var index = $(this).index();
            $('.deliver_bottom_right_tab .deliver_bottom_right').eq(index).addClass('active').show();
        });
    }

    // Call the function to initialize tabbing
    initializeTabs();
});


/**************** offer slider js ***************/

var swiper = new Swiper(".offerSwiper", {
    slidesPerView: 4.3,
    spaceBetween: 28,
    navigation: {
      nextEl: ".offer-next-btn",
      prevEl: ".offer-prev-btn",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
        Centerslide: true,
      },
      480: {
        slidesPerView: 1.5,
        spaceBetween: 20,
      },
      601: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1025: {
        slidesPerView: 3.2,
        spaceBetween: 28,
      },
      1201: {
        slidesPerView: 3.5,
        spaceBetween: 28,
      },
    },
  });


/**************** story slider js ***************/

var swiper = new Swiper(".storySwiper", {
    slidesPerView: 1,
    navigation: {
      nextEl: ".offer-next-btn",
      prevEl: ".offer-prev-btn",
    },
    pagination: {
        el: ".story-pagination",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        1025: {
          slidesPerView: 1,
        },
      },
  });



/******************** offer slider offset *******************/ 


/************************* offset js *************************/

$(document).ready(function() {
    // Function to update the left offset and apply it as a CSS property
    function updateOffset() {
      var leftOffset = $(".offer_heading").offset().left;
      $(".offerSwiper ").css("padding-left", leftOffset);    
    }
    // Initial offset on document ready
    updateOffset();
    // Update offset on window resize
    $(window).resize(function() {
      updateOffset();
    });
    // Update offset on window load
    $(window).on("load", function() {
      updateOffset();
    });
  });


  $(document).ready(function () {
    $(' .accrodian_main_div:nth-child(1) .tablet_accordian').addClass('active');
    $(' .accrodian_main_div:nth-child(1) .accrodian_mobile_ans ').slideDown();
    $('.tablet_accordian').on('click', function () {
        if ($(this).hasClass('active')) {
            $(this).siblings('.accrodian_mobile_ans ').slideUp();
            $(this).removeClass('active');
        }
        else {
            $('.accrodian_mobile_ans ').slideUp();
            $('.tablet_accordian').removeClass('active');
            $(this).siblings('.accrodian_mobile_ans ').slideToggle();
            $(this).toggleClass('active');
        }
    });
});



/***************accordin***************/


$(document).ready(function () {
  // Only open the first accordian_main by default
  $('.accordian_main:nth-child(1) .accordian_que').addClass('active');
  $('.accordian_main:nth-child(1) .accordian_des').css('display', 'flex').slideDown();

  $('.accordian_que').on('click', function () {
    if ($(this).hasClass('active')) {
      $(this).siblings('.accordian_des').slideUp(function () {
        $(this).css('display', 'none');
      });
      $(this).removeClass('active');
    } else {
      $('.accordian_des').slideUp(function () {
        $(this).css('display', 'none');
      });
      $('.accordian_que').removeClass('active');
      $(this).siblings('.accordian_des').slideDown(function () {
        $(this).css('display', 'flex');
      });
      $(this).toggleClass('active');
    }
  });
});