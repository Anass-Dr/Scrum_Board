"use strict";

// GLOBAL VARIABLES :
const monthsTr = document.getElementById("months");
const weekdaysTr = document.getElementById("weekdays");
const sprintsTr = document.getElementById("sprints-tr");
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
  const endDate = getEndPoint(9, 12, 2023);
  loadWeeksTd(startDate, endDate);
  loadMonthsTd(startDate, endDate);
  loadSprints(startDate);
  loadUserStories(startDate);
  loadYearMonths();
}

// load table td for months :
function loadMonthsTd(startDate, endDate) {
  const monthsNumber = (endDate - startDate) / 86400000 / 7;
  const currDate = new Date(startDate.getTime());

  for (let i = 0; i < monthsNumber; i++) {
    monthsTr?.insertAdjacentHTML(
      "beforeend",
      `<th scope="col" colspan="7">${timelineMonths[getMonth(currDate)]}</th>`
    );
    currDate.setDate(currDate.getDate() + 7);
  }
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

// load Sprints in table :
function loadSprints(startDate) {
  sprints.forEach((sprint, indx) => {
    let colspan;
    if (indx == 0) colspan = (new Date(sprint.start) - startDate) / 86400000;
    else {
      const endDate = new Date(sprints[indx - 1].start);
      endDate.setDate(endDate.getDate() + sprints[indx - 1].duration);
      colspan = (new Date(sprint.start) - endDate) / 86400000;
    }

    sprintsTr?.insertAdjacentHTML(
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

// Load all Months :
function loadYearMonths() {}

// change vue :
const controlVue = (e) => {
  const value = e.target.textContent.toLowerCase();
  const storiesTr = document.querySelectorAll(".user_story_tr");

  Object.values(e.currentTarget.children).forEach((item) =>
    item.classList.remove("active")
  );
  e.target.classList.add("active");
  if (value == "months") {
    weekdaysTr?.classList.add("hidden");
    storiesTr.forEach((story) => story.classList.add("hidden"));
  } else if (value == "weeks") {
    weekdaysTr?.classList.remove("hidden");
    storiesTr.forEach((story) => story.classList.remove("hidden"));
  }
};

/***  Backlog PAGE SCRIPT    ***/

// generate user HTML
function generate_user_html(title) {
  const htmluser = ` <div
  id="userStorie"
    class="users_storise_sprint w-100 rounded d-flex align-items-center justify-content-between border"
    draggable="true" 
  >
    <div
      class="title_userstori_sprint d-flex align-items-center w-75 p-2" data-bs-toggle="modal" data-bs-target="#myModal"
    >
  
    <h6>
      <img
        src="./assets/icons/userstori_icon.svg"
        alt=""
        class="mx-2"
      />
    </h6>
      <h6 class="pt-2 px-2 m-0">${title}</h6>
      <p class="pt-2 m-0 mx-4">user storie</p>
    </div>
    <div
      class="option_userstorie d-flex align-items-center w-25"
    >
      <select
        name="select_userstorie"
        class="select_userstorie w-25 h-75 px-2 align-items-center justify-content-center rounded"
      >
        <option value="to do" class="todo">to do</option>
        <option value="doing">doing</option>
        <option value="done" class="done text-success">
          done
        </option>
      </select>
      <span class="deadline_userstorie mx-4 h-25">-</span>
  
      <div class="user"><span>AA</span></div>
    </div>
  </div>`;
  return htmluser;
}

const inputHtml = `  <input type="text" class="create_name_userstorie" id="create_title" placeholder="Qu'est-ce qui doit etre fait ?">`;
// add users stories
// sprint
const container1 = document.getElementById("container");
function createNewDiv() {
  // Clone the existing container div
  const button = document.getElementById("add_backlog_btn");
  button.disabled = true;
  container1.insertAdjacentHTML("beforeend", inputHtml);

  const create_name_userstorie = document.querySelector(
    ".create_name_userstorie"
  );
  create_name_userstorie.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      const creat_title_userstorie = document.getElementById("create_title");
      const thetitle_userstorie = creat_title_userstorie.value;
      console.log(thetitle_userstorie);
      container1.insertAdjacentHTML(
        "beforeend",
        generate_user_html(thetitle_userstorie)
      );

      create_name_userstorie.remove();
      button.disabled = false;
    }
  });
}

// backloge
const container2 = document.getElementById("container2");

function createNewDiv2() {
  const button2 = document.getElementById("add_backlog_btn2");
  button2.disabled = true;
  container2.insertAdjacentHTML("beforeend", inputHtml);
  const create_name_userstorie = document.querySelector(
    ".create_name_userstorie"
  );

  create_name_userstorie.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      const creat_title_userstorie = document.getElementById("create_title");
      const thetitle_userstorie = creat_title_userstorie.value;
      console.log(thetitle_userstorie);
      container2.insertAdjacentHTML(
        "beforeend",
        generate_user_html(thetitle_userstorie)
      );

      create_name_userstorie.remove();

      button2.disabled = false;
    }
  });
}

/***  settings PAGE STYLES    ***/
/***  settings PAGE STYLES    ***/

/***  INFO_SECTION STYLES    ***/

/***  USER_SECTION STYLES    ***/

function add_user() {
  const rowHTML = `
  <tr class="tabRow" onclick="actionEvent(event)" >
  <th ><input class="inputtab" type="text" name="nameUser" placeholder="User_name" onfocus="addButtonEvent(event)" ></th>
  <th ><input class="inputtab" type="email" name="emailUser" placeholder="User_email" onfocus="addButtonEvent(event)" ></th>
  <th>
    <div class="btn-modsup">
      <button class="btn-modif" onclick="actionEvent(event)">
        <img src="./assets/icons/modif.svg" alt="" >
      </button>
      <button class="btn-sup"> 
        <img src="./assets/icons/delete.svg" alt="">
      </button>
      <button class="btn-add" type="submit" onclick="actionEvent(event)"><span>add</span></button>
    
  </div>
 </th>
</tr>
  `
  document.querySelector("table tbody").insertAdjacentHTML('beforeend', rowHTML)

  // buttonEvent();
}

function actionEvent(event){
// deleteUser
if(event.target.parentElement.classList.contains("btn-sup")){
  event.currentTarget.remove();

}
// savaInfo
else if(event.target.parentElement.classList.contains("btn-add")){
  let saveInfo = event.currentTarget.closest(".tabRow").querySelectorAll(".inputtab")
  saveInfo[0].disabled = true
  saveInfo[1].disabled = true
  event.currentTarget.closest(".tabRow").querySelector(".btn-add").style.display = "none"


}
//modifInfo
else if(event.target.parentElement.classList.contains("btn-modif")){
  event.currentTarget.closest(".tabRow").querySelector(".btn-add").style.display = "block"
  let modifInfo = event.currentTarget.closest(".tabRow").querySelectorAll(".inputtab")
  modifInfo[0].disabled = false
  modifInfo[1].disabled = false
  
}
// editUser
// if(event.target.parentElement.classList.contains("btn-modif")){
//   event.currentTarget.closest(".tabRow").querySelector(".inputtab").disabled = false;
// }

//saveEdit(disibeled input)



}
function addButtonEvent(event){
event.currentTarget.closest(".tabRow").querySelector(".btn-add").style.display = "block"

}
  

  
  
  



  
  


