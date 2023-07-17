$(document).ready(function(){


    $(window).scroll(function(){

        let sc = $(this).scrollTop();
        let aot = $('#about').offset().top
        console.log(aot)
  
        if(sc>=aot){
          
          $('.hero').addClass('fix')
  
  
        }
        else{
          $('.hero').removeClass('fix')
        }
  
      })

      
    
})
document.addEventListener("DOMContentLoaded", function() {
  var slideshow = document.getElementById("slideshow");
  var images = slideshow.getElementsByTagName("img");
  var previousButton = slideshow.querySelector(".previous");
  var nextButton = slideshow.querySelector(".next");
  var currentImage = 0;

  function showImage(index) {
    for (var i = 0; i < images.length; i++) {
      images[i].classList.remove("active");
    }

    images[index].classList.add("active");
  }

  previousButton.addEventListener("click", function() {
    currentImage = (currentImage - 1 + images.length) % images.length;
    showImage(currentImage);
  });

  nextButton.addEventListener("click", function() {
    currentImage = (currentImage + 1) % images.length;
    showImage(currentImage);
  });

});

function count(type)  {
  // 결과를 표시할 element
  const resultElement = document.getElementById('result');
  // 현재 화면에 표시된 값
  let number = resultElement.innerText;
  
  // 더하기/빼기
  if(type === 'plus') {
    number = parseInt(number) + 1;
  }else if(type === 'minus')  {
    number = parseInt(number) - 1;
  }
  
  // 결과 출력
  resultElement.innerText = number;
}
