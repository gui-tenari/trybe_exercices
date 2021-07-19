const assert = require('assert');
const productDetails = require('../src/productDetails');

function checkEnds (end) {
  let products = productDetails('Máscara', 'Alcóol gel');
  for(let index = 0; index < products.length; index += 1) {
    let details = products[index].details
    if(!details.productId.endsWith(`${end}`)) {
      return false
    }
  }
  return true
}

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    assert.ok(Array.isArray(productDetails('Máscara', 'Alcóol gel')))
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(productDetails('Máscara', 'Alcóol gel').length, 2)
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof(Object.values(productDetails('Máscara', 'Alcóol gel'))), 'object')
    // Teste que os dois objetos são diferentes entre si.
    assert.notStrictEqual(Object.values(productDetails('Máscara', 'Alcóol gel')[0]), 
    Object.values(productDetails('Máscara', 'Alcóol gel')[1]))
    // Teste que os dois productIds terminam com 123.
    assert.ok(checkEnds('123'))
  });
});

