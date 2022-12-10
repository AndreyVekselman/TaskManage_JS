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

    const taskSubject = document.createElement("div");
    taskSubject.setAttribute("class", "Subject");

    let textNode = document.createTextNode("No Tasks to perform");
    taskSubject.appendChild(textNode);

    mainDiv.appendChild(taskSubject);
    main.appendChild(mainDiv);
  }
}
