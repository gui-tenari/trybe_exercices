// Adiciona texto ao container
function writeOnImage() {
    const box = document.getElementById('text-input');
    const textOnImage = document.getElementById('text');
    textOnImage.innerText = box.value
}

let textBox = document.getElementById('text-input');

textBox.addEventListener('keyup', writeOnImage);

// Adiciona imagem.
const image = document.getElementById('meme-insert');
const container = document.getElementById('meme-image-container');

function addImage(event) {
   const meme = document.createElement('img');
   meme.src = URL.createObjectURL(event.target.files[0]);
   meme.id = 'meme-image'
   container.appendChild(meme)
}

image.addEventListener('change', addImage)