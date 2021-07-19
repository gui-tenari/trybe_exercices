// 2. Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.

const assert = require('assert');

const removeVowels = (word) => {
  if (typeof word !== 'string') {
    throw new Error('this is not a string')
  }
  let number = 0
  let results = '';
  for (let index = 0; index < word.length; index += 1) {
      const letter = word[index]
    switch (letter) {
        case 'a':
          number += 1;
          results += number
          break;
        case 'e':
          number += 1;
          results += number
          break;
        case 'i':
          number += 1;
          results += number
          break;
        case 'o':
          number += 1;
          results += number
          break;
        case 'u':
          number += 1;
          results += number
          break;
        default:
          results += letter
    }
  }
  return results
}
  
  
  const parameter = 'Dayane';
  const result = 'D1y2n3';
  const output = removeVowels(parameter)


  assert.strictEqual(typeof output, 'string');
  assert.strictEqual(output, result);



  assert.throws(() => {
    removeVowels(3)
    removeVowels(['jorge', 'Oliva'])
    removeVowels(() => 'Pablo')
  }, /^Error: this is not a string$/)

