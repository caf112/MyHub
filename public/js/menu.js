$(document).ready(function() {
    let menuToggle = document.querySelector(".menuToggle");
    let menu = document.querySelector(".menu");

    menuToggle.onclick = function () {
      menu.classList.toggle("active");
      toggleSound.currentTime = 0; 
    };

    $("a").mouseenter(function() {
      hoverSound.currentTime = 0; 
      hoverSound.play();
    });
  });