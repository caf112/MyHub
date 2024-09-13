function openModal() {
    document.getElementById("lightboxModal").style.display = "block";
  }
  
  function closeModal() {
    document.getElementById("lightboxModal").style.display = "none";
  }
  
  let slideIndex = 1;
  showSlides(slideIndex);
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function changeSlide(n) {
    showSlides(slideIndex += n);
  }
  
  function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
  }
  