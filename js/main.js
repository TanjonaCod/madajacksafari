    // === SLIDER avec fond dynamique ===
    const slides = document.querySelectorAll(".slide");
    const container = document.querySelector(".container.miova");
    let currentSlide = 0;
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === index) {
          slide.classList.add("active");
  
          const img = slide.querySelector("img");
          if (img) {
            const src = img.getAttribute("src");
            container.style.backgroundImage = `url('${src}')`;
            container.style.backgroundSize = "cover";
            container.style.backgroundPosition = "center";
            container.style.transition = "background-image 1s ease-in-out";
          }
        }
      });
    }
  
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }
  
    showSlide(currentSlide);
    setInterval(nextSlide, 3000);
  
    // === MENU BURGER ===
    const burger = document.getElementById("burger");
    const nav = document.querySelector(".nav1");
  
    burger.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  
    // === FADE-IN REJOUABLE ===
    const fadeElements = document.querySelectorAll(".fade-in");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    }, {
      threshold: 0.1,
    });
  
    fadeElements.forEach(el => observer.observe(el));


    new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      autoplay:{
        delay: 3000,
        disableOnInteraction: false,
        reverseDirection: true, 
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,

      },
      breakpoints: {
        640: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });






// testimonial

const testimonialSlider = document.getElementById('testimonial-slides');
const testimonialSlides = testimonialSlider.children;
const totalTestimonialSlides = testimonialSlides.length;
let currentTestimonialIndex = 0;

function showTestimonialSlide(index) {
  testimonialSlider.style.transform = `translateX(-${index * 100}%)`;
}

function nextTestimonialSlide() {
  currentTestimonialIndex = (currentTestimonialIndex + 1) % totalTestimonialSlides;
  showTestimonialSlide(currentTestimonialIndex);
}

function prevTestimonialSlide() {
  currentTestimonialIndex = (currentTestimonialIndex - 1 + totalTestimonialSlides) % totalTestimonialSlides;
  showTestimonialSlide(currentTestimonialIndex);
}

setInterval(nextTestimonialSlide, 6000);