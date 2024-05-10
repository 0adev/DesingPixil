// Define constants for DOM elements
// header
const header = document.querySelector(".primary-header");
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

const openMenu = () => {
  navList.classList.add("mobile-menu");

  const closeMenu = () => {
    navList.classList.remove("mobile-menu");
  };

  // Event listener for close button click
  closeNavList.addEventListener("click", closeMenu);
};

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

const imageAnimation = () => {
  const benefitsFirstImg = benefitsImgs[0];
  const benefitsSecondImg = benefitsImgs[1];
  const benefitsThirdImg = benefitsImgs[2];
  const benefitsFourthImg = benefitsImgs[3];
  const benefitsFifthImg = benefitsImgs[4];
  const benefitsSixthImg = benefitsImgs[5];

  const screenwidth = window.innerWidth; // Get the width of the viewport
  const largeScreenMin = 800;
  const largeScreenMax = 1524;
  const smallScreenMax = 796;

  console.log(window.scrollY);
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
    if (window.scrollY > 2824) {
      benefitsSixthImg.classList.add("move-btt");
    }
  }

  function fifthImageAnimation() {
    if (window.scrollY > 2634) {
      benefitsFifthImg.classList.add("move-btt");
    }
  }

  function fourthImageAnimation() {
    if (window.scrollY > 2226) {
      benefitsFourthImg.classList.add("move-ltr");
    }
  }

  function thirdImageAnimation() {
    if (window.scrollY > 1836) {
      benefitsThirdImg.classList.add("move-rtl");
    }
  }

  function secondImageAnimation() {
    if (window.scrollY > 1420) {
      benefitsSecondImg.classList.add("move-ltr");
    }
  }

  function firstImageAnimation() {
    if (window.scrollY > 1070) {
      benefitsFirstImg.classList.add("move-rtl");
    }
  }

  const largeScreens = () => {
    if (screenwidth >= largeScreenMin && screenwidth <= largeScreenMax) {
      firstColumnsAnimation();
      secondColumnsAnimation();
      lastColumnsAnimation();
    }
  };

  const smallScreens = () => {
    if (screenwidth <= smallScreenMax) {
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

const init = () => {
  // Event listener for hamburger menu click
  hamburgerMenu.addEventListener("click", openMenu);
  // Event listener for hero gallery scroll
  window.addEventListener("scroll", galleryScroll);
  // Event listener for benefits images
  window.addEventListener("scroll", imageAnimation);
};

init();
