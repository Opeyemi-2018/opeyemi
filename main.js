let firstLogo = document.getElementById("first-logo");
let secondLogo = document.getElementById("second-logo");

//js for theme mode
let moonIcon = document.getElementById("moon-icon");
moonIcon.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  if (moonIcon.classList.contains("fa-moon")) {
    moonIcon.classList.replace("fa-moon", "fa-sun");
    secondLogo.style.display = "block";
    firstLogo.style.display = "none";
  } else {
    moonIcon.classList.replace("fa-sun", "fa-moon");
    secondLogo.style.display = "none";
    firstLogo.style.display = "block";
  }
});

//s for navbar
let openBar = document.querySelector(".fa-bars");
let middleNav = document.querySelector(".middle-nav");

openBar.addEventListener("click", () => {
  if (openBar.classList.contains("fa-bars")) {
    middleNav.style.maxHeight = "20rem";
    openBar.classList.replace("fa-bars", "fa-times");
  } else {
    openBar.classList.replace("fa-times", "fa-bars");
    middleNav.style.maxHeight = "0";
  }
});

//js for testimonial slider
let image = document.getElementById("img");
let testText = document.querySelector(".test-text");
let name = document.getElementById("name");

let nextBtn = document.querySelector(".fa-chevron-right");
let prevBtn = document.querySelector(".fa-chevron-left");

let testimonials = [
  {
    clientName: "Micheal Ikiebe",
    clientPhoto: "images/micheal-3.jpg",
    text: `"He consistently deliver pixel-perfect designs that exceeded people's expectation"`,
  },

  {
    clientName: "Asaolu. E",
    clientPhoto: "images/asaolu-2.jpg",
    text: `"His design is not only looking stunning but also improve the overall user experience"`,
  },

  {
    clientName: "Johnpaul. N",
    clientPhoto: "images/johnpaul-2.jpg",
    text: `"His ability to turn people's vision into reality is remarkable"`,
  },

  {
    clientName: "Simon",
    clientPhoto: "images/simon.png",
    text: `"He has keen eye on design and a deep understanding of the latest web technology"`,
  },
];

let idx = 0;

window.addEventListener("DOMContentLoaded", () => {
  showTestimonial();
});

function showTestimonial() {
  let item = testimonials[idx];
  image.src = item.clientPhoto;
  testText.innerHTML = item.text;
  name.innerHTML = item.clientName;
}

nextBtn.addEventListener("click", () => {
  idx++;
  if (idx === testimonials.length) {
    idx = 0;
  }
  showTestimonial();
});

prevBtn.addEventListener("click", () => {
  idx--;
  if (idx < 0) {
    idx = testimonials.length - 1;
  }
  showTestimonial();
});
