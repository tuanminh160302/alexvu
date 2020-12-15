var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
    triggerElement: '#intro-avt',
    triggerHook: 0.2,
})
scene.addIndicators();
scene.setTween('#intro-avt', .5, { opacity: 0});
scene.addTo(controller);