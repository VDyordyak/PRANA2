$(document).ready(function(){
  $('.slider').slick({
      dots: false,
      infinite: true,
      swipe: true,        // enables swipe gestures (touch devices)
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      prevArrow: '<button type="button" class="slick-prev slick-swiper-button-prev swiper-button-prev"><i class="fa fa-chevron-left"></i></button>',
      nextArrow: '<button type="button" class="slick-next slick-swiper-button-next swiper-button-next"><i class="fa fa-chevron-right"></i></button>',
      
      responsive: [
        {
          breakpoint: 768,   // Mobile only
          settings: {
            dots: true,
            arrows: false,   // Hide prev/next buttons
            slidesToShow: 1,
            centerMode: false,
            autoplay: false,
            touchMove: true,    // allows dragging/swiping to change slides
            speed: 500,
            variableWidth: false
          }
        }
      ]
  });

  // Repeat the same for your other slider if needed
  $('.video-slider').slick({
      dots: false,
      infinite: true,
      swipe: true,
      touchMove: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      centerMode: true,
      variableWidth: true,
      autoplaySpeed: 3000,
      prevArrow: '<button type="button" class="slick-prev slick-swiper-button-prev swiper-button-prev"><i class="fa fa-chevron-left"></i></button>',
      nextArrow: '<button type="button" class="slick-next slick-swiper-button-next swiper-button-next"><i class="fa fa-chevron-right"></i></button>',

      responsive: [
        {
          breakpoint: 1024,  // Tablet & Mobile
          settings: {
            slidesToShow: 1,
            centerMode: false,
            variableWidth: false,
            speed: 500,
          }
        },
        {
          breakpoint: 768,   // Mobile only
          settings: {
            dots: true,
            arrows: false,   // Hide prev/next buttons
            slidesToShow: 1,
            centerMode: false,
            variableWidth: false,
            speed: 500,
          }
        }
      ]
  });

});

var swiper = new Swiper(".catalogue-slider.slide-content", {
    slidesPerView: 3,
    centeredSlides: true,   // Centers the active slide
    // speed: 1000, // Slows down the transition (1000ms = 1s)
    spaceBetween: 40,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".catalogue-swiper.swiper-pagination",
      clickable: true,
      dynamicBullets: false,
    },
    navigation: {
      nextEl: ".catalogue-swiper-button.swiper-button-next",
      prevEl: ".catalogue-swiper-button.swiper-button-prev",
    },
  
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1025: {
        slidesPerView: 3,
      },
    },
});

document.addEventListener("DOMContentLoaded", () => {
  const viewMoreButtons = document.querySelectorAll(".view-more-btn");
  const popups = document.querySelectorAll(".popup-overlay");

  // Show the correct popup
  viewMoreButtons.forEach((button) => {
      button.addEventListener("click", () => {
          const popupId = button.getAttribute("data-popup-id");
          const popup = document.getElementById(popupId);
          if (popup) {
              popup.classList.add("active");
          }
      });
  });

  // Close popup when clicking the close button
  popups.forEach((popup) => {
      const closeButton = popup.querySelector(".popup-close");
      closeButton.addEventListener("click", () => {
          popup.classList.remove("active");
      });

      // Close when clicking outside the popup
      popup.addEventListener("click", (event) => {
          if (event.target === popup) {
              popup.classList.remove("active");
          }
      });
  });

  // Close popups when pressing Esc
  document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
          popups.forEach((popup) => popup.classList.remove("active"));
      }
  });
});


var swiper = new Swiper(".projects-slider.slide-content", {
  slidesPerView: 3,
  spaceBetween: 40,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".projects-swiper.swiper-pagination",
    clickable: true,
    dynamicBullets: false,
  },
  navigation: {
    nextEl: ".projects-swiper-button.swiper-button-next",
    prevEl: ".projects-swiper-button.swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    1025: {
      slidesPerView: 3,
    },
  },
});

document.getElementById('menuToggle').addEventListener('click', function () {
  let menu = document.getElementById('navMenu');
  
  // Toggle menu visibility
  if (menu.style.display === 'flex') {
      menu.style.display = 'none';
  } else {
      menu.style.display = 'flex';
      menu.style.flexDirection = 'column';
  }

  // Toggle active class for arrow rotation
  this.classList.toggle('active');
});

