const dogImage = document.getElementById('dog');
const button = document.querySelector('.bt');

const dogOriginal = './img/dog.png';
const celular = './img/vert.png';

let isdogOriginal = true;

button.addEventListener('click', () => {
    if (isdogOriginal) {
        dogImage.src = celular;
    } else {
        dogImage.src = dogOriginal;
    }
    isdogOriginal = !isdogOriginal;
});

const titButton = document.querySelector('.btnTit');
const titElement = document.querySelector('.tit');

const textButton = document.querySelector('.btnText');
const textElement = document.querySelector('.text');

const audioButton = document.querySelector('.btnAudio');
const audioElement = document.querySelector('.audio');

let isTitleChanged = false;
let isTextColorChanged = false;

titButton.addEventListener('click', () => {
    if (isTitleChanged) {
        titElement.textContent = 'Primeiro Titulo';
    } else {
        titElement.textContent = 'Segundo Titulo';
    }
    isTitleChanged = !isTitleChanged;
});

textButton.addEventListener('click', () => {
    if (isTextColorChanged) {
        textElement.style.color = 'initial';
    } else {
        textElement.style.color = 'red';
    }
    isTextColorChanged = !isTextColorChanged; 
});

document.querySelector('.altBtn').addEventListener('click', function() {
    const buttons = document.querySelectorAll('#buttonContainer button');
    buttons.forEach(button => {
        button.classList.toggle('class');
    });
});