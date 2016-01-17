function selectMenu(id) {
    $(id).scrollTo(); 
}
function bulb_on(){
    var image = document.getElementById('bulb');
    image.src ='img/bulb_glow.png'
    image.style.animated
    image.style.rotateIn
}
function bulb_out(){
    var image = document.getElementById('bulb')
    image.src ='img/bulb.png'
}
function dnxh_on(){
    var image = document.getElementById('dnxh');
    image.src ='img/dnxh_glow.png';
    image.style.animated
    image.style.rotateIn
}
function dnxh_out(){
    var image = document.getElementById('dnxh')
    image.src ='img/dnxh.png'

}
function group_on(){
    var image = document.getElementById('group');
    image.src ='img/group_glow.png';
    image.addClass("animated bounceInUp")
}
function group_out(){
    var image = document.getElementById('group')
    image.src ='img/group.png'
}
function teaching_on(){
    var image = document.getElementById('teaching');
    image.src ='img/teaching_glow.png'
}
function teaching_out(){
    var image = document.getElementById('teaching')
    image.src ='img/teaching.png'
}
function money_on(){
    var image = document.getElementById('money');
    image.src ='img/money_glow.png'
}
function money_out(){
    var image = document.getElementById('money')
    image.src ='img/money.png'
}
$(document).ready(function(){
        $('.owl-carousel').owlCarousel({
            items:1,
            loop:true,
            center:true,
            autoplay:true,
            URLhashListener:true,
            autoplayHoverPause:true,
            startPosition: 'URLHash'
        });
    });
