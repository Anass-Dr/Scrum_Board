"use strict";

function start(e) {
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text", e.target.id);
}

function over(e) {
    e.preventDefault();
}

function drop(e) {
    e.preventDefault();
    var id = e.dataTransfer.getData("text");
    var element = document.getElementById(id);
    e.currentTarget.appendChild(element);
}
