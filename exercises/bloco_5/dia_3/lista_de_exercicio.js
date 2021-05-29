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
function createButton (string) {
    let button = document.createElement('button');
    let divPai = document.getElementsByClassName('buttons-container');
    button.className = 'btn-holiday';
    divPai[0].appendChild(button);
    button.innerText = string;
}

createButton ('Feriados!')
