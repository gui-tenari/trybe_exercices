
// 3. Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.

const assert = require('assert');

const greaterThanTen = (array) => {
    let results = [];
    if (typeof array !== 'object') {
        throw new Error ('input its not an object')
    }
    for (let index = 0; index < array.length; index += 1) {
      if (array[index] > 10) {
        results.push(array[index]);
      }
    }
    return results;
  };
  
  const parameter = [4, 10, 32, 9, 21];
  const result = [32, 21];
  const output = greaterThanTen(parameter);

  assert.deepStrictEqual(output, result)
  assert.deepStrictEqual(greaterThanTen([25, 2, 31, 7]), [25, 31]);
  assert.throws(() => {
    greaterThanTen(['5', '8'])
    greaterThanTen(5, 9)
    greaterThanTen(() => {'5'})
  })
  