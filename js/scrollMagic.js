var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
    triggerElement: '#next-img',
    triggerHook: 0.1,
})
// scene.addIndicators();
scene.setTween('.header', .8, { scaleY: 1, ease: Power4.easeOut});
scene.addTo(controller);








var lastScrollTop = 0;

// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
   var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
   if (st > lastScrollTop){
       //downscroll code
    //   TweenMax.to('.header', .8, { scaleY: 1, ease: Power4.easeOut});
   } else {
       //upscroll code
    //   TweenMax.to('.header', .8, { scaleY: 0, ease: Power4.easeOut});
   }
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);