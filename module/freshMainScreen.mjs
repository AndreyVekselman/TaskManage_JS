import { removeItems } from "./removeItems.mjs";
import { showOnHTML } from "./showOnHTML.mjs";
import { loadFromLocalStorage } from "./loadFromLocalStorage.mjs";

export function freshMainScreen() {
  removeItems();
  if (loadFromLocalStorage()) {
    loadFromLocalStorage().studentTasks.forEach((element) => {
      showOnHTML(element);
    });
  } else {
    const main = document.querySelector("main");
    const mainDiv = document.createElement("div");
    mainDiv.className = "mainDiv";
    const taskName = document.createElement("div");
    taskName.innerHTML = "No Tasks to perform";
    mainDiv.appendChild(taskName);
    main.appendChild(mainDiv);
  }
}
