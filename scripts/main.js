"use strict";

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
// add users stories
function createNewDiv() {
  // Clone the existing container div
  const container = document.getElementById("container");
  const user = document.getElementById("userStorie");
  const existingDiv = user.cloneNode(true);

  // Add the cloned div to the container
  container.appendChild(existingDiv);
}
function createNewDiv2() {
  // Clone the existing container div
  const container = document.getElementById("container2");
  const user = document.getElementById("userStorie");
  const existingDiv = user.cloneNode(true);

  // Add the cloned div to the container
  container.appendChild(existingDiv);
}
