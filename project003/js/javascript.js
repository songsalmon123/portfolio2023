$(document).ready(function(){
    // 사이트를 열자마자 이루어지는 이벤트

    $('.popUp span').click(function(){

        $('.popUp').css({'display':'none'})
    })
    


})

const videoContainer = document.querySelector('.video-container');
const videoSlider = document.querySelector('.video-slider');
const videoSlides = document.querySelectorAll('.video-slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentIndex = 0;

function showSlide(index) {
  videoSlider.style.transform = `translateX(-${index * 100}%)`;
}

function slidePrev() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = videoSlides.length - 1;
  }
  showSlide(currentIndex);
}

function slideNext() {
  currentIndex++;
  if (currentIndex >= videoSlides.length) {
    currentIndex = 0;
  }
  showSlide(currentIndex);
}

prevBtn.addEventListener('click', slidePrev);
nextBtn.addEventListener('click', slideNext);




  