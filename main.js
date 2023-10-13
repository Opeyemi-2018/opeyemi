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
