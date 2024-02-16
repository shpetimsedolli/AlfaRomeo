var loader = document.getElementById("preloader");

var timeout = setTimeout(function () {
  loader.style.display = "none";
}, 2000);
function scrollToBottom() {
  window.scroll(0, document.body.scrollHeight);
}
