const books = require("./exercicio1");
const assert = require('assert');

const expectedResult = false;

function everyoneWasBornOnSecXX() {
    return books.every((book) => book.author.birthYear > 1900 && book.author.birthYear < 1999)
}

assert.strictEqual(everyoneWasBornOnSecXX(), expectedResult);