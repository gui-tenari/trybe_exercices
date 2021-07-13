// 2. Escreva a função wordLengths para passar nos testes já implementados.


const assert = require('assert');
// escreva a função wordLengths aqui

function wordLengths(array) {
    let lengths = [];
    for (let word of array) {
        lengths.push(word.length)
    }
    return lengths
}


const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);