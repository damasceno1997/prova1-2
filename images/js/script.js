// DOM
const capa = document.querySelector('.images img')
const bt1 = document.querySelector('#bt1')
const bt2 = document.querySelector('#bt2')
const bt3 = document.querySelector('#bt3')
const bt4 = document.querySelector('#bt4')

// EVENTOS
bt1.addEventListener('click', carroEsportivo)
bt2.addEventListener('click', carroSUV)
bt3.addEventListener('click', carroHatch)
bt4.addEventListener('click', carroPicape)

// AÇÕES
function carroEsportivo() {
    capa.src = 'images/esportivo.jpg'
}

function carroSUV() {
    capa.src = 'images/suv.jpg'
}

function carroHatch() {
    capa.src = 'images/hatch.jpg'
}

function carroPicape() {
    capa.src = 'images/picape.webp'
}