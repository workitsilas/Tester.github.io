window.addEventListener("load", () => {
  window.scrollTo(0, 0);
});
// Back-to-top button
let bTn = document.querySelector("#btt");
window.addEventListener("scroll", backToTop);

function backToTop() {
  if (window.pageYOffset > 600) {
    bTn.style.opacity = "1";
    bTn.style.transform = "translateY(-20px)";
  } else {
    bTn.style.opacity = "0";
    bTn.style.transform = "translateY(20px)";
  }
}
bTn.addEventListener("click", () => window.scrollTo(0, 0));
const cap = document.querySelector(".navbar-toggler");
const capi = document.querySelector("body");
