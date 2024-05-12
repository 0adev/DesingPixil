// Define constants for DOM elements
// header
const header = [
  document.querySelector(".primary-header"),
  document.querySelector(".header-container"),
];
const hamburgerMenu = document.querySelector(".hamburger-menu");
const navList = document.querySelector(".primary-navigation");
const closeNavList = document.querySelector(".close");
// hero
const heroGallery = document.querySelector(".hero-gallery");
const heroImages = [
  document.querySelector(".first-image"),
  document.querySelector(".second-image"),
  document.querySelector(".third-image"),
];
// main => benefits
const benefitsImgs = document.querySelectorAll(".benefits img");
const benefitsHeading = document.querySelector(".benefits h2");
// main => process
const processCards = [
  document.querySelector(".first-step"),
  document.querySelector(".second-step"),
  document.querySelector(".third-step"),
];

// first-column contains the h2, p, a.button in .precess section
const processFirstColumn = document.querySelector(".process .first-column");

// ===================================================================== //

const openMenu = () => {
  navList.classList.add("mobile-menu");

  const closeMenu = () => {
    navList.classList.remove("mobile-menu");
  };

  // Event listener for close button click
  closeNavList.addEventListener("click", closeMenu);
};

const webPageAnimation = () => {
  // Handle gallery scroll animation
  const galleryScroll = () => {
    const scrollThreshold = 120;

    if (window.scrollY > scrollThreshold) {
      heroImages[0].classList.add("move-left");
      heroImages[1].classList.add("rotateX-0", "width-reduce", "move-down");
      heroImages[2].classList.add("move-right");
    } else {
      heroImages.forEach((image) =>
        image.classList.remove(
          "move-left",
          "rotateX-0",
          "width-reduce",
          "move-down",
          "move-right"
        )
      );
    }
  };

  // fixed header on small screens
  const fixedHeader = () => {
    const screenwidth = window.innerWidth;
    const smallScreenMax = 720;
    const scrollThreshold = window.scrollY;

    if (screenwidth <= smallScreenMax) {
      if (scrollThreshold > 1400) {
        header[0].classList.add("fixed-header");
        navList.classList.add("move-down");
      } else if (scrollThreshold > 1395) {
        header[0].classList.add("opacity-0");
      } else {
        header[0].classList.remove("fixed-header", "opacity-0");
        navList.classList.remove("move-down");
      }
    }
  };

  const benefitsAnimation = () => {
    const benefitsFirstImg = benefitsImgs[0];
    const benefitsSecondImg = benefitsImgs[1];
    const benefitsThirdImg = benefitsImgs[2];
    const benefitsFourthImg = benefitsImgs[3];
    const benefitsFifthImg = benefitsImgs[4];
    const benefitsSixthImg = benefitsImgs[5];
    console.log(window.scrollY);

    const screenwidth = window.innerWidth;
    const largeScreenMin = 800;
    const largeScreenMax = 1524;
    const smallScreenMax = 796;

    // console.log(window.scrollY);
    function benefitsHeadingAnimation(scrollThreshold) {
      if (window.scrollY > scrollThreshold) {
        benefitsHeading.classList.add("move-btt");
      }
    }

    function firstColumnsAnimation() {
      if (window.scrollY > 940) {
        benefitsFirstImg.classList.add("move-rtl");
        benefitsSecondImg.classList.add("move-ltr");
      }
    }

    function secondColumnsAnimation() {
      if (window.scrollY > 1400) {
        benefitsThirdImg.classList.add("move-rtl");
        benefitsFourthImg.classList.add("move-ltr");
      }
    }

    function lastColumnsAnimation() {
      if (window.scrollY > 1850) {
        benefitsFifthImg.classList.add("move-btt");
        benefitsSixthImg.classList.add("move-btt");
      }
    }

    function sixthImageAnimation() {
      if (window.scrollY > 2724) {
        benefitsSixthImg.classList.add("move-btt");
      }
    }

    function fifthImageAnimation() {
      if (window.scrollY > 2534) {
        benefitsFifthImg.classList.add("move-btt");
      }
    }

    function fourthImageAnimation() {
      if (window.scrollY > 2126) {
        benefitsFourthImg.classList.add("move-ltr");
      }
    }

    function thirdImageAnimation() {
      if (window.scrollY > 1690) {
        benefitsThirdImg.classList.add("move-rtl");
      }
    }

    function secondImageAnimation() {
      if (window.scrollY > 1270) {
        benefitsSecondImg.classList.add("move-ltr");
      }
    }

    function firstImageAnimation() {
      if (window.scrollY > 820) {
        benefitsFirstImg.classList.add("move-rtl");
      }
    }

    const largeScreens = () => {
      if (screenwidth >= largeScreenMin && screenwidth <= largeScreenMax) {
        benefitsHeadingAnimation(680);
        firstColumnsAnimation();
        secondColumnsAnimation();
        lastColumnsAnimation();
      }
    };

    const smallScreens = () => {
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

  const processAnimation = () => {
    const screenwidth = window.innerWidth;
    const largeScreenMin = 800;
    const largeScreenMax = 1524;
    const smallScreenMax = 796;

    let scrollThreshold = window.scrollY;

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

  galleryScroll();
  fixedHeader();
  benefitsAnimation();
  processAnimation();
};

const init = () => {
  // Event listener for hamburger menu click
  hamburgerMenu.addEventListener("click", openMenu);
  // Event listener for most web page content to add some animation when the page starts scrolling
  window.addEventListener("scroll", webPageAnimation);
};

init();
