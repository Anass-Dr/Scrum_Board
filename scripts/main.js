"use strict";

// GLOBAL VARIABLES :
const onlyMonthsTr = document.getElementById("only-months");
const monthsTr = document.getElementById("months");
const weekdaysTr = document.getElementById("weekdays");
const sprintsWTr = document.getElementById("sprints-tr_vw");
const sprintsMTr = document.getElementById("sprints-tr_vm");
const tbody = document.querySelector("tbody");
const timelineMonths = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

const sprints = [
  {
    name: "Sprint 1",
    duration: 7,
    start: "2023-10-21",
    user_stories: [
      {
        name: "User Story 1",
        status: "To Do",
        duration: 2,
      },
      {
        name: "User Story 2",
        status: "To Do",
        duration: 1,
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
      {
        name: "User Story 5",
        status: "To Do",
        duration: 2,
        user_stories: [],
      },
    ],
  },
  {
    name: "Sprint 2",
    duration: 8,
    start: "2023-11-1",
  },
];

/***  TIMELINE PAGE SCRIPT    ***/
if (window.location.pathname.split("/").slice(-1) == "timer.html")
  loadTableRows();

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

// Get Month for each table td :
function getMonth(startDate) {
  const currDate = new Date(startDate.getTime());
  const firstMonth = startDate.getMonth();

  let firstMonthCount = 0;
  let secondMonthCount = 0;
  for (let i = 0; i < 7; i++) {
    currDate.getMonth() == firstMonth ? firstMonthCount++ : secondMonthCount++;
    currDate.setDate(currDate.getDate() + 1);
  }

  return firstMonthCount > secondMonthCount
    ? firstMonth - 1
    : currDate.getMonth() - 1;
}

// Load table rows :
function loadTableRows() {
  const startDate = getStartPoint(21, 10, 2023);
  const endDate = getEndPoint(9, 11, 2023);
  loadWeeksTd(startDate, endDate);
  loadMonthsTd(startDate, endDate);
  loadSprintsWV(startDate);
  loadSprintsMV(startDate);
  loadUserStories(startDate);
  loadYearMonths(startDate, endDate);
}

// load table td for months :
function loadMonthsTd(startDate, endDate) {
  const monthsNumber = (endDate - startDate) / 86400000 / 7;
  const currDate = new Date(startDate.getTime());

  for (let i = 0; i < monthsNumber; i++) {
    monthsTr?.insertAdjacentHTML(
      "beforeend",
      `<th scope="col" colspan="7">${
        timelineMonths[getMonth(currDate) + 1]
      }</th>`
    );
    currDate.setDate(currDate.getDate() + 7);
  }
}

// Load Only Months :
function loadYearMonths(startDate, endDate) {
  for (let i = startDate.getMonth(); i <= endDate.getMonth(); i++)
    onlyMonthsTr?.insertAdjacentHTML(
      "beforeend",
      `<th scope="col" colspan="7">${timelineMonths[i]}</th>`
    );

  onlyMonthsTr?.classList.add("hidden");
}

// load table td for weekdays :
function loadWeeksTd(startDate, endDate) {
  const currDate = new Date(startDate.getTime());
  let i = 0;
  while (currDate.getTime() !== endDate.getTime()) {
    if (i == 100) break;

    weekdaysTr?.insertAdjacentHTML(
      "beforeend",
      `<td>${currDate.getDate()}</td>`
    );
    currDate.setDate(currDate.getDate() + 1);
    i++;
  }
}

// load Sprints in table for Weeks vue :
function loadSprintsWV(startDate) {
  sprints.forEach((sprint, indx) => {
    let colspan;
    if (indx == 0) colspan = (new Date(sprint.start) - startDate) / 86400000;
    else {
      const endDate = new Date(sprints[indx - 1].start);
      endDate.setDate(endDate.getDate() + sprints[indx - 1].duration);
      colspan = (new Date(sprint.start) - endDate) / 86400000;
    }

    sprintsWTr?.insertAdjacentHTML(
      "beforeend",
      `
        <td colspan="${colspan}"></td>
        <td colspan="${sprint.duration}" class="sprints">
          <span class="d-block bg-sprint1 rounded-3 fs-14 text-primary">
            ${sprint.name}
          </span>
        </td>
        `
    );
  });
}

// load Sprints in table for Weeks vue :
function loadSprintsMV(startDate) {
  sprints.forEach((sprint, indx) => {
    const sprintStartDate = new Date(sprint.start);
    let colspan, nDays;
    if (indx == 0) {
      nDays = sprintStartDate.getDate();
    } else {
      const endDate = new Date(sprints[indx - 1].start);
      endDate.setDate(endDate.getDate() + sprints[indx - 1].duration);
      nDays = (sprintStartDate - endDate) / 86400000;
    }

    colspan = (nDays * 7) / 28;
    sprintsMTr?.insertAdjacentHTML(
      "beforeend",
      `
        <td colspan="${Math.round(colspan)}"></td>
        <td colspan="${Math.round((sprint.duration * 7) / 30)}" class="sprints">
          <span class="d-block bg-sprint1 rounded-3 fs-14 text-primary">
            ${sprint.name}
          </span>
        </td>
        `
    );
  });
  sprintsMTr?.classList.add("hidden");
}

// load User Stories in Table :
function loadUserStories(startDate) {
  sprints.forEach((sprint) => {
    const sprintStart = new Date(sprint.start);
    sprint.user_stories?.forEach((story) => {
      const colspan = (sprintStart - startDate) / 86400000;
      tbody?.insertAdjacentHTML(
        "beforeend",
        `
        <tr class="user_story_tr">
          <td colspan="${colspan}"></td>
          <td style="--i: 1" class="user_story user1" colspan="${story.duration}">
            <span></span>
          </td>
        </tr>
      `
      );

      sprintStart.setDate(sprintStart.getDate() + story.duration);
    });
  });
}

// change vue :
const controlVue = (e) => {
  const value = e.target.textContent.toLowerCase();
  const storiesTr = document.querySelectorAll(".user_story_tr");

  Object.values(e.currentTarget.children).forEach((item) =>
    item.classList.remove("active")
  );
  e.target.classList.add("active");
  if (value == "months") {
    onlyMonthsTr?.classList.remove("hidden");
    sprintsMTr.classList.remove("hidden");
    sprintsWTr.classList.add("hidden");
    monthsTr?.classList.add("hidden");
    weekdaysTr?.classList.add("hidden");
    storiesTr.forEach((story) => story.classList.add("hidden"));
  } else if (value == "weeks") {
    onlyMonthsTr?.classList.add("hidden");
    sprintsMTr.classList.add("hidden");
    sprintsWTr.classList.remove("hidden");
    monthsTr?.classList.remove("hidden");
    weekdaysTr?.classList.remove("hidden");
    storiesTr.forEach((story) => story.classList.remove("hidden"));
  }
};
