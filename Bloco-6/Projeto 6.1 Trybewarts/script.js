const botaoEntrar = document.querySelector('#botao-entrar');
const inputEmail = document.querySelector('#email');
const inputSenha = document.querySelector('#senha');
const inputName = document.querySelector('#input-name');
const inputLastName = document.querySelector('#input-lastname');
const formEmail = document.querySelector('#input-email');
const selectHouse = document.querySelector('#house');
const avaliacao = document.querySelector('.avaliacao');
const btnEnviar = document.getElementById('submit-btn');
const check = document.getElementById('agreement');
const spanCount = document.querySelector('#counter');
const textArea = document.querySelector('#textarea');
const form = document.querySelector('#evaluation-form');

function entrar() {
  if (inputEmail.value === 'tryber@teste.com' && inputSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function gerarAvaliacao() {
  for (let i = 1; i <= 10; i += 1) {
    const label = document.createElement('label');
    label.innerText = i;
    label.htmlFor = `id${i}`;
    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.value = i;
    radio.id = `id${i}`;
    radio.name = 'rate';
    avaliacao.appendChild(label);
    avaliacao.appendChild(radio);
  }
}

function checkAgree(event) {
  if (event.target.checked) {
    btnEnviar.disabled = false;
  } else {
    btnEnviar.disabled = true;
  }
}

function agree() {
  check.addEventListener('click', checkAgree);
}

// https://www.w3schools.com/jsref/dom_obj_textarea.asp
function textAreaCount() {
  /* const regexWord = /\w/g; */
  function listenerTextArea() {
    let caracteresRestantes = textArea.maxLength;
    const textCount = textArea.value.split('').length;
    caracteresRestantes -= textCount;
    spanCount.innerText = caracteresRestantes;
  }
  textArea.addEventListener('keyup', listenerTextArea);
}

function createParagraph(text) {
  const name = document.createElement('p');
  name.innerText = text;
  return name;
}

function radioChecked(name) {
  const radios = document.getElementsByName(name);
  let result;
  radios.forEach((element) => {
    if (element.checked) {
      result = element;
    }
  });
  return result;
}

// https://www.w3schools.com/jsref/dom_obj_checkbox.asp
function checkBoxChecked() {
  const checked = document.querySelectorAll('.subject');
  const arrayStrings = [];
  let response = '';
  checked.forEach((element) => {
    if (element.checked) {
      arrayStrings.push(element.value);
    }
  });
  arrayStrings.forEach((string, index, array) => {
    if (index === array.length - 1) {
      response += string;
    } else {
      response += `${string}, `;
    }
  });
  return response;
}

// https://developer.mozilla.org/pt-BR/docs/Web/API/Event/preventDefault
function writeResult(event) {
  event.preventDefault();
  const inputs = [];
  const radioTrue = radioChecked('family');
  const checkBoxTrue = checkBoxChecked();
  const evaluation = radioChecked('rate');
  inputs.push(
    `Nome: ${inputName.value} ${inputLastName.value}`,
    `Email: ${formEmail.value}`,
    `Casa: ${selectHouse.value}`,
    `Família: ${radioTrue.value}`,
    `Matérias: ${checkBoxTrue}`,
    `Avaliação: ${evaluation.value}`,
    `Observações: ${textArea.value}`,
  );
  form.innerHTML = '';
  inputs.forEach((line) => {
    form.appendChild(createParagraph(line));
  });
}

btnEnviar.addEventListener('click', writeResult);

textAreaCount();

agree();

gerarAvaliacao();

botaoEntrar.addEventListener('click', entrar);
