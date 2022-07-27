let sliders = document.querySelectorAll("#slides");
let droite = document.querySelector('.droite');
let gauche = document.querySelector('.gauche');

let count = 0;
let totalSliders = sliders.length;

function removeActive() {
    for (let i = 0; i < totalSliders; i++) {
        sliders[i].classList.remove('active');
    }
}
droite.addEventListener('click', function() {
    count++;
    if (count >= totalSliders) {
        count = 0;
    };
    removeActive();
    sliders[count].classList.add('active')
});
gauche.addEventListener('click', function() {
    count--;
    if (count < 0) {
        count = totalSliders - 1;
    };
    removeActive();
    sliders[count].classList.add('active')
});
setInterval(function() {
    count++;
    if (count >= totalSliders) {
        count = 0;
    };
    removeActive();
    sliders[count].classList.add('active')
}, 3000)