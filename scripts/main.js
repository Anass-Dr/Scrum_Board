"use strict";

/***  Backlog PAGE STYLES    ***/

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
