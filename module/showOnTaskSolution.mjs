import { removeItems } from "./removeItems.mjs";
import { showOnHTML } from "./showOnHTML.mjs";
import { loadFromLocalStorage } from "./loadFromLocalStorage.mjs";

function showOnTaskSolution(Task) {
  if (loadFromLocalStorage()) {
    const txtDiv = document.getElementById("text");
    const txtNode = document.createTextNode(Task.taskText);
    txtDiv.appendChild(txtNode);
  }
}
