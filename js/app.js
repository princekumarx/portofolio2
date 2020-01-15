// =============== isotope js for filtering ==========
AOS.init();
// removing class active from all button
const remove = () => {
  let btns = document.querySelectorAll("button");
  for (let i = 0; i < btns.length; i++) {
    btns[i].classList.remove("active");
  }
};

let btns = document.querySelectorAll("button");
// adding class to current button

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(e) {
    remove();
    this.classList.add("active");
    let att = e.target.getAttribute("data-filter");
    console.log(att);
    var elem = document.querySelector(".grid");
    $(".grid").isotope({
      // options

      filter: att
    });
    // var iso = new Isotope( elem, {
    //   // options
    //  filter:att
    // });
  });
}

//   ========== Magnific Popup js for caraousel =================================

$(document).ready(function() {
  $(".test-popup-link").magnificPopup({
    type: "image",
    gallery: { enabled: true }
    // other options
  });
});

let slides = window.innerWidth <= 576 ? 1 : 2;

var swiper = new Swiper(".swiper-container", {
  slidesPerView: slides,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});

// fixed navbar

window.addEventListener("scroll", function() {
  let navbar = document.querySelector("header");
  let scroll_offset = navbar.getBoundingClientRect().height + 50;

  if (window.pageYOffset >= scroll_offset) {
    navbar.classList.add("navbar-change");
  } else {
    navbar.classList.remove("navbar-change");
  }
  console.log(navbar.className);
});
