// meals faq

$(document).ready(function () {
  $(' .meals_faq_box:nth-child(1) .meals_faq_que').addClass('active');
  $(' .meals_faq_box:nth-child(1) .meals_faq_ans').slideDown();
  $('.meals_faq_que ').on('click', function () {
    if ($(this).hasClass('active')) {
      $(this).siblings('.meals_faq_ans').slideUp();
      $(this).removeClass('active');
    }
    else {
      $('.meals_faq_ans').slideUp();
      $('.meals_faq_que').removeClass('active');
      $(this).siblings('.meals_faq_ans').slideToggle();
      $(this).toggleClass('active');
    }
  });
});







document.addEventListener("DOMContentLoaded", function () {
  const tabingDivs = document.querySelectorAll(".tabing");
  const tabImages = document.querySelectorAll(".tabing_img");

  // Hide all tab images except the first one
  tabImages.forEach((img, index) => {
    if (index !== 0) {
      img.style.display = "none";
    }
  });

  // Add active class to the first tab
  tabingDivs[0].classList.add("active");

  tabingDivs.forEach((tabingDiv, index) => {
    tabingDiv.addEventListener("click", function () {
      // Remove active class from all tabingDivs
      tabingDivs.forEach(div => div.classList.remove("active"));
      // Add active class to the clicked tabingDiv
      tabingDiv.classList.add("active");

      // Hide all tab images
      tabImages.forEach(img => img.style.display = "none");
      // Display the corresponding tab image
      tabImages[index].style.display = "block";
    });
  });
});



//**********************************  */ Demand tabbing Section **********************************************************************


$(document).ready(function () {
  // Hide all batch slides except the first one
  $(".batch_slide").not(":first").hide();

  // Show the first batch slide by default
  $(".batch_slide").eq(0).show();

  // Add 'active' class to the first tab link
  $(".volume_capacity_button .tab_links").eq(0).addClass('active');

  $(".tab_links").click(function () {
    // Get the index of the clicked tab link
    var index = $(this).index();

    // Hide all batch slides
    $(".batch_slide").hide();

    // Show the corresponding batch slide
    $(".batch_slide").eq(index).show();

    // Remove 'active' class from all tab links
    $(".tab_links").removeClass('active');

    // Add 'active' class to the clicked tab link
    $(this).addClass('active');
  });
});


// dropdown js

$(document).ready(function () {
  $('.customer_btn').click(function () {
    $('.customer_dropdown_list').toggleClass('open slide-down');
    $(this).toggleClass('active');
  });
});






$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) { // adjust the value as needed
      $('body').addClass('sticky');
    } else {
      $('body').removeClass('sticky');
    }
  });
});

