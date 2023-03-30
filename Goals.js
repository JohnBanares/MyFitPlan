// // Get all buttons with class "my-button"
// const button = document.querySelector(".goals");

// button.addEventListener("click",  () => {
//     console.log('Button clicked!');
// });

var toggle = true;
const buttons = document.querySelectorAll('.goals');

buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    if (toggle) {
      button.style.backgroundColor = "#D6D7D9";
      button.dataset.value = "notcompleted";
    } else {
      button.style.backgroundColor = '#94BFA2';
      button.dataset.value = "completed";
    }
    toggle = !toggle;
  });
});


const date = new Date();

const renderCalendar = () => {
  date.setDate(1);

  const monthDays = document.querySelector(".days");

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const firstDayIndex = date.getDay();

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex - 1;

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  document.querySelector(".date h1").innerHTML = months[date.getMonth()];

  document.querySelector(".date p").innerHTML = "Today: " + new Date().toDateString();

  let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class="today">${i}</div>`;
    } else {
      days += `<div>${i}</div>`;
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
    monthDays.innerHTML = days;
  }

  const dayElements = monthDays.querySelectorAll('div');
  dayElements.forEach(day => {
    day.addEventListener('click', () => {
      console.log(day.innerHTML);
      console.log(months[date.getMonth()]); //0 = jan, 1 = feb, 2 = march
      console.log(date.getFullYear()); 
      dayElements.forEach(day => {
          day.classList.remove('selected');
          day.classList.remove('today');
        });
        day.classList.add('selected');
    });
  });
};

document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

renderCalendar();

//for the form of calander when different dates are clicked
// const dayElements = monthDays.querySelectorAll('div');
// dayElements.forEach(day => {
//   day.addEventListener('click', () => {
//     const selectedDate = `${day.innerHTML} ${months[date.getMonth()]} ${date.getFullYear()}`;
//     document.querySelector("#selectedDate").value = selectedDate;
//     dayElements.forEach(day => {
//       day.classList.remove('selected');
//       day.classList.remove('today');
//     });
//     day.classList.add('selected');
//   });
// });


//FOR MAKING BACKGROUND CHANGE FOR WHEN EACH DATE IS CLICKED
// const date = new Date();

// const renderCalendar = () => {
//   date.setDate(1);

//   const monthDays = document.querySelector(".days");

//   const lastDay = new Date(
//     date.getFullYear(),
//     date.getMonth() + 1,
//     0
//   ).getDate();

//   const prevLastDay = new Date(
//     date.getFullYear(),
//     date.getMonth(),
//     0
//   ).getDate();

//   const firstDayIndex = date.getDay();

//   const lastDayIndex = new Date(
//     date.getFullYear(),
//     date.getMonth() + 1,
//     0
//   ).getDay();

//   const nextDays = 7 - lastDayIndex - 1;

//   const months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];

//   document.querySelector(".date h1").innerHTML = months[date.getMonth()];

//   document.querySelector(".date p").innerHTML = new Date().toDateString();

//   let days = "";

//   for (let x = firstDayIndex; x > 0; x--) {
//     days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
//   }

//   for (let i = 1; i <= lastDay; i++) {
//     if (
//       i === new Date().getDate() &&
//       date.getMonth() === new Date().getMonth()
//     ) {
//       days += `<div class="today">${i}</div>`;
//     } else {
//       days += `<div>${i}</div>`;
//     }
//   }

//   for (let j = 1; j <= nextDays; j++) {
//     days += `<div class="next-date">${j}</div>`;
//     monthDays.innerHTML = days;
//   }

//   const dayElements = monthDays.querySelectorAll('div');
//   dayElements.forEach(day => {
//     day.addEventListener('click', () => {
//       dayElements.forEach(day => {
//         day.classList.remove('selected');
//       });
//       day.classList.add('selected');
//     });
//   });
// };

// document.querySelector(".prev").addEventListener("click", () => {
//   date.setMonth(date.getMonth() - 1);
//   renderCalendar();
// });

// document.querySelector(".next").addEventListener("click", () => {
//   date.setMonth(date.getMonth() + 1);
//   renderCalendar();
// });

// renderCalendar();



// const calendar = document.getElementById('calendar');
// const header = calendar.querySelector('.header');
// const monthYear = header.querySelector('#month-year');
// const prevBtn = header.querySelector('#prev');
// const nextBtn = header.querySelector('#next');
// const daysHeader = calendar.querySelector('.days-header');
// const daysContainer = calendar.querySelector('.days');

// let currentDate = new Date();

// function renderCalendar() {
//   let days = '';
//   let month = currentDate.getMonth();
//   let year = currentDate.getFullYear();
//   let firstDayOfMonth = new Date(year, month, 1);
//   let lastDayOfMonth = new Date(year, month + 1, 0);
//   let daysInMonth = lastDayOfMonth.getDate();

//   monthYear.textContent = `${getMonthName(month)} ${year}`;

//   for (let i = 1; i <= daysInMonth; i++) {
//     let day = new Date(year, month, i);
//     let dayOfWeek = day.getDay();
//     let classes = 'day';
    
//     if (day.getMonth() !== month) {
//       classes += ' other-month';
//     }
//     if (day.toDateString() === new Date().toDateString()) {
//       classes += ' today';
//     }
//     if (day.toDateString() === currentDate.toDateString()) {
//       classes += ' selected';
//     }

//     days += `<div class="${classes}" data-date="${day.toDateString()}">${i}</div>`;
//   }

//   daysHeader.style.display = 'grid';
//   daysContainer.innerHTML = days;
// }

// function getMonthName(month) {
//   const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
//   return months[month];
// }

// function prevMonth() {
//   currentDate.setMonth(currentDate.getMonth() - 1);
//   renderCalendar();
// }

// function nextMonth() {
//   currentDate.setMonth(currentDate.getMonth() + 1);
//   renderCalendar();
// }

// prevBtn.addEventListener('click', prevMonth);
// nextBtn.addEventListener('click', nextMonth);

// renderCalendar();



// const calendar = document.getElementById('calendar');
// const header = calendar.querySelector('.header');
// const monthYear = header.querySelector('#month-year');
// const prevBtn = header.querySelector('#prev');
// const nextBtn = header.querySelector('#next');
// const daysContainer = calendar.querySelector('.days');

// let currentDate = new Date();

// function renderCalendar() {
//   let days = '';
//   let month = currentDate.getMonth();
//   let year = currentDate.getFullYear();
//   let firstDayOfMonth = new Date(year, month, 1);
//   let lastDayOfMonth = new Date(year, month + 1, 0);
//   let daysInMonth = lastDayOfMonth.getDate();

//   monthYear.textContent = `${getMonthName(month)} ${year}`;

//   for (let i = 1; i <= daysInMonth; i++) {
//     let day = new Date(year, month, i);
//     let dayOfWeek = day.getDay();
//     let classes = 'day';
    
//     if (day.getMonth() !== month) {
//       classes += ' other-month';
//     }
//     if (day.toDateString() === new Date().toDateString()) {
//       classes += ' today';
//     }
//     if (day.toDateString() === currentDate.toDateString()) {
//       classes += ' selected';
//     }

//     days += `<div class="${classes}" data-date="${day.toDateString()}">${i}</div>`;
//   }

//   daysContainer.innerHTML = days;
// }

// function getMonthName(month) {
//   const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
//   return months[month];
// }

// renderCalendar();

// prevBtn.addEventListener('click', () => {
//   currentDate.setMonth(currentDate.getMonth() - 1);
//   renderCalendar();
// });

// nextBtn.addEventListener('click', () => {
//   currentDate.setMonth(currentDate.getMonth() + 1);
//   renderCalendar();
// });

// daysContainer.addEventListener('click', (event) => {
//   let day = event.target;
//   if (day.classList.contains('day') && !day.classList.contains('other-month')) {
//     let selected = daysContainer.querySelector('.selected');
//     if (selected) {
//       selected.classList.remove('selected');
//     }
//     day.classList.add('selected');
//     currentDate = new Date(day.dataset.date);
//   }
// });

// function completed(event) {
//     var button = event.target;

//     if(button.style.backgroundColor = "#D6D7D9")
//     {
//         button.style.backgroundColor = "#94BFA2";
//         button.dataset.value == "completed";
//     }
//     // else{
//     //     button.style.backgroundColor = "#D6D7D9";
//     //     button.dataset.value = "notcompleted";
//     // }  
// }

// var test1 = document.getElementById("test");
// test1.addEventListener("click", function() {
//     alert("Hello, World!");
//   });