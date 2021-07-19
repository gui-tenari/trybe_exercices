// Adiciona Cores à paleta.
const divPai = document.getElementById('color-palette');

function addColor(color) {
  let newColor = document.createElement('div');
  newColor.className = 'color';
  newColor.style.backgroundColor = color;
  divPai.appendChild(newColor);
}
addColor('black');

if (sessionStorage.xablau === undefined) {
  addColor('red');
  addColor('blue');
  addColor('yellow');
  sessionStorage.setItem('xablau', '1');
} else {
  addColor(randowColor());
  addColor(randowColor());
  addColor(randowColor());

}

// Adiciona selected ao Preto.
const firstColor = document.getElementsByClassName('color')[0];
firstColor.classList.add('selected');

//  Cria Tabela de Pixels.
const pixelBoard = document.getElementById('pixel-board');
function createPixels(size) {
  pixelBoard.innerHTML = '';
  for (let height = 1; height <= size; height += 1) {
    for (let widht = 1; widht <= size; widht += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixel.style.backgroundColor = 'white';
      pixelBoard.appendChild(pixel);
    }
    pixelBoard.style.width = size * 45 + 'px';
  }
  let pixels = document.getElementsByClassName('pixel');
  for (let pixel of pixels) {
  pixel.addEventListener('click', changeColor);
  }
}
createPixels(5);

// Muda a classe Selected.
function changeClass(event) {
  let actualSelected = document.querySelector('.selected');
  actualSelected.classList.remove('selected');
  event.target.classList.add('selected');
}

const colors = document.getElementsByClassName('color');
for (let color of colors) {
    color.addEventListener('click', changeClass);
}

// Muda a cor dos quadradinhos.
function changeColor(event) {
  let selectedColor = document.querySelector('.selected');
  let color = selectedColor.style.backgroundColor;
  event.target.style.backgroundColor = color;
}



// Reseta os quadrados.
const button = document.getElementById('clear-board');

function resetBoard() {
  const squares = document.getElementsByClassName('pixel');
  for (let index = 0; index < squares.length; index += 1) {
    squares[index].style.backgroundColor = 'white';
  }
}

button.addEventListener('click', resetBoard);

// inserindo o valor do usuário
function changeSizes() {
  const input = document.getElementById('board-size');
  let valor = input.value;
  if (valor === '') {
    alert('Board inválido!');
  }
  if (valor < 5) {
    valor = 5;
  }
  if (valor > 50) {
    valor = 50;
  }
  createPixels(valor);
}

const buttonVQV = document.getElementById('generate-board');

buttonVQV.addEventListener('click', changeSizes);

// Randoniza as cores;
function randowColor () {
  let first = parseInt(Math.random() * 255);
  let second = parseInt(Math.random() * 255);
  let third = parseInt(Math.random() * 255);
  let colors = `rgb(${first},${second},${third})`;
  return colors;
}
console.log(randowColor());


// let color1 = 'rgb(numeroaleatorio1  + numeroaleatorio2 + numeroaleatorio3)'