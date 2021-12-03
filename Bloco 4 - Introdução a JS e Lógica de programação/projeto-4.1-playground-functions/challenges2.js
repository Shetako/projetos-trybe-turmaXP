// Desafio 10
function techList(arr, name) {
  let lista = [];
  // pesquisei sobre o método sort(), usado abaixo, nos seguintes links
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  // http://blog.dunderlabs.com/entendendo-ordenacao-de-arrays-em-javascript-sort-of.html
  arr = arr.sort();

  for (let i of arr) {
    lista.push({
      tech: i,
      name: name,
    });
  }
  if (lista.length === 0) {
    return 'Vazio!';
  }
  return lista;
}

// Desafio 11
function generatePhoneNumber(arr) {
  if (arr.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let i of arr) {
    if (i > 9 || i < 0) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  for (let i = 0; i < arr.length; i++) {
    let contador = 0;
    let num = arr[i];
    for (let j = 0; j < arr.length; j++) {
      if (num === arr[j]) {
        contador += 1;
      }
      if (contador >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
  }
  return `(${arr[0]}${arr[1]}) ${arr[2]}${arr[3]}${arr[4]}${arr[5]}${arr[6]}-${arr[7]}${arr[8]}${arr[9]}${arr[10]}`;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // Math.abs() pesquisado conforme indicado no github do projeto
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
  let a = Math.abs(lineA);
  let b = Math.abs(lineB);
  let c = Math.abs(lineC);
  let d = b + c;
  let e = a + c;
  let f = a + b;
  let g = a - b - c;
  let h = b - a - c;
  let i = c - a - b;
  if (a < d && a > g && b < e && b > h && c < f && c > i) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(str) {
  let sum = 0;
  str = str.replace(/[^0-9]/g,'');
  str = str.split('');
  for(i of str) {
    i = parseInt(i)
    sum += i;
  }

  if (sum > 1) {
    return `${sum} copos de água`
  }

  return `${sum} copo de água`

}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
