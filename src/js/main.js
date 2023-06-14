const burgerBtn = document.querySelector(".burger");
const barsIcon = document.querySelector(".fa-bars");
const xIcon = document.querySelector(".fa-times");
const nav = document.querySelector(".nav-mobile__items");
const footerYear = document.querySelector(".footer__year");


const handleCurrentYear = () => {
  const year =(new Date).getFullYear();
  footerYear.innerText = year;
}


const handleNav = () => {
  nav.classList.toggle("active")
  burgerBtn.classList.toggle("active")
  barsIcon.classList.toggle("hide")
  xIcon.classList.toggle("hide")
}



handleCurrentYear();
burgerBtn.addEventListener("click", handleNav);


// burgerBtn.addEventListener("click", () => {
//   burgerBtn.classList.toggle("active");
//   nav.classList.toggle("open");
//   body.classList.toggle("fixed");
//   body.classList.toggle("blur");
// });