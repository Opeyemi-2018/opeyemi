//js for theme mode
// Get the moon icon and the logos
const moonIcon = document.getElementById("moon-icon");
const firstLogo = document.getElementById("first-logo");
const secondLogo = document.getElementById("second-logo");

// Function to set the theme
const setTheme = (isDark) => {
  if (isDark) {
    document.body.classList.add("dark-theme");
    moonIcon.classList.replace("fa-moon", "fa-sun");
    secondLogo.style.display = "block";
    firstLogo.style.display = "none";
  } else {
    document.body.classList.remove("dark-theme");
    moonIcon.classList.replace("fa-sun", "fa-moon");
    secondLogo.style.display = "none";
    firstLogo.style.display = "block";
  }
};

// Function to toggle the theme and save to local storage
const toggleTheme = () => {
  const isDarkMode = document.body.classList.contains("dark-theme");
  setTheme(!isDarkMode);
  localStorage.setItem("isDarkMode", !isDarkMode);
};

// Event listener for clicking the moon icon
moonIcon.addEventListener("click", toggleTheme);

// Check local storage for theme preference
const savedTheme = localStorage.getItem("isDarkMode");
if (savedTheme !== null) {
  setTheme(savedTheme === "true");
}

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
    text: `"His ability to turn people's vision into reality is remarkable and excellent"`,
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
