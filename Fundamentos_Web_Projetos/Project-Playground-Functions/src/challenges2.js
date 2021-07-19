// Desafio 10
function techList(techs, name) {
  let results = [];
  let orderedTechs = techs.sort();

  for (let tech of orderedTechs) {
    results.push({ tech, name });
  }
  if (results.length > 0) {
    return results;
  }
  return 'Vazio!';
}

// Desafio 11

function checkNumbers(array) {
  for (let index of array) {
    if (index < 0 || index > 10) {
      return false;
    }
  }
  return true;
}

function countRepeated(array) {
  let objetoRepeticoes = {};
  for (let number of array) {
    if (objetoRepeticoes[number] === undefined) {
      objetoRepeticoes[number] = 1;
    } else {
      objetoRepeticoes[number] += 1;
    }
  }
  return objetoRepeticoes;
}

function checkRepeated(array) {
  let object = countRepeated(array);
  for (let key in object) {
    if (object[key] > 2) {
      return false;
    }
  }
  return true;
}

function modifyArray(array) {
  let modifiedArray = '(';
  for (let index = 0; index < array.length; index += 1) {
    switch (index) {
    case 1:
      modifiedArray = `${modifiedArray + array[index]}) `;
      break;
    case 7:
      modifiedArray = `${modifiedArray}-${array[index]}`;
      break;
    default: modifiedArray += array[index];
    }
  }
  return modifiedArray;
}

function generatePhoneNumber(array) {
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (!checkRepeated(array)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  if (!checkNumbers(array)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  let finalResult = modifyArray(array);
  return finalResult;
}

console.log(generatePhoneNumber([0, 21, 3, 4, 14, 2, 7, 8, 19, 9, 4]));

// Desafio 12
function check1(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineA + lineB) {
    return [lineA, lineB, lineC];
  }
  return false;
}

function check2(array) {
  let lineA = array[0];
  let lineB = array[1];
  let lineC = array[2];
  let compare1 = lineA > Math.abs(lineB - lineC);
  let compare2 = lineB > Math.abs(lineA - lineC);
  let compare3 = lineC > Math.abs(lineA - lineB);
  if (compare1 && compare2 && compare3) {
    return [lineA, lineB, lineC];
  }
  return false;
}

function triangleCheck(lineA, lineB, lineC) {
  let plusCheck = check1(lineA, lineB, lineC);
  let minusCheck = check2(plusCheck);
  if (minusCheck.length !== 3) {
    return false;
  }
  return true;
}

// Desafio 13
function findNumbers(string) {
  let rule = /\d+/g;
  let numbers = string.match(rule);
  let sum = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    sum += Number(numbers[index]);
  }
  return sum;
}

function hydrate(string) {
  let numbers = findNumbers(string);
  if (numbers === 1) {
    return `${numbers} copo de água`;
  }
  return `${numbers} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
