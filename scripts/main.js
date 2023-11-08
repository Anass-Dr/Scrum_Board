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
      
      weekdaysTr?.insertAdjacentHTML(
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

  


  

  
  
  



  
  


