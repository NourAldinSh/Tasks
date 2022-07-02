/**** Particles JS For Hero Section ****/
particlesJS.load("particles-js", "js/particles.json", function () {
  console.log("particles.js config done");
});
// parteners slider
$(".slider").slick({
  dots: false,
  rtl: true,
  infinite: true,
  autoplay: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 580,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
// Stats counter on scroll
let nums = document.querySelectorAll(".statistics-item .number");
let section = document.querySelector(".statistics-list");
let started = false; // Function Started ? No

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}
// Testimonials Slider
const mobileBreakpoint = 768;
let iScreenWidth = document.body.getBoundingClientRect().width;
initSlider();
function initSlider() {
  const sliders = document.querySelectorAll(".js-mobile-slider");
  let aFlickitySliders = [];
  function initFlickity(slider) {
    return new Flickity(slider, {
      cellAlign: "left",
      prevNextButtons: false,
    });
  }
  for (let i = 0; i < sliders.length; i++) {
    const slider = sliders[i];
    if (iScreenWidth < mobileBreakpoint) {
      let oSlider = initFlickity(slider);
      aFlickitySliders.push(oSlider);
    }
  }
  window.addEventListener("resize", () => {
    iScreenWidth = document.body.getBoundingClientRect().width;
    for (let i = 0; i < sliders.length; i++) {
      const oSlider = sliders[i];
      const oFlickSlider = aFlickitySliders[i];
      if (iScreenWidth < mobileBreakpoint) {
        if (!oFlickSlider) {
          let createdFlickSlider = initFlickity(oSlider);
          aFlickitySliders.push(createdFlickSlider);
        }
      } else {
        if (oFlickSlider) {
          oFlickSlider.destroy();
          aFlickitySliders.splice(0, 1);
        }
      }
    }
  });
}
