document.getElementById('menu-trigger').addEventListener('click', ()=> {
    TweenMax.to('#menu-trigger', .5, { scaleX: 0});
    TweenMax.to('.menu', 1.2, { delay: .3, scaleX: 1, ease: Power4.easeInOut});
    TweenMax.to('.html', 0, { overflowY: 'hidden'});
    TweenMax.to('#menu-trigger', 0, { delay: .5, display: 'none'});
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
    TweenMax.to('#menu-trigger', .5, { delay: 1.5, scaleX: 1});
    TweenMax.to('.menu-animated', .5, { delay: 1.5, opacity: 1});
    TweenMax.to('.socials', 0, { delay: .75, webkitFilter: 'invert(0)'});
    
    TweenMax.to('.prj-title', 1.5, { x: '-50vw', ease: Power4.easeInOut});
})