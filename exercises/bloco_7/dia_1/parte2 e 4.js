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

// 2. Crie uma função que receba uma frase e retorne qual a maior palavra.

// Exemplo:
// longestWord("Antônio foi no banheiro e não sabemos o que aconteceu") // retorna 'aconteceu'

const longestWord = (sentence) => {
const words = sentence.split(' ').sort((a, b) => b.length - a.length)
return words[0];
}
console.log(longestWord('hello my friends'));


/* 4. Crie um código JavaScript com a seguinte especificação:
. Não se esqueça de usar template literals

Função 1 : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string .

Exemplo:
String determinada: "Tryber x aqui!"
Parâmetro: "Bebeto"
Retorno: "Tryber Bebeto aqui!"
Um array com escopo global, que é o escopo do arquivo JS , nesse caso, contendo cinco strings com suas principais skills .*/

const parametro = 'xablau'

const replacingX = (string) => {
  const words = string.split(' ');
  let sentence = ''
  for(let index = 0; index < words.length; index += 1) {
    if(words[index] === 'x') {
      words[index] = parametro
    }
    sentence = `${sentence} ${words[index]}`
  }
return sentence
}

console.log(replacingX('hi trybers x, quem gosta do oliva x'))

let skills = ['html', 'css', 'javascript', 'Dom', 'github']

/*Função 2 : Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string .

Exemplo: "Tryber x aqui! Minhas cinco principais habilidades são:
JavaScript;
HTML; ... #goTrybe".*/

const mySkills = (skills) => `${replacingX('hi trybers x, quem gosta do oliva x ?')} 
Aqui estão minhas principais habilidades: 
${skills}`

console.log(mySkills(skills));



