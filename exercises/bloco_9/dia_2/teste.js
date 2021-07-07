const getNumber = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let result = 0
  for(index of array) {
    result += (index * index)
  }
  if (result > 8000) {
    return `${result} is higher`
  }
  return `${result} is lower`
}

console.log(getNumber())