function r() {
    let r = parseInt(Math.random()*255);
    return r;
};

function g() {
    let g = parseInt(Math.random()*255);
    return g;
};

function b() {
    let b = parseInt(Math.random()*255);
    return b;
};

let bola1 = document.getElementById('bola1');
let bola2 = document.getElementById('bola2');
let bola3 = document.getElementById('bola3');
let bola4 = document.getElementById('bola4');
let bola5 = document.getElementById('bola5');
let bola6 = document.getElementById('bola6');

let texto = document.querySelector('#rgb-color');

let cor1 = '';
let cor2 = '';
let cor3 = '';
let cor4 = '';
let cor5 = '';
let cor6 = '';

function gerarCores() {

    cor1 = `(${r()}, ${g()}, ${b()})`;
    cor2 = `(${r()}, ${g()}, ${b()})`;
    cor3 = `(${r()}, ${g()}, ${b()})`;
    cor4 = `(${r()}, ${g()}, ${b()})`;
    cor5 = `(${r()}, ${g()}, ${b()})`;
    cor6 = `(${r()}, ${g()}, ${b()})`;

    bola1.style.backgroundColor = `rgb${cor1}`;
    bola2.style.backgroundColor = `rgb${cor2}`;
    bola3.style.backgroundColor = `rgb${cor3}`;
    bola4.style.backgroundColor = `rgb${cor4}`;
    bola5.style.backgroundColor = `rgb${cor5}`;
    bola6.style.backgroundColor = `rgb${cor6}`;

    let sorteio = parseInt(Math.random()*6);

    if(sorteio == 0){
        console.log('foi zero')
        sorteio = 1;
        texto.textContent = bola1.style.backgroundColor;
        } else {

        switch(sorteio) {
            case 1:
                texto.textContent = bola1.style.backgroundColor;
                break;
            case 2:
                texto.textContent = bola2.style.backgroundColor;
                break;
            case 3:
                texto.textContent = bola3.style.backgroundColor;
                break;
            case 4:
                texto.textContent = bola4.style.backgroundColor;
                break;
            case 5:
                texto.textContent = bola5.style.backgroundColor;
                break;
            case 6:
                texto.textContent = bola6.style.backgroundColor;
                break;
        };
    };
    console.log(sorteio)
};

window.onload = gerarCores;

let resposta = document.createElement('p');
resposta.id = 'answer';
resposta.textContent = 'Escolha uma cor';

let header = document.getElementById('header');
header.appendChild(resposta);

let circulos = document.querySelector('#circulos');
let score = document.querySelector('#score');
score.textContent = 0;

function verificar(event) {
    let bolaSelecionada = event.target;
    
    if(bolaSelecionada.style.backgroundColor === texto.textContent) {
        resposta.textContent = 'Acertou!';
        let pontuacao = parseInt(score.textContent);
        pontuacao += 3;
        score.textContent = pontuacao;
    } else {
        resposta.textContent = 'Errou! Tente novamente!';
    };    
};

circulos.addEventListener('click' , verificar)

let botaoReiniciar = document.querySelector('#reset-game');

function reiniciar() {
    resposta.textContent = 'Escolha uma cor';
    texto.textContent = '';
    gerarCores();
};
botaoReiniciar.addEventListener('click', reiniciar);