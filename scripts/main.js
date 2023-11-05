"use strict";
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
// create new sprint

const inputHtml = `  <input type="text" class="create_name_userstorie" id="create_title" placeholder="Qu'est-ce qui doit etre fait ?">`;
// add users stories
// sprint
function account_tickets_sprint() {
  const numberTicketsprint = document.querySelector(".account_ticket_sprint");
  NumberTicket_sprint++;
  numberTicketsprint.innerText = `${NumberTicket_sprint} -ticket`;
}
const container1 = document.getElementById("container");
let NumberTicket_sprint = 0;
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

      container1.insertAdjacentHTML(
        "beforeend",
        generate_user_html(thetitle_userstorie)
      );

      create_name_userstorie.remove();
      account_tickets_sprint();
      button.disabled = false;
    }
  });
}

// backloge
function account_tickets_backlog() {
  const numberTicketbacklog = document.querySelector(".account_ticket");
  NumberTicket_backlog++;
  numberTicketbacklog.innerText = `${NumberTicket_backlog} -ticket`;
}

const container2 = document.getElementById("container2");
let accordion = document.querySelector("#tickets_backlog");
let NumberTicket_backlog = 0;

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

      container2.insertAdjacentHTML(
        "beforeend",
        generate_user_html(thetitle_userstorie)
      );

      create_name_userstorie.remove();
      account_tickets_backlog();
      button2.disabled = false;
    }
  });
}

// create new sprint

function new_sprint() {
  const sprint = `  <div class="accordion" id="accordion">
<div class="accordion-item mt-4 mx-4">
  <h2
    class="accordion-header d-flex align-items-center justify-content-between"
  >
    <button
      class="accordion-button shadow-none w-50"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#colaps"
      aria-expanded="true"
      aria-controls="colaps"
    >
      SCRUMBORD
      <p class="px-4 m-0"><b>Sprint - 1</b></p>
    </button>
    <div class="d-flex align-items-center justify-content-center">
      <span class="Statut_de_la_tache bg-success mx-2">0</span>
      <span class="Statut_de_la_tache2 mx-2">0</span>
      <span class="Statut_de_la_tache3 mx-2">0</span>
      <button class="start_sprintf h3 m-0 mx-4 p-1 d-flex align-items-center justify-content-center border-0"  data-bs-toggle="modal" data-bs-target="#myModal_sprint" >
        <span class="startsprint"  >start sprint</span>
      </button>
      <button class="sprintf h3 m-0 mx-2">
        <span class="startsprint2">...</span>
      </button>
    </div>
  </h2>
  <div
    id="colaps"
    class="accordion-collapse collapse show"
    data-bs-parent="#accordionExample"
   
  >
    <div class="container_new" class="accordion-body"  ondragover="over(event)" ondrop="drop(event)" id="sortable1">
      <!-- user storie 1 -->
    
      <!-- modal de user storie -->
      </div>
</div>
<button
        class="add_ticket d-flex align-items-center px-4 pb-2" id="add_backlog_btn"
        >
        <img src="./assets/icons/Add-ticket.svg" alt="" />
        <h6 class="m-0 mx-2">Creer un ticket</h6>
      </button>
    </div>
  </div>
</div>`;
  return sprint;
}

// function newSprint() {
// const main = document.getElementById("mainPart");
// main.insertAdjacentHTML("beforeend", new_sprint());
// }
// const container_generated = document.querySelectorAll(".container_new");
// const button = document.querySelectorAll(".add_ticket");
// const colaps = document.querySelectorAll("#colaps");
// for (let i = 0; i < 100; i++) {
// console.log(i);
// button.addEventListener("click", () => {
// button[i].disabled = true;
// container_generated[i].insertAdjacentHTML("beforeend", inputHtml);
// const create_name_userstorie = document.querySelector(
// ".create_name_userstorie"
// );
// create_name_userstorie.addEventListener("keydown", function (event) {
// if (event.key === "Enter") {
// const creat_title_userstorie = document.getElementById("create_title");
// const thetitle_userstorie = creat_title_userstorie.value;
// container_generated[i].insertAdjacentHTML(
// "beforeend",
// generate_user_html(thetitle_userstorie)
// );
// create_name_userstorie.remove();
// button[i].disabled = false;
// }
// });
// });
// }
