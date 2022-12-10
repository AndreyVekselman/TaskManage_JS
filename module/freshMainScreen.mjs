import { removeItems } from "./removeItems.mjs";
import { showOnHTML } from "./showOnHTML.mjs";
let LS = localStorage;

export function freshMainScreen() {
  removeItems();
  let Big = JSON.parse(LS.getItem("student"));
  if (Big) {
    Big.studentTasks.forEach((element) => {
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
