$(document).ready(function(){


    
    $('.hero_img').mousemove(function(e){

        let x = e.pageX;
        let y = e.pageY;

        console.log(x,y)

        $(this).find('.i1').css({'bottom': 20-(y/30) , 'right': 20-(x/20)})
        $(this).find('.i2').css({'bottom': 20+(y/30) , 'right': 20+(x/20)})
        $(this).find('.i3').css({'bottom': 20+(y/30) , 'right': 20+(x/20)})

    })

})