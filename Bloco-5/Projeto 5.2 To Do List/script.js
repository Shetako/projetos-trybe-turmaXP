let botaoCriarTarefa = document.getElementById('criar-tarefa');
let listaOrdenada = document.getElementById('lista-tarefas');

function carregarTarefasLocalStorage() {
    let ol = document.getElementById('lista-tarefas')
        let tarefasSalvas = localStorage.getItem('lista-de-tarefas');
        ol.innerHTML = tarefasSalvas;
};

window.onload = carregarTarefasLocalStorage;

function adicionarTarefa() {
    let tarefaEscrita = document.getElementById('texto-tarefa').value;
    if(tarefaEscrita === '') {
        alert('Insira uma tarefa!');
    } else {
        let li = document.createElement('li');
        li.textContent = tarefaEscrita;
        listaOrdenada.appendChild(li);
        tarefaEscrita = '';
    }
    document.getElementById('texto-tarefa').value = '';
};

botaoCriarTarefa.addEventListener('click', adicionarTarefa);

function mudarCorFundo(event) {
    let tarefaSelecionada = event.target;
    let li = document.getElementsByTagName('li');

    for(let i = 0; i < li.length; i++) {
        if(li[i].className === 'painted completed' || li[i].className === 'painted'){
        li[i].classList.remove('painted');
        };
    };

    if(tarefaSelecionada.className === 'completed') {
        tarefaSelecionada = 'painted completed';
    };
    tarefaSelecionada.className = 'painted';
};

listaOrdenada.addEventListener('click', mudarCorFundo);

function tarefaConcluida(event) {
    let tarefaFeita = event.target;

    if (tarefaFeita.className !== 'completed') {
        tarefaFeita.classList.add('completed');      
    } else {
        tarefaFeita.classList.remove('completed');
    };
};

listaOrdenada.addEventListener('dblclick',tarefaConcluida);

let botaoRemoverFinalizados = document.getElementById('remover-finalizados');

function removerFinalizados() {
    let finalizados = document.querySelectorAll('.completed');
    for (let i = 0; i < finalizados.length; i++) {
        finalizados[i].remove();
    };
};

botaoRemoverFinalizados.addEventListener('click', removerFinalizados);

let botaoApagaTudo = document.getElementById('apaga-tudo');

function apagarTudo() {
    localStorage.clear();
    let lista = document.getElementById('lista-tarefas');
    while(lista.firstChild) {
        lista.removeChild(lista.firstChild);
    };
};

botaoApagaTudo.addEventListener('click', apagarTudo);

let botaoApagaSelecionado = document.getElementById('remover-selecionado');

function apagarSelecionado() {
    let selecionado = document.querySelector('.painted');
    let pai = document.querySelector('#lista-tarefas');
    pai.removeChild(selecionado);
}

botaoApagaSelecionado.addEventListener('click' , apagarSelecionado);

// para fazer o item 12, salvar tarefas, o seguinte vídeo me ajudou muito
// https://www.youtube.com/watch?v=ZE18YCw3VNU
// e também consultei o repositório da colega Amanda Camile

let botaoSalvarTarefas = document.getElementById('salvar-tarefas');

function salvarTarefas() {
    localStorage.clear();
    let inputs = listaOrdenada.innerHTML;
    // com inner.HTML vai jogar tudo que estiver dentro
    // de lista ordenada em uma variável, uma array de um único valor
    // mas quando for recuperada já está estruturada como HTML
    // sem precisar ficar criando elementos em loop e inserindo texto
    localStorage.setItem('lista-de-tarefas', inputs);
};

botaoSalvarTarefas.addEventListener('click' , salvarTarefas);

let botaoParaCima = document.querySelector('#mover-cima');
let botaoParaBaixo = document.querySelector('#mover-baixo');

function paraCima() {
    let selecionado = document.querySelector('.painted');
    if(selecionado.previousSibling === null) {
        alert('Não há como subir a tarefa');
    };
    let posicao = selecionado
    let anterior = document.querySelector('.painted').previousSibling;
    let auxiliar = document.querySelector('.painted').previousSibling;

    anterior = posicao;
    selecionado = auxiliar; 

    console.log(posicao);
    console.log(anterior);
};

function paraBaixo() {
    let selecionado = document.querySelector('.painted');
    if(selecionado.nextSibling === null) {
        alert('Não há como descer a tarefa');
    };
};

botaoParaCima.addEventListener('click', paraCima);
botaoParaBaixo.addEventListener('click' , paraBaixo);