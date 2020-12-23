window.onload = ()=> {
    setTimeout(()=> {
        TweenMax.to('#curtain', 1.1, { scaleY: 0, ease: Power4.easeInOut});
    });

    setTimeout(()=> {
        TweenMax.to('#gif', .5, { opacity: 0});
    });

    setTimeout(()=>{
        TweenMax.to('.html', 0, { delay: 1.1, overflowY: 'auto'});
    })

    TweenMax.to('.loaded', 0, { display: 'none'});
}

window.onbeforeunload = ()=> {
    window.scrollTo(0,0);
}


document.getElementById('menu-trigger').addEventListener('click', ()=> {
    TweenMax.to('#menu-trigger', .5, { scaleX: 0});
    TweenMax.to('#menu-trigger-container', .5, { opacity: 0});
    TweenMax.to('.menu', 1.2, { delay: .3, scaleX: 1, ease: Power4.easeInOut});
    TweenMax.to('.html', 0, { overflowY: 'hidden'});
    TweenMax.to('#menu-trigger', 0, { delay: .5, display: 'none'});
    TweenMax.to('#menu-trigger-container', 0, { delay: .5, display: 'none'});
    TweenMax.to('#close-trigger', 0, { delay: 1.5, display: 'block'});
    TweenMax.to('#close-trigger', .5, { delay: 1.5, opacity: 1});
    TweenMax.to('.menu-animated', .5, { opacity: 0});
    TweenMax.to('.socials', 0, { delay: 1, webkitFilter: 'invert(1)'});

    TweenMax.to('.prj-title', 1.5, { delay: .3, x: 0, ease: Power4.easeInOut});
})

document.getElementById('close-trigger').addEventListener('click', ()=> {
    TweenMax.to('#close-trigger', .5, { opacity: 0});
    TweenMax.to('.menu', 1.2, { delay: .3, scaleX: 0, ease: Power4.easeInOut});
    TweenMax.to('.html', 0, { delay: 1.5, overflowY: 'auto'});
    TweenMax.to('#close-trigger', 0, { delay: .5, display: 'none'});
    TweenMax.to('#menu-trigger', 0, { delay: 1.5, display: 'block'});
    TweenMax.to('#menu-trigger-container', 0, { delay: 1.5, display: 'flex'});
    TweenMax.to('#menu-trigger', .5, { delay: 1.5, scaleX: 1});
    TweenMax.to('#menu-trigger-container', .5, { delay: 1.5, opacity: 1});
    TweenMax.to('.menu-animated', .5, { delay: 1.5, opacity: 1});
    TweenMax.to('.socials', 0, { delay: .75, webkitFilter: 'invert(0)'});
    
    TweenMax.to('.prj-title', 1.5, { x: '-50vw', ease: Power4.easeInOut});
})

let i = 1;

document.getElementById('next-img').addEventListener('click', ()=> {
    TweenMax.to('#img-slider-curtain', 0, { transformOrigin: 'right'});
    TweenMax.to('#img-slider-curtain', .7, { scaleX: 1, ease: Power4.easeInOut});
    TweenMax.to('#img-slider-curtain', 0, { delay: .7, transformOrigin: 'left'});
    TweenMax.to('#img-slider-curtain', .7, { delay: 1.3, scaleX: 0, ease: Power4.easeInOut});

    i++
    setTimeout(()=> {
        document.getElementById('img-slider').src = `/img/img-slider/${i}.jpg`
    },800);
    if (i > 10) {
        i == 10;
        TweenMax.to('#next-img', 0, { delay: .7, display: 'none'});
    } else if (i == 10) {
        TweenMax.to('#next-img', 0, { delay: .7, display: 'none'});
    } else {
        TweenMax.to('#prev-img', 0, { delay: .7, display: 'block'});
    }

    if (i==1) {
        setTimeout(()=> {
            document.getElementById('img-title').innerHTML = 'red';
        }, 1100)
    } else if (i==2) {
        setTimeout(()=> {
            document.getElementById('img-title').innerHTML = 'beige';
        }, 1100)
    } else if (i==3) {
        setTimeout(()=> {
            document.getElementById('img-title').innerHTML = 'black';
        }, 1100)
    } else if (i==4) {
        setTimeout(()=> {
            document.getElementById('img-title').innerHTML = 'green';
        }, 1100)
    } else if (i==5) {
        setTimeout(()=> {
            document.getElementById('img-title').innerHTML = 'magenta';
        }, 1100)
    } else if (i==6) {
        setTimeout(()=> {
            document.getElementById('img-title').innerHTML = 'marble';
        }, 1100)
    } else if (i==7) {
        setTimeout(()=> {
            document.getElementById('img-title').innerHTML = 'pink';
        }, 1100)
    } else if (i==8) {
        setTimeout(()=> {
            document.getElementById('img-title').innerHTML = 'purple';
        }, 1100)
    } else if (i==9) {
        setTimeout(()=> {
            document.getElementById('img-title').innerHTML = 'rainbow';
        }, 1100)
    } else if (i==10) {
        setTimeout(()=> {
            document.getElementById('img-title').innerHTML = 'white';
        }, 1100)
    }
})

document.getElementById('prev-img').addEventListener('click', ()=> {
    TweenMax.to('#img-slider-curtain', 0, { transformOrigin: 'left'});
    TweenMax.to('#img-slider-curtain', .7, { scaleX: 1, ease: Power4.easeInOut});
    TweenMax.to('#img-slider-curtain', 0, { delay: .7, transformOrigin: 'right'});
    TweenMax.to('#img-slider-curtain', .7, { delay: 1.3, scaleX: 0, ease: Power4.easeInOut});


    i--
    setTimeout(()=> {
        document.getElementById('img-slider').src = `/img/img-slider/${i}.jpg`
    },800);
    if (i < 1) {
        i == 1;
        TweenMax.to('#prev-img', 0, { delay: .7, display: 'none'});
    } else if (i == 1) {
        TweenMax.to('#prev-img', 0, { delay: .7, display: 'none'});
    } else {
        TweenMax.to('#next-img', 0, { delay: .7, display: 'block'});
    }

    if (i==1) {
        setTimeout(()=> {
            document.getElementById('img-title').innerHTML = 'red';
        }, 1100)
    } else if (i==2) {
        setTimeout(()=> {
            document.getElementById('img-title').innerHTML = 'beige';
        }, 1100)
    } else if (i==3) {
        setTimeout(()=> {
            document.getElementById('img-title').innerHTML = 'black';
        }, 1100)
    } else if (i==4) {
        setTimeout(()=> {
            document.getElementById('img-title').innerHTML = 'green';
        }, 1100)
    } else if (i==5) {
        setTimeout(()=> {
            document.getElementById('img-title').innerHTML = 'magenta';
        }, 1100)
    } else if (i==6) {
        setTimeout(()=> {
            document.getElementById('img-title').innerHTML = 'marble';
        }, 1100)
    } else if (i==7) {
        setTimeout(()=> {
            document.getElementById('img-title').innerHTML = 'pink';
        }, 1100)
    } else if (i==8) {
        setTimeout(()=> {
            document.getElementById('img-title').innerHTML = 'purple';
        }, 1100)
    } else if (i==9) {
        setTimeout(()=> {
            document.getElementById('img-title').innerHTML = 'rainbow';
        }, 1100)
    } else if (i==10) {
        setTimeout(()=> {
            document.getElementById('img-title').innerHTML = 'white';
        }, 1100)
    }
})