function getXSquaredNumbers (number) {
    const result = [];
    for (let index = 0; index < number; index += 1) {
        result.push(parseInt(Math.random() * 50))
    }
    return result
}
function getDivisors(number) {
    const one = parseInt(number/2);
    const two = parseInt(number/3);
    const three = parseInt(number/5);
    const four = parseInt(number/10);
    return [one, two, three, four]
}


const getNumber = (number) => {
    return new Promise((resolve, reject) => {
    const array = getXSquaredNumbers(number)
      let result = 0
      for(index of array) {
        result += (index * index)
      }
      if (result > 8000) {
        return resolve(result)
      }
      return reject(result)
    })
  }

getNumber(10)
    .then((result) => getDivisors(result))
    .then((divisors) => {const result = divisors.reduce((acc, number) => acc += number)
        console.log(`The sum of those divisors is: ${result}`)
    })
    .catch((number) => console.log(`${number} is lower than 8000`))
