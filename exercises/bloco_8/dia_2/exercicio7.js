const books = require("./exercicio1");
const assert = require('assert');

const expectedResult = false;

function authorUnique() {
    let years = [];
    books.forEach((book) => {years.push(book.author.birthYear)})
    years.find((year) => )
}

assert.strictEqual(authorUnique(), expectedResult);

