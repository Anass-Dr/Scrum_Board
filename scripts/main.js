"use strict";

// GLOBAL VARIABLES :
const monthsTr = document.getElementById("months");
const weekdaysTr = document.getElementById("weekdays");

const sprints = [
  {
    name: "Sprint 1",
    duration: 7,
    start: "2023-10-31",
    user_stories: [
      {
        name: "User Story 1",
        status: "To Do",
        duration: 2,
      },
      {
        name: "User Story 2",
        status: "To Do",
        duration: 3,
      },
      {
        name: "User Story 3",
        status: "To Do",
        duration: 1,
      },
      {
        name: "User Story 4",
        status: "To Do",
        duration: 1,
      },
    ],
  },
];
loadWeeksTd();
/***  TIMELINE PAGE STYLES    ***/

// Get Start & End point for table tr :
function getStartPoint(d, m, y) {
  const startDate = new Date(y, m - 1, d);
  const dayNumber = startDate.getDay();
  return dayNumber == 1 ? startDate : new Date(y, m - 1, d - dayNumber + 1);
}

function getEndPoint(d, m, y) {
  const endDate = new Date(y, m - 1, d);
  const dayNumber = endDate.getDay();
  return dayNumber == 0 ? endDate : new Date(y, m - 1, d + 7 - dayNumber);
}

// load table td for months :
function loadMonthsTd() {}

// load table td for weekdays :
function loadWeeksTd(startDate, endDate) {
  const startDate = getStartPoint(21, 10, 2023);
  const endDate = getEndPoint(9, 12, 2023);
  const currDate = startDate;

  let i = 0;
  while (currDate.getTime() !== endDate.getTime()) {
    if (i == 100) break;

    weekdaysTr.insertAdjacentHTML(
      "beforeend",
      `<td>${currDate.getDate()}</td>`
    );
    currDate.setDate(currDate.getDate() + 1);
    i++;
  }
}

// change vue :
const controlVue = (e) => {
  const value = e.target.textContent.toLowerCase();

  Object.values(e.currentTarget.children).forEach((item) =>
    item.classList.remove("active")
  );
  e.target.classList.add("active");
  if (value == "months") {
    weekdaysTr.classList.add("hidden");
  } else if (value == "weeks") {
    weekdaysTr.classList.remove("hidden");
  }
};

/***  Board PAGE STYLES    ***/

let draggedElement = null;

function start(e) {
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text", e.target.id);
    draggedElement = e.target;
  
}

function over(e) {
    e.preventDefault();
   
}

function drop(e) {
    e.preventDefault();
    var id = e.dataTransfer.getData("text");
    var element = document.getElementById(id);
    var enCoursZone = e.currentTarget; // La zone "En Cours"

    
    const mouseY = e.clientY;
    
    let targetElement = null; 
    for (let child of enCoursZone.children) {
        const rect = child.getBoundingClientRect();
        if (mouseY < rect.top + rect.height / 2) {
            targetElement = child;
            break;
        }
    }


    if (targetElement) {
        enCoursZone.insertBefore(element, targetElement);
    } else {
        enCoursZone.appendChild(element);
    }

    draggedElement = null;
}
