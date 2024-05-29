//* Define constants for DOM elements
// Header
const header = [
  document.querySelector(".primary-header"),
  document.querySelector(".header-container"),
];
const hamburgerMenu = document.querySelector(".hamburger-menu");
const navList = document.querySelector(".primary-navigation");
const closeNavList = document.querySelector(".close");
// Hero
const heroGallery = document.querySelector(".hero-gallery");
const heroImages = document.querySelectorAll(".hero-gallery img");
// Benefits
const benefitsImgs = document.querySelectorAll(".benefits img");
const benefitsHeading = document.querySelector(".benefits h2");
// Process
const processCards = document.querySelectorAll(".process .card");
const processFirstColumn = document.querySelector(".process .first-column");

// Work
const sectionHeading = document.querySelector(".works .section-heading");
const worksGallery = document.querySelectorAll(".works .image");

// Plans
const planHeading = document.querySelectorAll(".plans .section-heading > *");
const testimonials = document.querySelectorAll(".plans .testimonial");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
let currentIndex = 0;
const intervalTime = 15000; // 15 seconds

// FAQs
const faqs = document.querySelector(".faqs");
const questions = faqs.querySelectorAll(".question");
const faqsHeading = faqs.querySelector(".heading");
//* Definition END =================================.

const openMenu = () => {
  navList.classList.add("mobile-menu");
};

const closeMenu = () => {
  navList.classList.remove("mobile-menu");
};

const webPageScrollAnimation = () => {
  const screenwidth = window.innerWidth;
  let largeScreenMin = 800;
  const largeScreenMax = 1524;
  let smallScreenMax = 796;
  const scrollThreshold = window.scrollY;

  //* remove navigation list when the user is in footer section
  const removeNavList = () => {
    const smallScreenMin = 720;
    const smallScreenMax = 799;
    const scrollThresholdLarge = 8250;
    const scrollThresholdSmall = 12205;

    function removeNavigation(scrollY) {
      if (scrollThreshold > scrollY) {
        navList.classList.add("opacity-0");
      } else {
        navList.classList.remove("opacity-0");
      }
    }

    function largeScreens() {
      if (screenwidth >= largeScreenMin && screenwidth <= largeScreenMax) {
        removeNavigation(scrollThresholdLarge);
      }
    }
    function smallScreens() {
      if (screenwidth <= smallScreenMax && screenwidth >= smallScreenMin) {
        removeNavigation(scrollThresholdSmall);
      }
    }

    largeScreens();
    smallScreens();
  };

  //* Handle gallery scroll animation
  const galleryScroll = () => {
    // Function to add classes to an image element
    const addClasses = (image, classes) => {
      image.classList.add(...classes);
    };

    // Function to remove classes from an image element
    const removeClasses = (image, classes) => {
      image.classList.remove(...classes);
    };

    // Object mapping image indices to classes to be added if scrollThreshold > 120
    const classesToAdd = {
      0: ["move-left"],
      1: ["rotateX-0", "width-reduce", "move-down"],
      2: ["move-right"],
    };

    // Array containing all classes that are potentially added to the images and need to be removed if scrollThreshold <= 120
    const classesToRemove = [
      "move-left",
      "rotateX-0",
      "width-reduce",
      "move-down",
      "move-right",
    ];

    if (scrollThreshold > 120) {
      // If true, iterate over each image and add classes specified in classesToAdd
      heroImages.forEach((image, index) => {
        if (classesToAdd[index]) {
          addClasses(image, classesToAdd[index]);
        }
      });
    } else {
      // If false, iterate over each image and remove classes specified in classesToRemove
      heroImages.forEach((image) => {
        removeClasses(image, classesToRemove);
      });
    }
  };

  //* fixed header on small screens
  const fixedHeader = () => {
    smallScreenMax = 720;
    const thresholdToShowFixedHeader = 1400;
    const thresholdToHideFixedHeader = 1395;

    if (screenwidth <= smallScreenMax) {
      if (scrollThreshold > thresholdToShowFixedHeader) {
        header[0].classList.add("fixed-header");
        navList.classList.add("move-down");
      } else if (scrollThreshold > thresholdToHideFixedHeader) {
        header[0].classList.add("opacity-0");
      } else {
        header[0].classList.remove("fixed-header", "opacity-0");
        navList.classList.remove("move-down");
      }
    }
  };

  //*Handle animations for Benefits section
  const benefitsAnimation = () => {
    const benefitsFirstImg = benefitsImgs[0];
    const benefitsSecondImg = benefitsImgs[1];
    const benefitsThirdImg = benefitsImgs[2];
    const benefitsFourthImg = benefitsImgs[3];
    const benefitsFifthImg = benefitsImgs[4];
    const benefitsSixthImg = benefitsImgs[5];

    function benefitsHeadingAnimation(scrollY) {
      if (scrollThreshold > scrollY) {
        benefitsHeading.classList.add("move-btt");
      }
    }

    const largeScreens = () => {
      function firstColumnsAnimation() {
        if (scrollThreshold > 940) {
          benefitsFirstImg.classList.add("move-rtl");
          benefitsSecondImg.classList.add("move-ltr");
        }
      }

      function secondColumnsAnimation() {
        if (scrollThreshold > 1400) {
          benefitsThirdImg.classList.add("move-rtl");
          benefitsFourthImg.classList.add("move-ltr");
        }
      }

      function lastColumnsAnimation() {
        if (scrollThreshold > 1850) {
          benefitsFifthImg.classList.add("move-btt");
          benefitsSixthImg.classList.add("move-btt");
        }
      }
      if (screenwidth >= largeScreenMin && screenwidth <= largeScreenMax) {
        benefitsHeadingAnimation(680);
        firstColumnsAnimation();
        secondColumnsAnimation();
        lastColumnsAnimation();
      }
    };

    const smallScreens = () => {
      function firstImageAnimation() {
        if (scrollThreshold > 820) {
          benefitsFirstImg.classList.add("move-rtl");
        }
      }

      function secondImageAnimation() {
        if (scrollThreshold > 1270) {
          benefitsSecondImg.classList.add("move-ltr");
        }
      }

      function thirdImageAnimation() {
        if (scrollThreshold > 1690) {
          benefitsThirdImg.classList.add("move-rtl");
        }
      }

      function fourthImageAnimation() {
        if (scrollThreshold > 2126) {
          benefitsFourthImg.classList.add("move-ltr");
        }
      }

      function fifthImageAnimation() {
        if (scrollThreshold > 2534) {
          benefitsFifthImg.classList.add("move-btt");
        }
      }

      function sixthImageAnimation() {
        if (scrollThreshold > 2724) {
          benefitsSixthImg.classList.add("move-btt");
        }
      }
      if (screenwidth <= smallScreenMax) {
        benefitsHeadingAnimation(813);
        firstImageAnimation();
        secondImageAnimation();
        thirdImageAnimation();
        fourthImageAnimation();
        fifthImageAnimation();
        sixthImageAnimation();
      }
    };

    largeScreens();
    smallScreens();
  };

  //*Handle animations for Process section
  const processAnimation = () => {
    function smallScreens() {
      if (screenwidth <= smallScreenMax) {
        if (scrollThreshold >= 4225) {
          processCards[2].classList.add("scale-up");
        } else if (scrollThreshold >= 3950) {
          processCards[1].classList.add("scale-up");
        } else if (scrollThreshold >= 3680) {
          processCards[0].classList.add("scale-up");
        } else if (scrollThreshold >= 3237) {
          processFirstColumn.classList.add("move-btt");
        }
      }
    }

    function largeScreens() {
      if (screenwidth >= largeScreenMin && screenwidth <= largeScreenMax) {
        if (scrollThreshold >= 3175) {
          processCards[2].classList.add("scale-up");
        } else if (scrollThreshold >= 2863) {
          processCards[1].classList.add("scale-up");
        } else if (scrollThreshold >= 2543) {
          processCards[0].classList.add("scale-up");
        } else if (scrollThreshold >= 2390) {
          processFirstColumn.classList.add("move-btt");
        } else {
          processCards.forEach((card) => {
            card.classList.remove("scale-up");
          });
        }
      }
    }

    smallScreens();
    largeScreens();
  };

  //*Handle animations for Works section
  const worksAnimation = () => {
    const firstImage = worksGallery[0];
    const secondImage = worksGallery[1];
    const thirdImage = worksGallery[2];
    const fourthImage = worksGallery[3];
    const fifthImage = worksGallery[4];
    const sixthImage = worksGallery[5];
    const seventhImage = worksGallery[6];

    function worksHeading(scrollY) {
      if (scrollThreshold > scrollY) {
        sectionHeading.classList.add("move-btt");
      }
    }

    function galleryColumns() {
      function galleryFirstColumn() {
        const firstColumn = [firstImage, secondImage];
        if (scrollThreshold > 4029) {
          firstColumn.forEach((element) => element.classList.add("scale-up"));
        }
      }

      function gallerySecondColumn() {
        const secondColumn = [thirdImage, fourthImage, fifthImage];
        if (scrollThreshold > 4445) {
          secondColumn.forEach((element) => element.classList.add("scale-up"));
        }
      }

      function galleryThirdColumn() {
        const thirdColumn = [sixthImage, seventhImage];
        if (scrollThreshold > 4837) {
          thirdColumn.forEach((element) => element.classList.add("scale-up"));
        }
      }

      galleryFirstColumn();
      gallerySecondColumn();
      galleryThirdColumn();
    }

    function galleryFirstImage() {
      if (scrollThreshold > 5450) {
        firstImage.classList.add("scale-up");
      }
    }
    function gallerySecondImage() {
      if (scrollThreshold > 5800) {
        secondImage.classList.add("scale-up");
      }
    }
    function galleryThirdImage() {
      if (scrollThreshold > 6200) {
        thirdImage.classList.add("scale-up");
      }
    }
    function galleryFourthImage() {
      if (scrollThreshold > 6600) {
        fourthImage.classList.add("scale-up");
      }
    }
    function galleryFifthImage() {
      if (scrollThreshold > 7000) {
        fifthImage.classList.add("scale-up");
      }
    }
    function gallerySixthImage() {
      if (scrollThreshold > 7400) {
        sixthImage.classList.add("scale-up");
      }
    }
    function gallerySeventhImage() {
      if (scrollThreshold > 7800) {
        seventhImage.classList.add("scale-up");
      }
    }

    function largeScreens() {
      if (screenwidth >= largeScreenMin && screenwidth <= largeScreenMax) {
        worksHeading(3680);
        galleryColumns();
      }
    }

    function smallScreens() {
      if (screenwidth <= smallScreenMax) {
        worksHeading(4975);
        galleryFirstImage();
        gallerySecondImage();
        galleryThirdImage();
        galleryFourthImage();
        galleryFifthImage();
        gallerySixthImage();
        gallerySeventhImage();
      }
    }

    largeScreens();
    smallScreens();
  };

  //*Handle animations for Plans section
  const plansAnimation = () => {
    function plansHeadingAnimation(scrollY) {
      if (scrollThreshold > scrollY) {
        planHeading.forEach((element) => {
          element.classList.add("move-btt");
        });
      }
    }

    function largeScreens() {
      if (screenwidth >= largeScreenMin && screenwidth <= largeScreenMax) {
        plansHeadingAnimation(5260);
      }
    }
    function smallScreens() {
      if (screenwidth <= smallScreenMax) {
        plansHeadingAnimation(8030);
      }
    }

    largeScreens();
    smallScreens();
  };

  //*Handle animations for FAQs section
  const faqsAnimation = () => {
    function faqsHeadingAnimation(scrollY) {
      if (scrollThreshold > scrollY) {
        faqsHeading.classList.add("move-btt");
      }
    }

    function largeScreens() {
      if (screenwidth >= largeScreenMin && screenwidth <= largeScreenMax) {
        faqsHeadingAnimation(7410);
      }
    }
    function smallScreens() {
      if (screenwidth <= smallScreenMax) {
        faqsHeadingAnimation(11763);
      }
    }

    largeScreens();
    smallScreens();
  };

  removeNavList();
  galleryScroll();
  fixedHeader();
  benefitsAnimation();
  processAnimation();
  worksAnimation();
  plansAnimation();
  faqsAnimation();
};

//* Testimonial Slider
const testimonialSlider = () => {
  let autoSlideTimer; // Timer for automatic sliding

  // Function to show testimonial based on current index
  function showTestimonial(index) {
    // Hide all testimonials
    testimonials.forEach((testimonial) =>
      testimonial.classList.remove("active")
    );
    // Show the selected testimonial
    testimonials[index].classList.add("active");
  }

  // Function for the next button
  function nextTestimonial() {
    // Update the index to the next testimonial
    currentIndex = (currentIndex + 1) % testimonials.length;
    // Show the new testimonial
    showTestimonial(currentIndex);
    // Reset the timer
    resetAutoSlideTimer();
  }

  // Function for the previous button
  function prevTestimonial() {
    // Update the index to the previous testimonial
    currentIndex =
      (currentIndex - 1 + testimonials.length) % testimonials.length;
    // Show the new testimonial
    showTestimonial(currentIndex);
    // Reset the timer
    resetAutoSlideTimer();
  }

  // Function to reset the automatic sliding timer
  function resetAutoSlideTimer() {
    clearInterval(autoSlideTimer);
    autoSlideTimer = setInterval(nextTestimonial, intervalTime);
  }

  // Add event listeners to buttons
  nextButton.addEventListener("click", nextTestimonial);
  prevButton.addEventListener("click", prevTestimonial);

  // Initially show the first testimonial
  showTestimonial(currentIndex);

  // Start the automatic sliding timer
  autoSlideTimer = setInterval(nextTestimonial, intervalTime);
};

// Initialize testimonial slider
testimonialSlider();

//* FAQs / toggle
questions.forEach((question) => {
  const showAnswers = () => {
    const answer = question.querySelector("p"); // Select the <p> inside the question
    const icon = question.querySelector("h3 > img"); // Select the <img> inside the <h3> within the question

    if (answer.classList.contains("d-block")) {
      answer.classList.remove("d-block");
      icon.classList.remove("rotate-135");
      question.classList.remove("dark-bg");
    } else {
      answer.classList.add("d-block");
      icon.classList.add("rotate-135");
      question.classList.add("dark-bg");
    }
  };

  question.addEventListener("click", showAnswers);
});

const init = () => {
  // Add event listener for the hamburger menu
  hamburgerMenu.addEventListener("click", openMenu);
  // Add event listener for closing the menu
  closeNavList.addEventListener("click", closeMenu);
  // Add event listener for most web page content to add some animation when the page starts scrolling
  window.addEventListener("scroll", webPageScrollAnimation);
};

init();
