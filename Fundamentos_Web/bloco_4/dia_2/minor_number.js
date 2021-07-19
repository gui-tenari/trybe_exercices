let numbers = [ 5, 9, 3, 19, 70, 100, 8, 2, 35, 27];
let minorNumber= numbers[0] 

for ( let i=1; i<numbers.length; i+=1 ) {
    actualNumber = numbers[i]
    if (actualNumber < minorNumber){
        minorNumber = actualNumber
    } else {

    }
}
console.log (minorNumber)