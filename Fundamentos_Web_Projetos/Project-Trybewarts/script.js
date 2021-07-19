// Botão de login
const loginButton = document.getElementById('login-button');

function checkUser() {
  const userLogin = document.getElementById('user-login');
  const userPassword = document.getElementById('user-password');
  const user = userLogin.value;
  const password = userPassword.value;
  const email = 'tryber@teste.com';
  const senha = '123456';
  if (user === email && password === senha) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

loginButton.addEventListener('click', checkUser);

// Adiciona condicional da Checkbox
const checkbox = document.getElementById('agreement');
const sendButton = document.getElementById('submit-btn');

function enableButton() {
  if (sendButton.disabled === true) {
    sendButton.disabled = false;
  } else {
    sendButton.disabled = true;
  }
}

checkbox.addEventListener('change', enableButton);

// Adiciona counter
const container = document.getElementById('textarea');
let counter = 500;

function updateCounter() {
  counter = (500 - container.value.length);
  document.getElementById('counter').innerHTML = counter;
}
container.addEventListener('keyup', updateCounter);

// Adiciona ação ao botão Enviar

function getFullName() {
  const name = document.getElementById('input-name').value;
  const lastName = document.getElementById('input-lastname').value;
  const fullname = document.createElement('div');
  fullname.innerText = `Nome: ${name} ${lastName}`;
  return fullname;
}

function getEmail() {
  const email = document.getElementById('input-email').value;
  const emailBox = document.createElement('div');
  emailBox.innerText = `Email: ${email}`;
  return emailBox;
}

function getHouse() {
  const houses = document.getElementById('house');
  const option = document.createElement('div');
  for (let index = 0; index < houses.length; index += 1) {
    if (houses[index].selected === true) {
      option.innerText = `Casa: ${houses[index].innerText}`;
      return option;
    }
  }
}

function getFamily() {
  const family = document.createElement('div');
  family.innerText = `Família: ${document.querySelector('input[name = family]:checked').value}`;
  return family;
}

function getSubjects() {
  const markedCheckbox = document.querySelectorAll('input[name = "conteudo"]:checked');
  const subjectsContainer = document.createElement('div');
  const chosenSubjects = [];
  for (let index = 0; index < markedCheckbox.length; index += 1) {
    const actualSubject = markedCheckbox[index].value;
    chosenSubjects.push(` ${actualSubject}`);
  }
  subjectsContainer.innerText = `Matérias:${chosenSubjects}`;
  return subjectsContainer;
}

function getRate() {
  const rate = document.createElement('div');
  rate.innerText = `Avaliação: ${document.querySelector('input[name = rate]:checked').value}`;
  return rate;
}

function getComments() {
  const comments = document.createElement('div');
  comments.innerText = `Observações: ${document.getElementById('textarea').value}`;
  return comments;
}

console.log(getFullName());
console.log(getEmail());
console.log(getHouse());
console.log(getSubjects());

function createForm() {
  const completedForm = document.createElement('div');
  completedForm.id = 'evaluation-form';
  completedForm.appendChild(getFullName());
  completedForm.appendChild(getEmail());
  completedForm.appendChild(getHouse());
  completedForm.appendChild(getFamily());
  completedForm.appendChild(getSubjects());
  completedForm.appendChild(getRate());
  completedForm.appendChild(getComments());
  const siteContainer = document.getElementById('form-container');
  siteContainer.removeChild(siteContainer.children[0]);
  siteContainer.appendChild(completedForm);
}

document.getElementById('submit-btn').addEventListener('click', createForm);
