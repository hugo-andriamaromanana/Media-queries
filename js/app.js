let sky = document.getElementById('sky');
let sea = document.getElementById('sea');
let road = document.getElementById('road');
let car = document.getElementById('car');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    sky.style.top = value * 0.5 + 'px';
    sea.style.top = value * 0.25 + 'px';
    road.style.top = value * 0.05 + 'px';
    car.style.top = 800 + value * 0.05 +'px';
    sky.style.left = value * -0.05 + 'px';
    sea.style.left = value * -0.15 + 'px';
    road.style.left = value * -1.25 + 'px';    
    car.style.right = -200 + value * -0.5 + 'px';
})
