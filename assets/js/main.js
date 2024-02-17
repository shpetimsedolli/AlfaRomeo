var loader = document.getElementById("preloader");

var timeout = setTimeout(function () {
  loader.style.display = "none";
}, 2000);

function scrollToBottom() {
  window.scroll(0, document.body.scrollHeight);
}

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  var scrollToTopbtn = document.getElementById("scrollToTopbtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopbtn.style.display = "block";
  } else {
    scrollToTopbtn.style.display = "none";
  }
}
function scrollToTop() {
  document.body.scrollTop = 0;

  document.documentElement.scrollTop = 0;
}
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});
const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

var typed = new Typed(".auto-type", {
  strings: ["UNLEASH TRUE POWER", "NEW PERFORMANCE", "NEW BEAST"],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
});
