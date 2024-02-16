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
