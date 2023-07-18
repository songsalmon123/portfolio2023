$(document).ready(function(){


    $(window).scroll(function(){
        let sb = $(this).scrollTop();
        let ctt = $("#content").offset().top;
        console.log(ctt)

        if(sb>=ctt){
          
          $('.submenu').addClass('subfixed')
  
  
        }
        else{
          $('.submenu').removeClass('subfixed')
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
  
    let abc = 0
    // 결과를 표시할 element
    const resultElement = document.getElementById('result');
    // 현재 화면에 표시된 값
    let number = resultElement.innerText;
    
    // 더하기/빼기
    if(type === 'plus') {
      number = parseInt(number) + 1;
    }else if(type === 'minus')  {
      if(number>0){number = parseInt(number) - 1;}
    }
  
  
  
    
    // 결과 출력
    resultElement.innerText = number;
  }
  