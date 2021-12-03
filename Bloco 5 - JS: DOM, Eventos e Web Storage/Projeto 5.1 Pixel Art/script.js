// declarando variáveis por conta do Lint
// pois é possível chamar a id direto como um objeto

let black = document.getElementById('black');
let cor1 = document.getElementById('cor1');
let cor2 = document.getElementById('cor2');
let cor3 = document.getElementById('cor3');

let sorteio1 = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`
let sorteio2 = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`
let sorteio3 = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`

cor1.style.backgroundColor = sorteio1;
cor2.style.backgroundColor = sorteio2;
cor3.style.backgroundColor = sorteio3;

function selectBlack() {
  black.className = 'color selected';
  cor1.className = 'color';
  cor2.className = 'color';
  cor3.className = 'color';
};

function selectCor1() {
    black.className = 'color';
    cor1.className = 'color selected';
    cor2.className = 'color';
    cor3.className = 'color';
  };
  
  function selectCor2() {
      black.className = 'color';
      cor1.className = 'color';
      cor2.className = 'color selected';
      cor3.className = 'color';
  };
  
  function selectCor3() {
      black.className = 'color';
      cor1.className = 'color';
      cor2.className = 'color';
      cor3.className = 'color selected';
  };

black.addEventListener('click', selectBlack);
cor1.addEventListener('click', selectCor1);
cor2.addEventListener('click', selectCor2);
cor3.addEventListener('click', selectCor3);

window.onload = selectBlack;

function limpar() {
    let pixels = document.querySelectorAll('.pixel');
    for (let i = 0; i < pixels.length; i++) {
        pixels[i].style.backgroundColor = 'white';
    }
}

let botaoGerarQuadro = document.getElementById('generate-board');

function gerarQuadro() {
    let tamanho = document.querySelector('#board-size').value;
    let quadro = document.querySelector('#pixel-board');
    quadro.innerHTML = '';
    
    if (tamanho === '') {
        alert('Board inválido!');
    } else if(tamanho < 5) {
        tamanho = 5;
    } else if(tamanho > 50) {
        tamanho = 50;
    } else {
        tamanho = tamanho;
    };

    for (let i = 0; i < tamanho; i++) {
        let novaLinha = document.createElement('section');
        novaLinha.id = 'linha';
        quadro.appendChild(novaLinha);
        for (let j = 0; j < tamanho; j++) {
            let linhaInput = document.querySelectorAll('#linha')
            let novoPixel = document.createElement('div');
            novoPixel.className = 'pixel';
            linhaInput[i].appendChild(novoPixel);
        };
    };
};

botaoGerarQuadro.addEventListener('click' , gerarQuadro);

function paint(event) {
    let pixelClicado = event.target;
    let corSelecionada = document.querySelector('.selected');
    switch(corSelecionada.id) {
        case 'cor1':
            pixelClicado.style.backgroundColor = sorteio1;
            break;
        case 'cor2':
            pixelClicado.style.backgroundColor = sorteio2;
            break;
        case 'cor3':
            pixelClicado.style.backgroundColor = sorteio3;
            break;
        case 'black':
            pixelClicado.style.backgroundColor = 'black';
            break;
    };
};

let pixelBoard = document.getElementById('pixel-board');
pixelBoard.addEventListener('click', paint);