const books = require("./exercicio1");
const assert = require('assert');

const expectedResult = true;

function someBookWasReleaseOnThe80s() {
    return books.some((book) => book.releaseYear > 1979 && book.releaseYear < 1990)
}

assert.strictEqual(someBookWasReleaseOnThe80s(), expectedResult);