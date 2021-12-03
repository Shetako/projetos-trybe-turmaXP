// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let sep = string.split(' ');
  return sep;
}

// Desafio 4
function concatName(arr) {
  let concat = '';
  let primeiro = arr[0];

  let arr2 = arr.reverse();

  let ultimo = arr2[0];

  concat = ultimo + ', ' + primeiro;

  return concat;
}

// Desafio 5
function footballPoints(wins, ties) {
  let calc = (wins * 3) + (ties * 1);
  return calc;
}

// Desafio 6
function highestCount(arr) {
  let num = -Infinity;
  //  usar -Infinity foi uma dica da Joicy durante o code review
  let contador = 0;

  for (let i = 0; i < arr.length; i += 1) {
    if (num < arr[i]) {
      num = arr[i];
    }
  }

  for (let j of arr) {
    if (num === j) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = cat1 - mouse;
  let dist2 = cat2 - mouse;

  if (dist1 < 0) {
    dist1 *= (-1);
  }

  if (dist2 < 0) {
    dist2 *= (-1);
  }

  if (dist1 < dist2) {
    return 'cat1';
  } else if (dist1 === dist2) {
    return 'os gatos trombam e o rato foge';                    
  } else {
    return 'cat2';
  }
}

// Desafio 8
function fizzBuzz(arr) {
  let result = [];
  for (let i of arr) {
    if ((i % 3) === 0 && (i % 5) !== 0) {
      result.push('fizz');
    } else if ((i % 5) === 0 && (i % 3) !== 0) {
      result.push('buzz');
    } else if ((i % 3) === 0 && (i % 5) === 0) {
      result.push('fizzBuzz');
    } else {
      result.push('bug!');
    }
  }
  return result;
}

// Desafio 9
function encode(str) {
  let msg = '';
  for (let i of str) {
    if (i === 'a') {
      msg += '1';
    } else if (i === 'e') {
      msg += '2';
    } else if (i === 'i') {
      msg += '3';
    } else if (i === 'o') {
      msg += '4';
    } else if (i === 'u') {
      msg += '5';
    } else {
      msg += i;
    }
  }
  return msg;
}

function decode(str) {
  let msg = '';
  for (let i of str) {
    if (i === '1') {
      msg += 'a';
    } else if (i === '2') {
      msg += 'e';
    } else if (i === '3') {
      msg += 'i';
    } else if (i === '4') {
      msg += 'o';
    } else if (i === '5') {
      msg += 'u';
    } else {
      msg += i;
    }
  }
  return msg;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
