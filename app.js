// Define constants for DOM elements
const header = document.querySelector(".primary-header");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const navList = document.querySelector(".primary-navigation");
const closeNavList = document.querySelector(".close");

const heroGallery = document.querySelector(".hero-gallery");
const firstHeroImage = document.querySelector(".first-image");
const secondHeroImage = document.querySelector(".second-image");
const thirdHeroImage = document.querySelector(".third-image");

const openMenu = () => {
  navList.classList.add("mobile-menu");

  const closeMenu = () => {
    navList.classList.remove("mobile-menu");
  };

  // Event listener for close button click
  closeNavList.addEventListener("click", closeMenu);
};

const galleryScroll = () => {
  if (window.scrollY > 120) {
    // first image
    firstHeroImage.classList.add("move-left");
    // second image
    secondHeroImage.classList.add("rotateX-0", "width-reduce", "move-down");
    // third image
    thirdHeroImage.classList.add("move-right");
  } else {
    // first image
    firstHeroImage.classList.remove("move-left");
    // second image
    secondHeroImage.classList.remove("rotateX-0", "width-reduce", "move-down");
    // third image
    thirdHeroImage.classList.remove("move-right");
  }
};

const init = () => {
  // Event listener for hamburger menu click
  hamburgerMenu.addEventListener("click", openMenu);
  // Event listener for hero gallery scroll
  window.addEventListener("scroll", galleryScroll);
};

init();
