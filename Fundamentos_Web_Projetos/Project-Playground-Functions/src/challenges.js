// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(sentence) {
  let separetedWords = sentence.split(' ');
  return separetedWords;
}

// Desafio 4
function concatName(array) {
  let firstAndLast = '';

  for (let index = array.length - 1; index < array.length; index += 1) {
    firstAndLast = `${array[index]}, `;
  }
  for (let i = 0; i === 0; i += 1) {
    firstAndLast += array[i];
  }
  return firstAndLast;
}

// Desafio 5
function footballPoints(wins, ties) {
  let victoryPoints = wins * 3;
  return victoryPoints + ties;
}

// Desafio 6
function higher(array) {
  let isItHigher = array[0];
  for (let number of array) {
    if (number > isItHigher) {
      isItHigher = number;
    }
  }
  return isItHigher;
}

function highestCount(array) {
  let highestOne = higher(array);
  let timesRepaeat = 0;
  for (let number of array) {
    if (number === highestOne) {
      timesRepaeat += 1;
    }
  }
  return timesRepaeat;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceOfcat1 = Math.abs(cat1 - mouse);
  let distanceOfcat2 = Math.abs((cat2 - mouse));
  if (distanceOfcat1 < distanceOfcat2) {
    return 'cat1';
  }
  if (distanceOfcat1 === distanceOfcat2) {
    return 'os gatos trombam e o rato foge';
  }
  return 'cat2';
}

// Desafio 8
function threeAndFive(array) {
  let buzzLenguage = [];
  for (let divisor of array) {
    if (divisor % 3 === 0 && divisor % 5 === 0) {
      buzzLenguage.push('fizzBuzz');
    } else {
      buzzLenguage.push(divisor);
    }
  }
  return buzzLenguage;
}

function threeOrFive(array) {
  let buzzLenguage = [];
  for (let divisor of array) {
    if (divisor % 3 === 0) {
      buzzLenguage.push('fizz');
    } else if (divisor % 5 === 0) {
      buzzLenguage.push('buzz');
    } else {
      buzzLenguage.push(divisor);
    }
  }
  return buzzLenguage;
}

function bugs(array) {
  let insertBugs = [];
  for (let number of array) {
    if (number.length > 1) {
      insertBugs.push(number);
    } else {
      insertBugs.push('bug!');
    }
  }
  return insertBugs;
}

function fizzBuzz(array) {
  let inputFizzBuzz = threeAndFive(array);
  let inputFizzOrBuzz = threeOrFive(inputFizzBuzz);
  let finalResult = bugs(inputFizzOrBuzz);
  return finalResult;
}

// Desafio 9
function programeToEnconde1(string) {
  let encodedSentence = '';
  for (let letra of string) {
    let actualLetter = letra;
    switch (actualLetter) {
    case 'a':
      actualLetter = '1';
      break;
    case 'e':
      actualLetter = '2';
      break;
    default: actualLetter = letra;
    }
    encodedSentence += actualLetter;
  }
  return encodedSentence;
}

function programeToEnconde2(string) {
  let encodedSentence = '';
  for (let letra of string) {
    let actualLetter = letra;
    switch (actualLetter) {
    case 'i':
      actualLetter = '3';
      break;
    case 'o':
      actualLetter = '4';
      break;
    case 'u':
      actualLetter = '5';
      break;
    default: actualLetter = letra;
    }
    encodedSentence += actualLetter;
  }
  return encodedSentence;
}

function encode(string) {
  let encodedSentencePt1 = programeToEnconde1(string);
  let encodedSentencePt2 = programeToEnconde2(encodedSentencePt1);
  return encodedSentencePt2;
}

function programeToDecode1(string) {
  let encodedSentence = '';
  for (let letra of string) {
    let actualLetter = letra;
    switch (actualLetter) {
    case '1':
      actualLetter = 'a';
      break;
    case '2':
      actualLetter = 'e';
      break;
    default: actualLetter = letra;
    }
    encodedSentence += actualLetter;
  }
  return encodedSentence;
}

function programeToDecode2(string) {
  let encodedSentence = '';
  for (let letra of string) {
    let actualLetter = letra;
    switch (actualLetter) {
    case '3':
      actualLetter = 'i';
      break;
    case '4':
      actualLetter = 'o';
      break;
    case '5':
      actualLetter = 'u';
      break;
    default: actualLetter = letra;
    }
    encodedSentence += actualLetter;
  }
  return encodedSentence;
}

function decode(string) {
  let decodedSentencePt1 = programeToDecode1(string);
  let decodedSentencePt2 = programeToDecode2(decodedSentencePt1);
  return decodedSentencePt2;
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
