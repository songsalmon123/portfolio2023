$(document).ready(function(){

  $(window).scroll(function(){

    let sc = $(this).scrollTop();
    let aot = $('#about').offset().top;
    
    if(sc>=aot){
      
      $('.hero').addClass('fix')


    }
    else{
      $('.hero').removeClass('fix')
    }
})


})