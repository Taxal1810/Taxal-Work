// mobile menu 

jQuery(document).ready(function(){
  jQuery('.mobileIcon').click(function(){
        jQuery("body").toggleClass('menu-open');
  });
});

// Product Slider

var swiper = new Swiper(".slider__product", {
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination-product",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next-product",
    prevEl: ".swiper-button-prev-product",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    601: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    767: {
      slidesPerView: 3,
      spaceBetween: 18,
    },
    1100: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 29,
    }
  },
});

// Find Product

var swiper = new Swiper(".find_product_slider", {
  slidesPerView: 3,
  spaceBetween: 28,
  pagination: {
    el: ".swiper-pagination-find",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next-find_product",
    prevEl: ".swiper-button-prev-find_product",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 28,
    }
  },
});

// customer slider

var swiper = new Swiper(".review_slider", {
  slidesPerView: 1.8,
  loop: true,
  centeredSlides: true,
  grabCursor: true,
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 565,
    modifier: 0.5,
    slideShadows: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 0,
        slideShadows: false,
      },
    },
    768: {
      slidesPerView: 1.8,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 500,
        modifier: 1.5,
        slideShadows: false,
      },
    },
    990: {
      slidesPerView: 1.8,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 400,
        modifier: 1.5,
        slideShadows: false,
      },
    },
    1200: {
      slidesPerView: 2.05,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 500,
        modifier: 1.1,
        slideShadows: false,
      },
    },
  },
  pagination: {
    el: ".swiper-pagination-review",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next-review",
    prevEl: ".swiper-button-prev-review",
  },
  speed: 500,
});

// Product Details Slider

var swiper = new Swiper(".product_details_slider_thumb", {
  loop: true,
  spaceBetween: 15,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".product_details_slider", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});

// Accordine js product details faq

$(document).ready(function() {
  $(' .product_details_faq_box:nth-child(1) .product_details_faq_que ').addClass('active');
  $(' .product_details_faq_box:nth-child(1) .product_details_faq_ans').slideDown();
  $('.product_details_faq_que ').on('click', function() {
      if($(this).hasClass('active')) {
        $(this).siblings('.product_details_faq_ans').slideUp();
        $(this).removeClass('active');
      }
      else {
        $('.product_details_faq_ans').slideUp();
        $('.product_details_faq_que ').removeClass('active');
        $(this).siblings('.product_details_faq_ans').slideToggle();
        $(this).toggleClass('active');
      }
  });     
  });

// product Quantity Count

function increment() {
  var counterElement = document.getElementById('counter');
  var currentValue = parseInt(counterElement.value);
  counterElement.value = currentValue + 1;
}

function decrement() {
  var counterElement = document.getElementById('counter');
  var currentValue = parseInt(counterElement.value);
  if (currentValue > 0) {
    counterElement.value = currentValue - 1;
  }
}

// hero banner offset js

var container = $('.container');
var leftOffset = container.offset().left;

$('.hero_banner_row').css('padding-left', leftOffset);


// watch story popup

$(document).ready(function () {
  $('.popup-with-zoom-anim').magnificPopup({
    type: 'inline',

    fixedContentPos: false,
    fixedBgPos: true,

    overflowY: 'auto',

    closeBtnInside: true,
    preloader: false,

    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-zoom-in'
  });
});


// landing page tabbing

document.addEventListener('DOMContentLoaded', function () {
  var tabList = document.getElementById('tabList');
  var tabs = document.getElementsByClassName('magnesium_content');

  tabList.addEventListener('click', function (event) {
    var targetTabId = event.target.getAttribute('href').substring(1);

    // Hide all tabs
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].style.display = 'none';
    }

    // Remove "active" class from all tab links
    var tabLinks = tabList.getElementsByTagName('a');
    for (var i = 0; i < tabLinks.length; i++) {
      tabLinks[i].classList.remove('active');
    }

    // Show the selected tab
    var selectedTab = document.getElementById(targetTabId);
    if (selectedTab) {
      selectedTab.style.display = 'block';
    }

    // Add "active" class to the clicked tab link
    event.target.classList.add('active');
  });

  // Set the first anchor tag to have the "active" class by default
  var firstTabLink = tabList.querySelector('li:first-child a');
  if (firstTabLink) {
    firstTabLink.click();
  }
});


// watch video popup

var videoPopup = document.getElementById('videoPopup');
var playButton = document.getElementById('playButton');

// Add click event listener to the play button
playButton.addEventListener('click', function () {
  // Show the video popup
  videoPopup.style.display = 'block';

  // Play the video
  videoPopup.play();
});

// ingredients slider

var swiper = new Swiper(".ingredients_slider", {
  slidesPerView: 3,
  spaceBetween: 29,
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    767: {
      slidesPerView: 2,
    },
    1100: {
      slidesPerView: 3,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next-ingredients",
    prevEl: ".swiper-button-prev-ingredients",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});