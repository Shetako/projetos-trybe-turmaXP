let botaoCriarCarta = document.querySelector('#criar-carta');
let paragrafoCartaCriada = document.querySelector('#carta-gerada')
let texto = document.querySelector('#carta-texto');
let paragrafoContador = document.querySelector('#carta-contador')
let textoSeparado = texto.value.split(' ');

let grupoEstilo = ['newspaper', 'magazine1', 'magazine2'];
let grupoTamanho = ['medium', 'big', 'reallybig'];
let grupoRotacao = ['rotateleft', 'rotateright'];
let grupoInclinacao = ['skewleft', 'skewright'];

function criarCarta() {

    while(paragrafoCartaCriada.firstChild) {
        paragrafoCartaCriada.removeChild(paragrafoCartaCriada.firstChild);
    }

    let textoSeparado = texto.value.split(' ');

    if(textoSeparado[0] === '') {
        // pois com split(' ') todos os espaços vazios foram removidos
        // e guardados como '' nas posições da array retornada
        paragrafoCartaCriada.textContent = 'Por favor, digite o conteúdo da carta.';
    } else {
        paragrafoContador.textContent = textoSeparado.length;
        for(let i = 0; i < textoSeparado.length; i++) {
            let span = document.createElement('span');
            span.textContent = textoSeparado[i];
            paragrafoCartaCriada.appendChild(span);
            let sorteio1 = parseInt(Math.random()*3);
            let sorteio2 = parseInt(Math.random()*3);
            
            while(sorteio2 === sorteio1){
                sorteio2 = parseInt(Math.random()*3);
            };

            switch(sorteio1) {
                case 0: 
                    sorteio1 = grupoEstilo;
                    span.classList.add(sorteio1[parseInt(Math.random()*2)])
                    break;
                case 1:
                    sorteio1 = grupoTamanho;
                    span.classList.add(sorteio1[parseInt(Math.random()*2)])
                    break;
                case 2:
                    sorteio1 = grupoRotacao;
                    span.classList.add(sorteio1[parseInt(Math.random()*1)])
                    break;
                case 3:
                    sorteio1 = grupoInclinacao;
                    span.classList.add(sorteio1[parseInt(Math.random()*1)])
                    break;
            };

            switch(sorteio2) {
                case 0: 
                    sorteio2 = grupoEstilo;
                    span.classList.add(sorteio2[parseInt(Math.random()*2)])
                    break;
                case 1:
                    sorteio2 = grupoTamanho;
                    span.classList.add(sorteio2[parseInt(Math.random()*2)])
                    break;
                case 2:
                    sorteio2 = grupoRotacao;
                    span.classList.add(sorteio2[parseInt(Math.random()*1)])
                    break;
                case 3:
                    sorteio2 = grupoInclinacao;
                    span.classList.add(sorteio2[parseInt(Math.random()*1)])
                    break;
            };
        };
    };
};

botaoCriarCarta.addEventListener('click', criarCarta);

function mudarEstilo(event) {
    let palavra = event.target;
    let estiloAnterior = palavra.className;
    palavra.className = '';

    // while(palavra.className === estiloAnterior) {

    let sorteio1 = parseInt(Math.random()*3);
            let sorteio2 = parseInt(Math.random()*3);
            
            while(sorteio2 === sorteio1){
                sorteio2 = parseInt(Math.random()*3);
            };

            switch(sorteio1) {
                case 0: 
                    sorteio1 = grupoEstilo;
                    palavra.classList.add(sorteio1[parseInt(Math.random()*2)])
                    break;
                case 1:
                    sorteio1 = grupoTamanho;
                    palavra.classList.add(sorteio1[parseInt(Math.random()*2)])
                    break;
                case 2:
                    sorteio1 = grupoRotacao;
                    palavra.classList.add(sorteio1[parseInt(Math.random()*1)])
                    break;
                case 3:
                    sorteio1 = grupoInclinacao;
                    palavra.classList.add(sorteio1[parseInt(Math.random()*1)])
                    break;
            };

            switch(sorteio2) {
                case 0: 
                    sorteio2 = grupoEstilo;
                    palavra.classList.add(sorteio2[parseInt(Math.random()*2)])
                    break;
                case 1:
                    sorteio2 = grupoTamanho;
                    palavra.classList.add(sorteio2[parseInt(Math.random()*2)])
                    break;
                case 2:
                    sorteio2 = grupoRotacao;
                    palavra.classList.add(sorteio2[parseInt(Math.random()*1)])
                    break;
                case 3:
                    sorteio2 = grupoInclinacao;
                    palavra.classList.add(sorteio2[parseInt(Math.random()*1)])
                    break;
            };
// }
        }


paragrafoCartaCriada.addEventListener('click', mudarEstilo);
