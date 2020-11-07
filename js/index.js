window.onload = ()=> {
    setTimeout(()=> {
        TweenMax.to('#curtain', 1.1, { scaleY: 0, ease: Power4.easeInOut});
    }, 3000);

    setTimeout(()=> {
        TweenMax.to('#gif', .5, { opacity: 0});
    }, 2500);
}

jQuery(document).ready(function() {

    var mouseX = 0, mouseY = 0;
    var xp = 0, yp = 0;
     
    $(document).mousemove(function(e){
      mouseX = e.pageX - 25;
      mouseY = e.pageY - 25; 
    });
      
    setInterval(function(){
      xp += ((mouseX - xp)/6);
      yp += ((mouseY - yp)/6);
      $("#circle").css({left: xp +'px', top: yp +'px'});
    }, 20);
  
  });

document.getElementById('about').addEventListener('click', ()=> {
    TweenMax.to('.about-container', 1.1, { x: '0', ease: Power4.easeInOut});
    TweenMax.to('.container', 1.1, { x: '-30vw', ease: Power4.easeInOut});
    TweenMax.to('#circle', .3, { opacity: 0});
    TweenMax.to('#circle', 0, { delay: .3, display: 'none'});
})

document.getElementById('close-about').addEventListener('click', ()=> {
    TweenMax.to('.about-container', 1.1, { x: '30vw', ease: Power4.easeInOut});
    TweenMax.to('.container', 1.1, { x: '0', ease: Power4.easeInOut});
    TweenMax.to('#circle', .3, { delay: 1.1, opacity: 1});
    TweenMax.to('#circle', 0, { display: 'block'});
})

document.getElementById('author-name').addEventListener('click', ()=> {
        TweenMax.to('#curtain', 1.1, { scaleY: 1, ease: Power4.easeInOut});
        setTimeout(()=> {
            location.reload();
        }, 1100);
})

document.getElementById('featured').addEventListener('click', ()=> {
    TweenMax.to('#curtain', 1.1, { scaleY: 1, ease: Power4.easeInOut});
    setTimeout(()=> {
        location.reload();
    }, 1100);
})

document.getElementById('about-container').addEventListener('mouseover', ()=> {
    TweenMax.to('#circle', 0, { zIndex: 10001});
})

document.getElementById('container').addEventListener('mouseover', ()=> {
    TweenMax.to('#circle', 0, { zIndex: 10});
})

document.getElementById('videos').addEventListener('mouseover', ()=> {
    TweenMax.to('#circle', .3, { backgroundColor: 'gray'});
})

document.getElementById('videos').addEventListener('mouseout', ()=> {
    TweenMax.to('#circle', .3, { backgroundColor: 'transparent'});
})

document.getElementById('featured').addEventListener('mouseover', ()=> {
    TweenMax.to('#circle', .3, { backgroundColor: 'gray'});
})

document.getElementById('featured').addEventListener('mouseout', ()=> {
    TweenMax.to('#circle', .3, { backgroundColor: 'transparent'});
})

document.getElementById('photos').addEventListener('mouseover', ()=> {
    TweenMax.to('#circle', .3, { backgroundColor: 'gray'});
})

document.getElementById('photos').addEventListener('mouseout', ()=> {
    TweenMax.to('#circle', .3, { backgroundColor: 'transparent'});
})

document.getElementById('about').addEventListener('mouseover', ()=> {
    TweenMax.to('#circle', .3, { backgroundColor: 'gray'});
})

document.getElementById('about').addEventListener('mouseout', ()=> {
    TweenMax.to('#circle', .3, { backgroundColor: 'transparent'});
})


document.getElementById('alex-vu-animated').addEventListener('mouseover', function(){
    TweenMax.to('#hr-animated', .4, { scaleX: 0});
});

document.getElementById('alex-vu-animated').addEventListener('mouseout', function(){
    TweenMax.to('#hr-animated', .4, { scaleX: 1});
});

document.getElementById('alex-vu-animated').addEventListener('mouseover', ()=> {
    TweenMax.to('#circle', .3, { backgroundColor: '#d84432'});
})

document.getElementById('alex-vu-animated').addEventListener('mouseout', ()=> {
    TweenMax.to('#circle', .3, { backgroundColor: 'transparent'});
})

document.getElementById('fb').addEventListener('mouseover', ()=> {
    TweenMax.to('#circle', .3, { backgroundColor: '#d84432'});
})

document.getElementById('fb').addEventListener('mouseout', ()=> {
    TweenMax.to('#circle', .3, { backgroundColor: 'transparent'});
})

document.getElementById('ig').addEventListener('mouseover', ()=> {
    TweenMax.to('#circle', .3, { backgroundColor: '#d84432'});
})

document.getElementById('ig').addEventListener('mouseout', ()=> {
    TweenMax.to('#circle', .3, { backgroundColor: 'transparent'});
})

document.getElementById('author-name').addEventListener('mouseover', ()=> {
    TweenMax.to('#circle', .3, { backgroundColor: '#d84432'});
})

document.getElementById('author-name').addEventListener('mouseout', ()=> {
    TweenMax.to('#circle', .3, { backgroundColor: 'transparent'});
})
//
document.getElementById('pro-img-1').addEventListener('mouseover', ()=> {
    TweenMax.to('#circle', .3, { backgroundColor: '#41fc29'});
    TweenMax.to('#pro-img-1', 0.4, { webkitTextStroke: '0px', webkitTextFillColor: '#fc2941'});
})

document.getElementById('pro-img-1').addEventListener('mouseout', ()=> {
    TweenMax.to('#circle', .3, { backgroundColor: 'transparent'});
    TweenMax.to('#pro-img-1', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});
})
//
document.getElementById('pro-img-2').addEventListener('mouseover', ()=> {
    TweenMax.to('#circle', .3, { backgroundColor: '#9660e2'});
    TweenMax.to('#pro-img-2', 0.4, { webkitTextStroke: '0px', webkitTextFillColor: '#e2bc60'});
})

document.getElementById('pro-img-2').addEventListener('mouseout', ()=> {
    TweenMax.to('#circle', .3, { backgroundColor: 'transparent'});
    TweenMax.to('#pro-img-2', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});
})
//
document.getElementById('pro-img-3').addEventListener('mouseover', ()=> {
    TweenMax.to('#circle', .3, { backgroundColor: 'transparent'});
    TweenMax.to('#pro-img-3', 0.4, { webkitTextStroke: '0px', webkitTextFillColor: 'black'});
})

document.getElementById('pro-img-3').addEventListener('mouseout', ()=> {
    TweenMax.to('#circle', .3, { backgroundColor: 'transparent'});
    TweenMax.to('#pro-img-3', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});
})
//
document.getElementById('pro-img-4').addEventListener('mouseover', ()=> {
    TweenMax.to('#circle', .3, { backgroundColor: '#ac3836'});
    TweenMax.to('#pro-img-4', 0.4, { webkitTextStroke: '0px', webkitTextFillColor: '#36ac3e'});
})

document.getElementById('pro-img-4').addEventListener('mouseout', ()=> {
    TweenMax.to('#circle', .3, { backgroundColor: 'transparent'});
    TweenMax.to('#pro-img-4', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});
})
//
document.getElementById('pro-img-5').addEventListener('mouseover', ()=> {
    TweenMax.to('#circle', .3, { backgroundColor: '#5f861d'});
    TweenMax.to('#pro-img-5', 0.4, { webkitTextStroke: '0px', webkitTextFillColor: '#861d5f'});
})

document.getElementById('pro-img-5').addEventListener('mouseout', ()=> {
    TweenMax.to('#circle', .3, { backgroundColor: 'transparent'});
    TweenMax.to('#pro-img-5', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});
})
//
document.getElementById('pro-img-6').addEventListener('mouseover', ()=> {
    TweenMax.to('#circle', .3, { backgroundColor: '#a2705f'});
    TweenMax.to('#pro-img-6', 0.4, { webkitTextStroke: '0px', webkitTextFillColor: '#5fa0a2'});
})

document.getElementById('pro-img-6').addEventListener('mouseout', ()=> {
    TweenMax.to('#circle', .3, { backgroundColor: 'transparent'});
    TweenMax.to('#pro-img-6', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});
})
//
document.getElementById('pro-img-7').addEventListener('mouseover', ()=> {
    TweenMax.to('#circle', .3, { backgroundColor: '#79e671'});
    TweenMax.to('#pro-img-7', 0.4, { webkitTextStroke: '0px', webkitTextFillColor: '#e67179'});
})

document.getElementById('pro-img-7').addEventListener('mouseout', ()=> {
    TweenMax.to('#circle', .3, { backgroundColor: 'transparent'});
    TweenMax.to('#pro-img-7', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});
})
//
document.getElementById('pro-img-8').addEventListener('mouseover', ()=> {
    TweenMax.to('#circle', .3, { backgroundColor: '#ece9c2'});
    TweenMax.to('#pro-img-8', 0.4, { webkitTextStroke: '0px', webkitTextFillColor: '#e5c2ec'});
})

document.getElementById('pro-img-8').addEventListener('mouseout', ()=> {
    TweenMax.to('#circle', .3, { backgroundColor: 'transparent'});
    TweenMax.to('#pro-img-8', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});
})
//
document.getElementById('pro-img-9').addEventListener('mouseover', ()=> {
    TweenMax.to('#circle', .3, { backgroundColor: '#40fae7'});
    TweenMax.to('#pro-img-9', 0.4, { webkitTextStroke: '0px', webkitTextFillColor: '#fa6a40'});
})

document.getElementById('pro-img-9').addEventListener('mouseout', ()=> {
    TweenMax.to('#circle', .3, { backgroundColor: 'transparent'});
    TweenMax.to('#pro-img-9', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});
})
//
document.getElementById('pro-img-10').addEventListener('mouseover', ()=> {
    TweenMax.to('#circle', .3, { backgroundColor: 'black'});
    TweenMax.to('#pro-img-10', 0.4, { webkitTextStroke: '0px', webkitTextFillColor: 'gray'});
})

document.getElementById('pro-img-10').addEventListener('mouseout', ()=> {
    TweenMax.to('#circle', .3, { backgroundColor: 'transparent'});
    TweenMax.to('#pro-img-10', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});
})


document.getElementById('pro-img-1').addEventListener('click', function(){
    TweenMax.to('#pro-img-1', 0.4, { webkitTextStroke: '0px', webkitTextFillColor: '#fc2941'});
    TweenMax.to('#pro-img-2', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});
    TweenMax.to('#pro-img-3', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});
    TweenMax.to('#pro-img-4', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});
    TweenMax.to('#pro-img-5', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});
    TweenMax.to('#pro-img-6', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});
    TweenMax.to('#pro-img-7', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});
    TweenMax.to('#pro-img-8', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});
    TweenMax.to('#pro-img-9', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});
    TweenMax.to('#pro-img-10', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});

    TweenMax.to('#home-img', 0, { display: 'block'});
    TweenMax.to('#home-img-2', 0, { display: 'none'});
    TweenMax.to('#home-img-3', 0, { display: 'none'});
    TweenMax.to('#home-img-4', 0, { display: 'none'});
    TweenMax.to('#home-img-5', 0, { display: 'none'});
    TweenMax.to('#home-img-6', 0, { display: 'none'});
    TweenMax.to('#home-img-7', 0, { display: 'none'});
    TweenMax.to('#home-img-8', 0, { display: 'none'});
    TweenMax.to('#home-img-9', 0, { display: 'none'});
    TweenMax.to('#home-img-10', 0, { display: 'none'});
});

document.getElementById('pro-img-2').addEventListener('click', function(){
    TweenMax.to('#pro-img-2', 0.4, { webkitTextStroke: '0px', webkitTextFillColor: '#e2bc60'});
    TweenMax.to('#pro-img-1', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});
    TweenMax.to('#pro-img-3', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});
    TweenMax.to('#pro-img-4', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});
    TweenMax.to('#pro-img-5', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});
    TweenMax.to('#pro-img-6', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});
    TweenMax.to('#pro-img-7', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});
    TweenMax.to('#pro-img-8', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});
    TweenMax.to('#pro-img-9', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});
    TweenMax.to('#pro-img-10', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});

    TweenMax.to('#home-img', 0, { display: 'none'});
    TweenMax.to('#home-img-2', 0, { display: 'block'});
    TweenMax.to('#home-img-3', 0, { display: 'none'});
    TweenMax.to('#home-img-4', 0, { display: 'none'});
    TweenMax.to('#home-img-5', 0, { display: 'none'});
    TweenMax.to('#home-img-6', 0, { display: 'none'});
    TweenMax.to('#home-img-7', 0, { display: 'none'});
    TweenMax.to('#home-img-8', 0, { display: 'none'});
    TweenMax.to('#home-img-9', 0, { display: 'none'});
    TweenMax.to('#home-img-10', 0, { display: 'none'});
});

document.getElementById('pro-img-3').addEventListener('click', function(){
    TweenMax.to('#pro-img-3', 0.4, { webkitTextStroke: '0px', webkitTextFillColor: 'black'});
    TweenMax.to('#pro-img-1', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});
    TweenMax.to('#pro-img-2', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});
    TweenMax.to('#pro-img-4', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});
    TweenMax.to('#pro-img-5', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});
    TweenMax.to('#pro-img-6', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});
    TweenMax.to('#pro-img-7', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});
    TweenMax.to('#pro-img-8', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});
    TweenMax.to('#pro-img-9', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});
    TweenMax.to('#pro-img-10', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});

    TweenMax.to('#home-img', 0, { display: 'none'});
    TweenMax.to('#home-img-2', 0, { display: 'none'});
    TweenMax.to('#home-img-3', 0, { display: 'block'});
    TweenMax.to('#home-img-4', 0, { display: 'none'});
    TweenMax.to('#home-img-5', 0, { display: 'none'});
    TweenMax.to('#home-img-6', 0, { display: 'none'});
    TweenMax.to('#home-img-7', 0, { display: 'none'});
    TweenMax.to('#home-img-8', 0, { display: 'none'});
    TweenMax.to('#home-img-9', 0, { display: 'none'});
    TweenMax.to('#home-img-10', 0, { display: 'none'});
});

document.getElementById('pro-img-4').addEventListener('click', function(){
    TweenMax.to('#pro-img-4', 0.4, { webkitTextStroke: '0px', webkitTextFillColor: '#36ac3e'});
    TweenMax.to('#pro-img-1', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});
    TweenMax.to('#pro-img-2', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});
    TweenMax.to('#pro-img-3', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});
    TweenMax.to('#pro-img-5', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});
    TweenMax.to('#pro-img-6', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});
    TweenMax.to('#pro-img-7', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});
    TweenMax.to('#pro-img-8', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});
    TweenMax.to('#pro-img-9', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});
    TweenMax.to('#pro-img-10', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});

    TweenMax.to('#home-img', 0, { display: 'none'});
    TweenMax.to('#home-img-2', 0, { display: 'none'});
    TweenMax.to('#home-img-3', 0, { display: 'none'});
    TweenMax.to('#home-img-4', 0, { display: 'block'});
    TweenMax.to('#home-img-5', 0, { display: 'none'});
    TweenMax.to('#home-img-6', 0, { display: 'none'});
    TweenMax.to('#home-img-7', 0, { display: 'none'});
    TweenMax.to('#home-img-8', 0, { display: 'none'});
    TweenMax.to('#home-img-9', 0, { display: 'none'});
    TweenMax.to('#home-img-10', 0, { display: 'none'});
});

document.getElementById('pro-img-5').addEventListener('click', function(){
    TweenMax.to('#pro-img-5', 0.4, { webkitTextStroke: '0px', webkitTextFillColor: '#861d5f'});
    TweenMax.to('#pro-img-1', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});
    TweenMax.to('#pro-img-2', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});
    TweenMax.to('#pro-img-3', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});
    TweenMax.to('#pro-img-4', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});
    TweenMax.to('#pro-img-6', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});
    TweenMax.to('#pro-img-7', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});
    TweenMax.to('#pro-img-8', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});
    TweenMax.to('#pro-img-9', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});
    TweenMax.to('#pro-img-10', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});

    TweenMax.to('#home-img', 0, { display: 'none'});
    TweenMax.to('#home-img-2', 0, { display: 'none'});
    TweenMax.to('#home-img-3', 0, { display: 'none'});
    TweenMax.to('#home-img-4', 0, { display: 'none'});
    TweenMax.to('#home-img-5', 0, { display: 'block'});
    TweenMax.to('#home-img-6', 0, { display: 'none'});
    TweenMax.to('#home-img-7', 0, { display: 'none'});
    TweenMax.to('#home-img-8', 0, { display: 'none'});
    TweenMax.to('#home-img-9', 0, { display: 'none'});
    TweenMax.to('#home-img-10', 0, { display: 'none'});
});

document.getElementById('pro-img-6').addEventListener('click', function(){
    TweenMax.to('#pro-img-6', 0.4, { webkitTextStroke: '0px', webkitTextFillColor: '#5fa0a2'});
    TweenMax.to('#pro-img-1', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});
    TweenMax.to('#pro-img-2', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});
    TweenMax.to('#pro-img-3', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});
    TweenMax.to('#pro-img-4', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});
    TweenMax.to('#pro-img-5', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});
    TweenMax.to('#pro-img-7', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});
    TweenMax.to('#pro-img-8', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});
    TweenMax.to('#pro-img-9', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});
    TweenMax.to('#pro-img-10', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});

    TweenMax.to('#home-img', 0, { display: 'none'});
    TweenMax.to('#home-img-2', 0, { display: 'none'});
    TweenMax.to('#home-img-3', 0, { display: 'none'});
    TweenMax.to('#home-img-4', 0, { display: 'none'});
    TweenMax.to('#home-img-5', 0, { display: 'none'});
    TweenMax.to('#home-img-6', 0, { display: 'block'});
    TweenMax.to('#home-img-7', 0, { display: 'none'});
    TweenMax.to('#home-img-8', 0, { display: 'none'});
    TweenMax.to('#home-img-9', 0, { display: 'none'});
    TweenMax.to('#home-img-10', 0, { display: 'none'});
});

document.getElementById('pro-img-7').addEventListener('click', function(){
    TweenMax.to('#pro-img-7', 0.4, { webkitTextStroke: '0px', webkitTextFillColor: '#e67179'});
    TweenMax.to('#pro-img-1', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});
    TweenMax.to('#pro-img-2', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});
    TweenMax.to('#pro-img-3', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});
    TweenMax.to('#pro-img-4', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});
    TweenMax.to('#pro-img-5', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});
    TweenMax.to('#pro-img-6', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});
    TweenMax.to('#pro-img-8', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});
    TweenMax.to('#pro-img-9', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});
    TweenMax.to('#pro-img-10', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});

    TweenMax.to('#home-img', 0, { display: 'none'});
    TweenMax.to('#home-img-2', 0, { display: 'none'});
    TweenMax.to('#home-img-3', 0, { display: 'none'});
    TweenMax.to('#home-img-4', 0, { display: 'none'});
    TweenMax.to('#home-img-5', 0, { display: 'none'});
    TweenMax.to('#home-img-6', 0, { display: 'none'});
    TweenMax.to('#home-img-7', 0, { display: 'block'});
    TweenMax.to('#home-img-8', 0, { display: 'none'});
    TweenMax.to('#home-img-9', 0, { display: 'none'});
    TweenMax.to('#home-img-10', 0, { display: 'none'});
});

document.getElementById('pro-img-8').addEventListener('click', function(){
    TweenMax.to('#pro-img-8', 0.4, { webkitTextStroke: '0px', webkitTextFillColor: '#e5c2ec'});
    TweenMax.to('#pro-img-1', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});
    TweenMax.to('#pro-img-2', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});
    TweenMax.to('#pro-img-3', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});
    TweenMax.to('#pro-img-4', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});
    TweenMax.to('#pro-img-5', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});
    TweenMax.to('#pro-img-6', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});
    TweenMax.to('#pro-img-7', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});
    TweenMax.to('#pro-img-9', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});
    TweenMax.to('#pro-img-10', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});

    TweenMax.to('#home-img', 0, { display: 'none'});
    TweenMax.to('#home-img-2', 0, { display: 'none'});
    TweenMax.to('#home-img-3', 0, { display: 'none'});
    TweenMax.to('#home-img-4', 0, { display: 'none'});
    TweenMax.to('#home-img-5', 0, { display: 'none'});
    TweenMax.to('#home-img-6', 0, { display: 'none'});
    TweenMax.to('#home-img-7', 0, { display: 'none'});
    TweenMax.to('#home-img-8', 0, { display: 'block'});
    TweenMax.to('#home-img-9', 0, { display: 'none'});
    TweenMax.to('#home-img-10', 0, { display: 'none'});
});

document.getElementById('pro-img-9').addEventListener('click', function(){
    TweenMax.to('#pro-img-9', 0.4, { webkitTextStroke: '0px', webkitTextFillColor: '#fa6a40'});
    TweenMax.to('#pro-img-1', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});
    TweenMax.to('#pro-img-2', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});
    TweenMax.to('#pro-img-3', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});
    TweenMax.to('#pro-img-4', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});
    TweenMax.to('#pro-img-5', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});
    TweenMax.to('#pro-img-6', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});
    TweenMax.to('#pro-img-7', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});
    TweenMax.to('#pro-img-8', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});
    TweenMax.to('#pro-img-10', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});

    TweenMax.to('#home-img', 0, { display: 'none'});
    TweenMax.to('#home-img-2', 0, { display: 'none'});
    TweenMax.to('#home-img-3', 0, { display: 'none'});
    TweenMax.to('#home-img-4', 0, { display: 'none'});
    TweenMax.to('#home-img-5', 0, { display: 'none'});
    TweenMax.to('#home-img-6', 0, { display: 'none'});
    TweenMax.to('#home-img-7', 0, { display: 'none'});
    TweenMax.to('#home-img-8', 0, { display: 'none'});
    TweenMax.to('#home-img-9', 0, { display: 'block'});
    TweenMax.to('#home-img-10', 0, { display: 'none'});
});

document.getElementById('pro-img-10').addEventListener('click', function(){
    TweenMax.to('#pro-img-10', 0.4, { webkitTextStroke: '0px', webkitTextFillColor: 'gray'});
    TweenMax.to('#pro-img-1', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});
    TweenMax.to('#pro-img-2', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});
    TweenMax.to('#pro-img-3', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});
    TweenMax.to('#pro-img-4', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});
    TweenMax.to('#pro-img-5', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});
    TweenMax.to('#pro-img-6', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});
    TweenMax.to('#pro-img-7', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});
    TweenMax.to('#pro-img-8', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});
    TweenMax.to('#pro-img-9', 0.4, { webkitTextStroke: '1px black', webkitTextFillColor: '#ebebeb'});

    TweenMax.to('#home-img', 0, { display: 'none'});
    TweenMax.to('#home-img-2', 0, { display: 'none'});
    TweenMax.to('#home-img-3', 0, { display: 'none'});
    TweenMax.to('#home-img-4', 0, { display: 'none'});
    TweenMax.to('#home-img-5', 0, { display: 'none'});
    TweenMax.to('#home-img-6', 0, { display: 'none'});
    TweenMax.to('#home-img-7', 0, { display: 'none'});
    TweenMax.to('#home-img-8', 0, { display: 'none'});
    TweenMax.to('#home-img-9', 0, { display: 'none'});
    TweenMax.to('#home-img-10', 0, { display: 'block'});
});