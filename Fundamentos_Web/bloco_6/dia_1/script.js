// Adiciona Lista de Estados
let states = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MS', 'MT', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO']

const statesList = document.querySelector('#user-state')

function createOptions (array) {
    for (let index = 0; index < array.length; index += 1) {
        const state = document.createElement('option');
        state.value = states[index];
        state.innerText = states[index]
        statesList.appendChild(state)[0]
        
    }
}

createOptions(states)

// Verifica data 
function checkDate () {
    const date = document.getElementById('start-date')
    const startDate = date.value;
    const arrayDate = convertToArray(startDate);
    if (arrayDate[0] > 31 || arrayDate[0] < 0) {
        alert('data inválida')
    }
    if (arrayDate[1] > 12 || arrayDate[0] < 0) {
        alert('data inválida')
    }  
    if (arrayDate[2] < 0) {
        alert('data inválida')
    }
    }
// function convertToArray (dateForm) {
//     const numbers = [];
//     let number = '';
//     for (let index = 0; index < dateForm.length; index++) {
//         const element = dateForm[index];
//         if (element === '/') {
//             numbers.push(number);
//             number = ''
//         } else if (index == dateForm.length - 1) {
//             number += element;
//             numbers.push(number); 
//         } else { 
//             number += element;  
//         }
//     }
//     return numbers
// }
// checkDate()