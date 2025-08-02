$(window).scroll(function(){
    if($(window).scrollTop() > $('#aboutSec').offset().top){
        $('.navbar').css('backgroundColor' , 'black')
        $(".backToTopButton").fadeIn(1000).css('display','flex')
    }

    else{
        $('.navbar').css('backgroundColor' , 'transparent')
        $(".backToTopButton").fadeOut(1000)
    }
})

$('.links').click(function(e){
    let searchedElement = e.target.getAttribute('href')
    $('html,body').animate({'scrollTop': $(searchedElement).offset().top} , 2000)
})




$('.colors span').eq(0).css('backgroundColor' , 'red')
$('.colors span').eq(1).css('backgroundColor' , 'white')
$('.colors span').eq(2).css('backgroundColor' , 'blue')
$('.colors span').eq(3).css('backgroundColor' , 'green')
$('.colors span').eq(4).css('backgroundColor' , 'yellow')


let divWidth = $('.coloringbox').width()

$('.fa-cog').click(function(){

    if($('.coloringbox').css('left')== '0px'){
        $('.coloringbox').animate({"left" : -divWidth } ,1000)

    }
    else{
        $('.coloringbox').animate({"left" : '0px' } ,1000)
    }

   
})

$('span').click(function(){
    let bg=$(this).css('backgroundColor')
    $('.selectedElement').css('color' , bg )
})




