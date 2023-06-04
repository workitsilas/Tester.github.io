// Constants
const head = document.querySelector(".heading"),
  over = document.querySelector(".overlay"),
  clear = document.querySelector(".intro-text"),
  section = document.querySelectorAll("section"),
  navLinks = document.querySelectorAll(".nav-link");

// Page on Reload
window.addEventListener("load", () => {
  window.scrollTo(0, 0);
});

// Navbar closing on outside click - Jquery
$(document).ready(function () {
  $(document).click(function () {
    $(".navbar-collapse").collapse("hide");
  });
  $(".navbar").on("click", "a", function () {
    $(".navbar a.active").removeClass("active");
    $(this).addClass("active");
  });
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
bTn.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

//Intersection Observers
// First main section animation
let options = {
  threshold: 0.6,
};
let observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
    } else {
      entry.target.classList.remove("fade-in");
      // observer.unobserve(entry.target);
    }
  });
}, options);
observer.observe(head);
observer.observe(over);
observer.observe(clear);

//Active Nav Links
let optionss = {
  threshold: 0.5,
};
let observerr = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      worKing(entry.target);
    }
  });
}, optionss);
function worKing(sec) {
  let current = sec.getAttribute("id");
  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.href.includes(current)) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}
section.forEach((sec) => {
  observerr.observe(sec);
});
