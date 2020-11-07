window.onbeforeunload = function () {
    window.scrollTo({ top: 0 });
}

window.onload = ()=> {
    setTimeout(()=> {
        TweenMax.to('#curtain', 1.1, { scaleY: 0, ease: Power4.easeInOut});
    }, 3000);

    setTimeout(()=> {
        TweenMax.to('#gif', .5, { opacity: 0});
    }, 2500);

    window.scrollTo({ top: 0 });
}

document.getElementById('back').addEventListener('click', ()=> {
    TweenMax.to('#curtain', 1.1, { scaleY: 1, ease: Power4.easeInOut});
    setTimeout(()=> {
        document.location.href = 'index.html'
    }, 1100)
})

// jQuery(document).ready(function() {

//     var mouseX = 0, mouseY = 0;
//     var xp = 0, yp = 0;
     
//     $(document).mousemove(function(e){
//       mouseX = e.pageX - 25;
//       mouseY = e.pageY - 25; 
//     });
      
//     setInterval(function(){
//       xp += ((mouseX - xp)/6);
//       yp += ((mouseY - yp)/6);
//       $("#circle").css({left: xp +'px', top: yp +'px'});
//     }, 20);
  
//   });

document.getElementById('move').addEventListener('click', ()=> {
    TweenMax.to('#video1', .7, { x: '-50vw', ease: Power4.easeInOut});
    TweenMax.to('#video1', 0, { delay: .7, display: 'none'});
    TweenMax.to('#v1', .7, { opacity: 0});
    TweenMax.to('#v1', 0, { delay: .7, display: 'none'});
    TweenMax.to('#move', .7, { opacity: 0});
    TweenMax.to('#move', 0, { delay: .7, display: 'none'});

    TweenMax.to('#video2', .7, { delay: 1, x: '0vw', ease: Power4.easeInOut});
    TweenMax.to('#video2', 0, { delay: 1, display: 'block'});
    TweenMax.to('#v2', .7, { delay: 1, opacity: 1});
    TweenMax.to('#v2', 0, { delay: 1, display: 'block'});
    TweenMax.to('#moveback', .7, { delay: 1, opacity: 1});
    TweenMax.to('#moveback', 0, { delay: 1, display: 'block'});
})

document.getElementById('moveback').addEventListener('click', ()=> {
    TweenMax.to('#video2', .7, { x: '50vw', ease: Power4.easeInOut});
    TweenMax.to('#video2', 0, { delay: .7, display: 'none'});
    TweenMax.to('#v2', .7, { opacity: 0});
    TweenMax.to('#v2', 0, { delay: .7, display: 'none'});
    TweenMax.to('#moveback', .7, { opacity: 0});
    TweenMax.to('#moveback', 0, { delay: .7, display: 'none'});

    TweenMax.to('#video1', .7, { delay: 1, x: '0vw', ease: Power4.easeInOut});
    TweenMax.to('#video1', 0, { delay: 1, display: 'block'});
    TweenMax.to('#v1', .7, { delay: 1, opacity: 1});
    TweenMax.to('#v1', 0, { delay: 1, display: 'block'});
    TweenMax.to('#move', .7, { delay: 1, opacity: 1});
    TweenMax.to('#move', 0, { delay: 1, display: 'block'});
})