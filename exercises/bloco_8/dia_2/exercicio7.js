const books = require("./exercicio1");
const assert = require('assert');

const expectedResult = false;

function authorUnique() {
    let years = {};
    books.forEach((book) => {
        if(years[book.author.birthYear]){
            years[book.author.birthYear] += 1;
        } else {
            years[book.author.birthYear] = 1;
        }
        // return true
    })
    
}

console.log(authorUnique())

// assert.strictEqual(authorUnique(), expectedResult);

