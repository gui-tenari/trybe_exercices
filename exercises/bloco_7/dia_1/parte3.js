const button = document.querySelector('#btn');

let numbers = 0

button.addEventListener('click', () => 
    {numbers += 1; document.querySelector('#counter').innerHTML = `Você clicou ${numbers} vezes`})