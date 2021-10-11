const toggleMenu = () => {
  const navbar = document.querySelector(".navbar-content");
  const burger = document.querySelector(".burger");
  const ul = document.querySelector(".nav ul");
  const slider = document.querySelector(".slider");

  burger.addEventListener("click", () => {
    navbar.classList.toggle("show-nav");
    if (navbar.className === "navbar-content") {
      ul.style.transition = "left .1s ease-in-out";
      slider.style.transition = "right .1s ease-in-out";
    } else {
      ul.style.transition = "left 1s ease";
      slider.style.transition = "right 2s ease-out";
    }
  });
};
toggleMenu();

//-------------------------------------------------------------------//

$(".slider").slick({
  dots: false,
  infinite: true,
  speed: 1000,
  fade: true,
  cssEase: "linear",
  autoplay: true,
  autoplaySpeed: 3000,
});

//-------------------------------------------------------------------//

const parallaxImg = () => {
  const parallax = document.querySelector(".parallax");

  window.addEventListener("scroll", () => {
    parallax.style.backgroundPositionY = window.scrollY / 2 + "px";
  });
};
parallaxImg();

//-------------------------------------------------------------------//
