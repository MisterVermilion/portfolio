//  menu bar 
let nav = document.querySelector('#entete');
let menu = document.querySelectorAll('#list');
let navintem = document.querySelectorAll('#list a');
var navbtn = document.querySelector('#entete #menu img');


window.onscroll = function() {
    nav.classList.toggle('ScrollingBar', window.scrollY > 0);
}


let box = document.querySelectorAll('.box');
let ArrImg = ['linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)),url(imgs/2.jpg)', 'linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)),url(imgs/1.jpg)', 'linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)),url(imgs/body.jpg)'];
for (let k = 0; k < ArrImg.length; k++) {
    box[k].style.backgroundImage = ArrImg[k];
};

/*galerie carousel*/
let sliders = document.querySelectorAll("#slider");
let droite = document.querySelector('.right');
let gauche = document.querySelector('.left');
let level = 0;
let totalSliders = sliders.length;

function removeActive() {
    for (let i = 0; i < totalSliders; i++) {
        sliders[i].classList.remove('show');
    }
}
droite.addEventListener('click', function() {
    level++;
    if (level >= totalSliders) {
        level = 0;
    };
    removeActive();
    sliders[level].classList.add('show')
});
gauche.addEventListener('click', function() {
    level--;
    if (level < 0) {
        level = totalSliders - 1;
    };
    removeActive();
    sliders[level].classList.add('show')
});
setInterval(function() {
    level++;
    if (level >= totalSliders) {
        level = 0;
    };
    removeActive();
    sliders[level].classList.add('show')
}, 3000)