// alert("HAHA deu merda")

const buttonRight = document.querySelector('.button-arrow.-right');
const buttonLeft = document.querySelector('.button-arrow.-left');
const elements = document.querySelector('.elements');
let pixels = 40;

buttonRight.addEventListener('click', function() {
    pixels = pixels + 40;   
    elements.style = `transform: translateX(${pixels}px)`
});

buttonLeft.addEventListener('click', function() {
    pixels = pixels - 40;   
    elements.style = `transform: translateX(${pixels}px)`
});