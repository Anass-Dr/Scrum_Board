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
function loadWeeksTd() {
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

/***  settings PAGE STYLES    ***/
/***  settings PAGE STYLES    ***/

/***  INFO_SECTION STYLES    ***/






/***  USER_SECTION STYLES    ***/


function add_user() {
    // Get the table body element
    const tableBody = document.querySelector("table tbody");

  
    // Create a new row element
    const newRow = document.createElement("tr");
  
    // Create the cells for the new row
    const nameCell = document.createElement("th");
    const emailCell = document.createElement("th");
    const actionCell = document.createElement("th");
  
    // Create input elements for the name and email cells
    const nameInput = document.createElement("input");
    nameInput.className = "inputtab";
    nameInput.type = "text";
    nameInput.placeholder = "User_name";
  
    const emailInput = document.createElement("input");
    emailInput.className = "inputtab";
    emailInput.type = "email";
    emailInput.placeholder = "User_email";

    // Create a div element for the action buttons
    const actionDiv = document.createElement("div");
    actionDiv.className = "btn-modsup";

  
    // Create the buttons for the action cell
    const modifyButton = document.createElement("button");
    modifyButton.className = "btn-modif";
    modifyButton.innerHTML = '<img src="./assets/icons/modif.svg" alt="">';
  
    const deleteButton = document.createElement("button");
    deleteButton.className = "btn-sup";
    deleteButton.innerHTML = '<img src="./assets/icons/delete.svg" alt="">';
  
    // Append the input elements and buttons to their respective cells
    nameCell.appendChild(nameInput);
    emailCell.appendChild(emailInput);
    // Append the buttons to the action div
    actionDiv.appendChild(modifyButton);
    actionDiv.appendChild(deleteButton);
    actionCell.appendChild(actionDiv);

  
    // Append the cells to the new row
    newRow.appendChild(nameCell);
    newRow.appendChild(emailCell);
    newRow.appendChild(actionCell);
  
    // Append the new row to the table body
    tableBody.appendChild(newRow);
  }




  

  function del_user() {
    let delRow = document.querySelectorAll(".tabRow");
    delRow[0].remove();
    
  }
  


