$(document).ready(function(){

  
  
  $(window).scroll(function(){

    let th = $(this).scrollTop();
    let aot = $('#about').offset().top;
    
    if(th>=aot){
      
      $('.hero').addClass('fix')


    }
    else{
      $('.hero').removeClass('fix')
    }

})
$('.nv1').click(function(){

    var offset = $('article').eq(0).offset();
        $('html').animate({scrollTop : offset.top}, 1000);

  });

  $('.nv2').click(function(){

    var offset = $('article').eq(1).offset(); 
        $('html').animate({scrollTop : offset.top}, 1000);

  });

  $('.nv3').click(function(){

    var offset = $('article').eq(2).offset(); 
        $('html').animate({scrollTop : offset.top}, 1000);

  });

  $('.nv4').click(function(){

    var offset = $('article').eq(5).offset(); 
        $('html').animate({scrollTop : offset.top}, 1000);

  });

})