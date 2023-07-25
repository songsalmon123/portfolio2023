$(document).ready(function(){

    $('.popUp span').click(function(){

        $('.popUp').css({'display':'none'})
    })
  
    //변수지정
     var i = 0;
   
     setInterval(function(){
    
     i++;
     if(i==3)i=0;
   
     $('.slide li').eq(i-1).css('top',0).stop().animate({'top':'-100%'},800);
     $('.slide li').eq(i).css('top','100%').stop().animate({'top':"0"},800)
     
     },3000);

     $('.listTitle li').click(function(){

        let a =$(this).index()
        console.log(a)
    
    $('.listBox ul').hide()
    $('.listBox ul').eq(a).show()
    
    });

    })