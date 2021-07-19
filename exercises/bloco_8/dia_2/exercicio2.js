const books = require('./exercicio1')
const assert = require('assert');


function smallerName() {
    let nameBook;
    let length = books[0].name.length
    books.forEach((book) => {
        if (book.name.length < length) {
            nameBook = book.name
            length = book.name.length
        }
    })
    return nameBook;
}

  
  assert.strictEqual(smallerName(), 'Duna');