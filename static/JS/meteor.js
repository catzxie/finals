let text = document.getElementById('text');
let moon = document.getElementById('moon');
let sky = document.getElementById('text');
let right = document.getElementById('right');
let left = document.getElementById('left');
let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.top = value * 2.5 + 'px';
    text.style.top = value * .4 + 'px';
    if (value > 500) { 
        text.style.opacity = '0';
    } else {
        text.style.opacity = '1';
    sky.style.top = value * .5 + 'px';
    left.style.left = value * -1.5 + 'px';
    right.style.left = value * 1.5 + 'px';
    moon.style.top = value * -2.5 + 'px';
    }
});