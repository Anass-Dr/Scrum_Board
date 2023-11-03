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

// Changer la taille du texte
function changeFontSize() {
    var fontSize = document.getElementById("fontSize").value;
    document.getElementById("textArea").style.fontSize = fontSize;
}

// Changer la couleur du texte
function changeFontColor() {
    var fontColor = document.getElementById("fontColor").value;
    document.getElementById("textArea").style.color = fontColor;
}


 // Sélectionnez tous les boutons par leur classe
 var modifierButtons = document.querySelectorAll(".modifierButton");

 // Parcourez les boutons et ajoutez un événements "click"
 modifierButtons.forEach(function (button) {
     button.addEventListener("click", function () {
         // Trouvez le div parent pour permettre la modification
         var parentDiv = button.previousElementSibling;
         parentDiv.focus();
     });
 });



 function editParagraph(button) {
    var parentParagraph = button.previousElementSibling;
    parentParagraph.focus();
}

function supprimerStory(button) {
    var userStory = button.closest('.zone');
    if (userStory) {
        userStory.remove();
    }
}