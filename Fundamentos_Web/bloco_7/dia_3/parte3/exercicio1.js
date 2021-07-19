// 1. Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.

const assert = require('assert');


const greetPeople = (people) => {
    
    let greeting = [];
    if (typeof people !== 'object') {
        Error ('this is not an object')
    }
  
    for (let person of people) {
      greeting.push(`Hello ${person}`);
    }
    return greeting;
  };
  
  const parameter = ['Irina', 'Ashleigh', 'Elsa'];
  const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];
  const output = (greetPeople(parameter))

  assert.deepStrictEqual(typeof output, 'object')
  assert.deepStrictEqual(output, result)
  assert.throws(() => {
      greetPeople(3)
      greetPeople('Gabriel')
      greetPeople(() => 'Otavio')
    },'this is not an object')