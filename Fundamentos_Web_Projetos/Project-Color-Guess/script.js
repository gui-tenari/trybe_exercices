// Adiciona a cor a ser advinhada;
function generateColor() {
  const number1 = parseInt([Math.random() * 255], 10);
  const number2 = parseInt([Math.random() * 255], 10);
  const number3 = parseInt([Math.random() * 255], 10);
  const color = `(${number1}, ${number2}, ${number3})`;
  return color;
}

document.querySelector('#rgb-color').innerText = generateColor();

// Adiciona Opções a serem advinhadas
const optionsBoard = document.getElementById('options');
function generateOptions(number) {
  const ramdomAnswer = Math.ceil(Math.random(10) * [number]);
  console.log(ramdomAnswer);
  for (let index = 1; index <= number; index += 1) {
    const circle = document.createElement('div');
    circle.className = 'ball';
    optionsBoard.appendChild(circle);
    if (index === ramdomAnswer) {
      const color = document.querySelector('#rgb-color').innerText;
      circle.style.backgroundColor = `rgb${color}`;
      circle.classList.add('right');
    } else {
      circle.style.backgroundColor = `rgb${generateColor()}`;
    }
  }
}

generateOptions(6);

// Adiciona Score
const buttons = document.getElementsByClassName('ball');
function checkAnswer(event) {
  const text = document.getElementById('answer');
  if (event.target.classList.contains('right')) {
    text.innerText = 'Acertou!';
    const score = document.getElementById('score');
    const number = score.innerText.match(/\d+/g);
    console.log(number);
    const newScore = parseInt(number, 10) + 3;
    console.log(newScore);
    score.innerText = `Score: ${newScore}`;
  } else {
    text.innerText = 'Errou! Tente novamente!';
  }
}

for (let index = 0; index < buttons.length; index += 1) {
  buttons[index].addEventListener('click', checkAnswer);
}

// Adiciona botão Reset
function resetGame() {
  document.querySelector('#rgb-color').innerText = generateColor();
  const container = document.getElementById('options');
  while (container.children.length > 0) {
    optionsBoard.removeChild(optionsBoard.lastChild);
  }
  generateOptions(6);
  for (let index = 0; index < buttons.length; index += 1) {
    buttons[index].addEventListener('click', checkAnswer);
  }
  document.getElementById('answer').innerHTML = 'Escolha uma cor:';
}

document.querySelector('#reset-game').addEventListener('click', resetGame);
