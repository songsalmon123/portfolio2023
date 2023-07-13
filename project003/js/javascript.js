$(document).ready(function(){
    // 사이트를 열자마자 이루어지는 이벤트

    $('.popUp span').click(function(){

        $('.popUp').css({'display':'none'})
    })
  
// ///////////////////////////////////////////////////////////////////////



 $(window).scroll(function(){

    let sc = $(this).scrollTop();

    console.log(sc)

    $('.Pt2 ul').css({'margin-left': (-240-sc)+'px'});

    let ys = $(this).scrollTop();

    $('.vid ul').css({'margin-left': (-700-ys)+'px'})
 })

 var Pt1_11 = document.getElementsByClassName("Pt1_11");

 function handleClick(event) {
    console.log(event.target);
    // console.log(this);
    // 콘솔창을 보면 둘다 동일한 값이 나온다

    console.log(event.target.classList);

    if (event.target.classList[1] === "clicked") {
    event.target.classList.remove("clicked");
    } else {
    for (var i = 0; i < Pt1_11.length; i++) {
        Pt1_11[i].classList.remove("clicked");
    }

    event.target.classList.add("clicked");
    }}

function init() {
    for (var i = 0; i < Pt1_11.length; i++) {
        Pt1_11[i].addEventListener("click", handleClick);
    }}

init();


})
