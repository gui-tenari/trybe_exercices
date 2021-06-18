// 1. Crie uma função que receba um número e retorne seu fatorial.

// Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
// Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator .

const fatorial = (number) => {
    let result = 1
    for(let index = 2; index <= number; index += 1) {
        result *= index
    }
    return result
}

const recursiveForm = (number) => (number === 0) ?  1 : number * recursiveForm(number-1);

console.log(recursiveForm(6))