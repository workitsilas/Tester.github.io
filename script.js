// Constants
const head = document.querySelector(".heading"),
  over = document.querySelector(".overlay"),
  clear = document.querySelector(".intro-text"),
  section = document.querySelectorAll(".unique"),
  navLinks = document.querySelectorAll(".nav-link"),
  divs = document.querySelectorAll(".anim-one"),
  twos = document.querySelectorAll(".two");

// Page on Reload
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

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
  if (window.pageYOffset > 800) {
    bTn.style.opacity = "1";
    bTn.style.transform = "translateY(-10px)";
  } else {
    bTn.style.opacity = "0";
    bTn.style.transform = "translateY(10px)";
  }
}
bTn.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

//Intersection Observers
// First main section animation
let options = {
  threshold: 0.4,
};
let observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
      observer.unobserve(entry.target);
    } else {
      entry.target.classList.remove("fade-in");
    }
  });
}, options);
observer.observe(head);
observer.observe(over);
observer.observe(clear);

// Intersection Observer two
let option_2 = {
  threshold: 0.4,
};
let observer_2 = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
      observer.unobserve(entry.target);
    } else {
      entry.target.classList.remove("fade-in");
    }
  });
}, option_2);
divs.forEach((div) => {
  observer.observe(div);
});
twos.forEach((two) => {
  observer.observe(two);
});
const copy = document.querySelectorAll(".text");

copy.forEach((text) => {
  const butt = text.querySelector("#copy");
  const paragraphh = text.querySelector("span");
  butt.addEventListener("click", () => {
    navigator.clipboard.writeText(paragraphh.textContent);
    butt.innerHTML = "Copied";
    setTimeout(function () {
      butt.innerHTML = '<i class="fa-solid fa-copy fa-1x"></>';
    }, 2000);
  });
});

let newFunction;
const headr = document.querySelector("header"),
  main = document.querySelector("main"),
  footer = document.querySelector("footer");
function myFunction() {
  newFunction = setTimeout(() => {
    document.querySelector(".preloader").style.opacity = 0;
    headr.style.display = "block";
    main.style.display = "block";
    footer.style.display = "block";
  }, 1000);
}
