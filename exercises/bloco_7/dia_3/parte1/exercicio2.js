const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// implemente seus testes aqui

assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4]);
assert.notStrictEqual(myRemove([1, 2, 3, 5], 3), [1, 2, 3, 4]);

let myArray = [5, 8, 9, 10]
console.log(myRemove(myArray, 8))
assert.deepStrictEqual(myArray, [5, 8, 9, 10]);

assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4])