window.onload = ()=> {
    setTimeout(()=> {
        TweenMax.to('#curtain', 1.1, { scaleY: 0, ease: Power4.easeInOut});
    }, 3000);

    setTimeout(()=> {
        TweenMax.to('#gif', .5, { opacity: 0});
    }, 2500);
}

document.getElementById('back').addEventListener('click', ()=> {
    TweenMax.to('#curtain', 1.1, { scaleY: 1, ease: Power4.easeInOut});
    setTimeout(()=> {
        document.location.href = 'index.html'
    }, 1100)
})

document.getElementById('color-trigger').addEventListener('click', ()=> {
    TweenMax.to('.slider-container', .3, { backgroundColor: '#36ac3e'});
    TweenMax.to('#h1-red', .3, { color: '#f4eee6'});
    document.getElementById('close').style.backgroundImage = 'url(/button/close-white.png)';
    document.getElementById('next').style.backgroundImage = 'url(/button/next-white.png)';
    document.getElementById('prev').style.backgroundImage = 'url(/button/prev-white.png)';
})

document.getElementById('color-trigger-2').addEventListener('click', ()=> {
    TweenMax.to('.slider-container', .3, { backgroundColor: '#f4eee6'});
    TweenMax.to('#h1-red', .3, { color: 'black'});
    document.getElementById('close').style.backgroundImage = 'url(/button/close.png)';
    document.getElementById('next').style.backgroundImage = 'url(/button/next.png)';
    document.getElementById('prev').style.backgroundImage = 'url(/button/prev.png)';
})





var pop = document.getElementById('pop-up-slider-items');
var img = Number(0);
var close = document.getElementById('close');
var next = document.getElementById('next');
var prev = document.getElementById('prev');

document.getElementById('close').addEventListener('click', function () {
    TweenMax.to('.non-touch-slider-items', 0, { scale: 0});
    TweenMax.to('.pop-up-slider-items', 0, { scaleX: 0, scaleY: 0 });
    TweenMax.to('.slider-container', 0, { filter: 'blur(0px)' });
    TweenMax.to('#close', 0, { display: 'none'});
    TweenMax.to('#next', 0, { display: 'none'});
    TweenMax.to('#prev', 0, { display: 'none'});
});

document.getElementById('slider-items-1').addEventListener('click', function () {
    img = 1;
    TweenMax.to('#prev', 0, { display: 'none'});
    TweenMax.to('#next', 0, { display: 'block'});
    TweenMax.to('#close', 0, { display: 'block'});
    document.getElementById('pop-up-slider-items-img').src = `img/green/${img}.jpg`;
    TweenMax.to('.non-touch-slider-items', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', 0, { scale: 1 });
    TweenMax.to('.slider-container', 0, { filter: 'blur(8px)'});
});

document.getElementById('slider-items-2').addEventListener('click', function () {
    img = 2;
    TweenMax.to('#prev', 0, { display: 'block'});
    TweenMax.to('#next', 0, { display: 'block'});
    TweenMax.to('#close', 0, { display: 'block'});
    document.getElementById('pop-up-slider-items-img').src = `img/green/${img}.jpg`;
    TweenMax.to('.non-touch-slider-items', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', 0, { scaleX: 1, scaleY: 1, });
    TweenMax.to('.slider-container', 0, { filter: 'blur(8px)' });
});

document.getElementById('slider-items-3').addEventListener('click', function () {
    img = 3;
    TweenMax.to('#prev', 0, { display: 'block'});
    TweenMax.to('#next', 0, { display: 'block'});
    TweenMax.to('#close', 0, { display: 'block'});
    document.getElementById('pop-up-slider-items-img').src = `img/green/${img}.jpg`;
    TweenMax.to('.non-touch-slider-items', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', .0, { scaleX: 1, scaleY: 1, });
    TweenMax.to('.slider-container', 0, { filter: 'blur(8px)' });
});

document.getElementById('slider-items-4').addEventListener('click', function () {
    img = 4;
    TweenMax.to('#prev', 0, { display: 'block'});
    TweenMax.to('#next', 0, { display: 'block'});
    TweenMax.to('#close', 0, { display: 'block'});
    document.getElementById('pop-up-slider-items-img').src = `img/green/${img}.jpg`;
    TweenMax.to('.non-touch-slider-items', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', .0, { scaleX: 1, scaleY: 1, });
    TweenMax.to('.slider-container', 0, { filter: 'blur(8px)' });
});

document.getElementById('slider-items-5').addEventListener('click', function () {
    img = 5;
    TweenMax.to('#prev', 0, { display: 'block'});
    TweenMax.to('#next', 0, { display: 'block'});
    TweenMax.to('#close', 0, { display: 'block'});
    document.getElementById('pop-up-slider-items-img').src = `img/green/${img}.jpg`;
    TweenMax.to('.non-touch-slider-items', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', .0, { scaleX: 1, scaleY: 1, });
    TweenMax.to('.slider-container', 0, { filter: 'blur(8px)' });
});

document.getElementById('slider-items-6').addEventListener('click', function () {
    img = 6;
    TweenMax.to('#prev', 0, { display: 'block'});
    TweenMax.to('#next', 0, { display: 'block'});
    TweenMax.to('#close', 0, { display: 'block'});
    document.getElementById('pop-up-slider-items-img').src = `img/green/${img}.jpg`;
    TweenMax.to('.non-touch-slider-items', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', .0, { scaleX: 1, scaleY: 1, });
    TweenMax.to('.slider-container', 0, { filter: 'blur(8px)' });
});

document.getElementById('slider-items-7').addEventListener('click', function () {
    img = 7;
    TweenMax.to('#prev', 0, { display: 'block'});
    TweenMax.to('#next', 0, { display: 'block'});
    TweenMax.to('#close', 0, { display: 'block'});
    document.getElementById('pop-up-slider-items-img').src = `img/green/${img}.jpg`;
    TweenMax.to('.non-touch-slider-items', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', .0, { scaleX: 1, scaleY: 1, });
    TweenMax.to('.slider-container', 0, { filter: 'blur(8px)' });
});

document.getElementById('slider-items-8').addEventListener('click', function () {
    img = 8;
    TweenMax.to('#prev', 0, { display: 'block'});
    TweenMax.to('#next', 0, { display: 'block'});
    TweenMax.to('#close', 0, { display: 'block'});
    document.getElementById('pop-up-slider-items-img').src = `img/green/${img}.jpg`;
    TweenMax.to('.non-touch-slider-items', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', .0, { scaleX: 1, scaleY: 1, });
    TweenMax.to('.slider-container', 0, { filter: 'blur(8px)' });
});

document.getElementById('slider-items-9').addEventListener('click', function () {
    img = 9;
    TweenMax.to('#prev', 0, { display: 'block'});
    TweenMax.to('#next', 0, { display: 'block'});
    TweenMax.to('#close', 0, { display: 'block'});
    document.getElementById('pop-up-slider-items-img').src = `img/green/${img}.jpg`;
    TweenMax.to('.non-touch-slider-items', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', .0, { scaleX: 1, scaleY: 1, });
    TweenMax.to('.slider-container', 0, { filter: 'blur(8px)' });
});

document.getElementById('slider-items-10').addEventListener('click', function () {
    img = 10;
    TweenMax.to('#prev', 0, { display: 'block'});
    TweenMax.to('#next', 0, { display: 'block'});
    TweenMax.to('#close', 0, { display: 'block'});
    document.getElementById('pop-up-slider-items-img').src = `img/green/${img}.jpg`;
    TweenMax.to('.non-touch-slider-items', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', .0, { scaleX: 1, scaleY: 1, });
    TweenMax.to('.slider-container', 0, { filter: 'blur(8px)' });
});

document.getElementById('slider-items-11').addEventListener('click', function () {
    img = 11;
    TweenMax.to('#prev', 0, { display: 'block'});
    TweenMax.to('#next', 0, { display: 'block'});
    TweenMax.to('#close', 0, { display: 'block'});
    document.getElementById('pop-up-slider-items-img').src = `img/green/${img}.jpg`;
    TweenMax.to('.non-touch-slider-items', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', .0, { scaleX: 1, scaleY: 1, });
    TweenMax.to('.slider-container', 0, { filter: 'blur(8px)' });
});

document.getElementById('slider-items-12').addEventListener('click', function () {
    img = 12;
    TweenMax.to('#prev', 0, { display: 'block'});
    TweenMax.to('#next', 0, { display: 'none'});
    TweenMax.to('#close', 0, { display: 'block'});
    document.getElementById('pop-up-slider-items-img').src = `img/green/${img}.jpg`;
    TweenMax.to('.non-touch-slider-items', 0, { scale: 1});
    TweenMax.to('.pop-up-slider-items', .0, { scaleX: 1, scaleY: 1, });
    TweenMax.to('.slider-container', 0, { filter: 'blur(8px)' });
});

document.getElementById('next').addEventListener('click', function(){
    img = img + 1;
    if (img > 12) {
        TweenMax.to('#next', 0, { display: 'none'});
    } else if (img == 12) {
        TweenMax.to('#next', 0, { display: 'none'});
    } else {
        TweenMax.to('#next', 0, { display: 'block'});
    }
    document.getElementById('pop-up-slider-items-img').src = `img/green/${img}.jpg`
    TweenMax.to('#prev', 0, { display: 'block'});
});

document.getElementById('prev').addEventListener('click', function(){
    img = img - 1
    if (img < 1) {
        TweenMax.to('#prev', 0, { display: 'none'});
    } else if (img == 1) {
        TweenMax.to('#prev', 0, { display: 'none'});
    } else {
        TweenMax.to('#prev', 0, { display: 'block'});
    }
    document.getElementById('pop-up-slider-items-img').src = `img/green/${img}.jpg`
    TweenMax.to('#next', 0, { display: 'block'});
});