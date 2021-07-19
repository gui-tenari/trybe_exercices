// Função do botão input-task.
const orderedList = document.getElementsByTagName('ol')[0];
function inputTask() {
  const listItem = document.createElement('li');
  const texto = document.getElementById('texto-tarefa').value;
  listItem.innerText = texto;
  orderedList.appendChild(listItem);
  listItem.style.backgroundColor = 'white';
  document.getElementById('texto-tarefa').value = '';
}

document.getElementById('criar-tarefa').addEventListener('click', inputTask);

//  Altera a cor dos item da lista ao clicar
function changeColor(event) {
  const selectedOne = document.querySelector('.selected');
  if (selectedOne != null) {
    selectedOne.style.backgroundColor = 'white';
    selectedOne.classList.remove('selected');
  }
  const listItem = event.target;
  listItem.style.backgroundColor = 'rgb(128,128,128)';
  listItem.classList.add('selected');
}

orderedList.addEventListener('click', changeColor);

// Adiciona DoubleClick.
function riskItem(event) {
  const listItem = event.target;
  if (listItem.classList.contains('completed')) {
    listItem.classList.remove('completed');
  } else {
    listItem.classList.add('completed');
  }
}

orderedList.addEventListener('dblclick', riskItem);

// Adiciona Botao Apaga-tudo
function clearAll() {
  orderedList.innerHTML = '';
}

document.getElementById('apaga-tudo').addEventListener('click', clearAll);

// Adiciona Botão Remover-finalizados.
function removeFinished() {
  const finishedTasks = document.getElementsByClassName('completed');
  for (let index = 0; index < finishedTasks.length; index += 0) {
    finishedTasks[index].parentNode.removeChild(finishedTasks[index]);
  }
}

document.getElementById('remover-finalizados').addEventListener('click', removeFinished);

// Adiciona botão de Salvar tarefas.
function getProprieties(item) {
  const text = item.innerText;
  const itemClass = item.className;
  return { texto: text, class: itemClass };
}

function saveTaskList() {
  localStorage.clear();
  const tasks = [];
  const listItems = document.getElementsByTagName('li');
  for (let index = 0; index < listItems.length; index += 1) {
    const proprieties = getProprieties(listItems[index]);
    tasks.push(proprieties);
  }
  localStorage.setItem('taskList', JSON.stringify(tasks));
}

document.getElementById('salvar-tarefas').addEventListener('click', saveTaskList);

function savedTask(object) {
  const classe = object.class;
  const { texto } = object;
  const listItem = document.createElement('li');
  listItem.innerText = texto;
  if (classe === 'completed' || classe === 'selected completed') {
    listItem.className = 'completed';
  }
  orderedList.appendChild(listItem);
}

window.onload = function captureTasks() {
  if (localStorage.taskList) {
    const taskList = JSON.parse(localStorage.taskList);
    for (let index = 0; index < taskList.length; index += 1) {
      savedTask(taskList[index]);
    }
  }
};

// Botões mover para cima e para baixo

function upPosition() {
  const listItems = document.getElementsByTagName('li');
  for (let index = 1; index < listItems.length; index += 1) {
    const actualItem = listItems[index];
    const itemBefore = listItems[index - 1];
    if (actualItem.classList.contains('selected')) {
      itemBefore.insertAdjacentElement('beforebegin', actualItem);
    }
  }
}

function downPosition() {
  const listItems = document.getElementsByTagName('li');
  for (let index = 0; index < listItems.length - 1; index += 1) {
    const actualItem = listItems[index];
    const itemAfter = listItems[index + 1];
    if (actualItem.classList.contains('selected')) {
      actualItem.insertAdjacentElement('beforebegin', itemAfter);
      return;
    }
  }
}

document.getElementById('mover-cima').addEventListener('click', upPosition);

document.getElementById('mover-baixo').addEventListener('click', downPosition);

// Botão Remover Selecioando
function removeSelected() {
  const selected = document.querySelector('.selected');
  orderedList.removeChild(selected);
}

document.getElementById('remover-selecionado').addEventListener('click', removeSelected);
