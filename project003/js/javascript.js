$(document).ready(function(){
    // 사이트를 열자마자 이루어지는 이벤트

    $('.popUp span').click(function(){

        $('.popUp').css({'display':'none'})
    })
  
// ///////////////////////////////////////////////////////////////////////
  
var ii = 0;
setInterval(function(){

ii++;
if(ii==8)ii=0

  //왼쪽으로 이동해라.
  $('.Pt2 li').eq(ii-1).css('left','0').stop().animate({'left':'-100%'},800);
  $('.Pt2 li').eq(ii).css('left','100%').stop().animate({'left':"0"},800)
  
  },2000);



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


$('.Pt1_1 li').click(function(){

    let a =$(this).index()
    console.log(a)

$('.Pt1_2 li').hide()
$('.Pt1_2 li').eq(a).show()

});

// song 클릭
$('.S2 li').click(function(){

    let ss =$(this).index()
    console.log(ss)

$('.S1 li').hide()
$('.S1 li').eq(ss).show()

});

 




})
