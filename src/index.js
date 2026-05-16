 const slider = document.getElementById("testimonialSlider");
const slides = document.querySelectorAll("#testimonialSlider > div");

  let index = 0;

  function updateSlider() {
    slider.style.transform = `translateX(-${index * 100}%)`;
  }

  document.getElementById("nextBtn").addEventListener("click", () => {
    index = (index + 1) % slides.length;
    updateSlider();
  });

  document.getElementById("prevBtn").addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    updateSlider();
  });

  // Auto Slide
  setInterval(() => {
    index = (index + 1) % slides.length;
    updateSlider();
  }, 5000);