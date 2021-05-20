let numbers = [ 5, 9, 3, 19, 70, 100, 8, 2, 35, 27];

for (let i=0; i<numbers.length; i+=1) {;
    let timesBigger = 0
    actualNumber = numbers[i];
        for (let index=0; index<numbers.length; index +=1) {
            let relativeNumber = numbers[index];
            isBigger = actualNumber >= relativeNumber;
            if (isBigger == true) {
                timesBigger = timesBigger + 1
            } else {
            };
        }
        
        if (timesBigger == numbers.length) {
            console.log(numbers[i]);
        } else {

        };
        
}
