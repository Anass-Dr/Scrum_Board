"use strict";

// GLOBAL VARIABLES :

const sprint = {
  name: "Sprint 1",
  duration: 7,
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
};

// CHANGE VUE IN TIMELINE PAGE :
const controlVue = (e) => {
  const value = e.target.textContent.toLowerCase();
  const tr = document.getElementById("weekdays");

  Object.values(e.currentTarget.children).forEach((item) =>
    item.classList.remove("active")
  );
  e.target.classList.add("active");
  if (value == "months") {
    tr.classList.add("hidden");
  } else if (value == "weeks") {
    tr.classList.remove("hidden");
  }
};
