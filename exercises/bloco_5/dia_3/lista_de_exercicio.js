function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;
  let containerDays = document.getElementById('days');

 // 1

function createDays(parent) {
      for (let number of dezDaysList) {
      let day = document.createElement('li');
      day.className = 'day';
      day.innerText = number;
      parent.appendChild(day);
      }
      AddHolidays([24, 25, 31]);
      AddFiedays([4, 11, 18,  25])
  }

function AddHolidays(array) {
    for (let holiday of array) {
        let allDays = document.getElementsByClassName ('day');
        for (let days of allDays) {
            if(parseInt(days.innerText) === holiday){
                days.classList.add('holiday')
            }       
        }
    }
}

function AddFiedays(array) {
    for (let friday of array) {
        let allDays = document.getElementsByClassName ('day');
        for (let day of allDays) {
            if(parseInt(day.innerText) === friday){
                day.classList.add('friday')
            }       
        }
    }
}
   
(createDays(containerDays));

// 2
function createButton (string, father, identação) {
    let button = document.createElement('button');
    let divPai = document.getElementsByClassName(father);
    button.id = identação;
    divPai[0].appendChild(button);
    button.innerText = string;
}

createButton ('Feriados!', 'buttons-container','btn-holiday')

// 3 
let clickedHoliday = false;
document.getElementById('btn-holiday').addEventListener('click',  function () {
    let holidays = document.getElementsByClassName('holiday');
    for (let holiday of holidays) {
            if (clickedHoliday) {
            holiday.style.backgroundColor = 'rgb(238,238,238)';
        } else {
            holiday.style.backgroundColor = 'red'
        }
    }
    clickedHoliday = !(clickedHoliday)       
    console.log(clickedHoliday) 
});

// 4
createButton ('Sexta-feira', 'buttons-container', 'btn-friday')

// 5
let clickedFriday = false
document.getElementById('btn-friday').addEventListener('click',  function () {
    let fridays = document.getElementsByClassName('friday');
    for (let friday of fridays) {
            if (clickedFriday) {
            friday.style.backgroundColor = 'rgb(238,238,238)';
        } else {
            friday.style.backgroundColor = 'blue'
        }
    }
    clickedFriday = !(clickedFriday)       
});

// 6
let days = document.getElementsByClassName('day');
function zoomEffect (event) {
    event.target.style.fontSize = '30px';
}
function zoomBack (event) {
    event.target.style.fontSize = '20px';
}
for (let day of days) {
day.addEventListener('mouseover', zoomEffect)
}

for (let day of days) {
    day.addEventListener('mouseout', zoomBack)
    }

// 7
let myTasks = document.getElementsByClassName('my-tasks')
function createTask (tarefa) {
    let task = document.createElement('span');
    task.innerText = tarefa
    myTasks[0].appendChild(task);
}
createTask('Cozinhar')

// 8
function changeColor (color) {
    let myTask = document.createElement('div');
    myTask.classList.add('task');
    myTasks[0].appendChild(myTask);
    myTask.style.backgroundColor = color
}
changeColor('green');

// 9
let taskList = document.getElementsByClassName('task')
let taskClicked = false;
function changeClass (event) {
    for (let task of taskList) {
        if(taskClicked) {
            task.classList.remove('selected')
        } else {
            task.classList.add('selected')
        }
    }
    taskClicked = !(taskClicked)
    console.log(taskClicked)
}

for (let task of taskList)
task.addEventListener('click', changeClass)

