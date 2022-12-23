import { removeItems } from "./removeItems.mjs";
import { showOnHTML } from "./showOnHTML.mjs";
import { TasksManager } from "../TaskManager.mjs";

export function freshMainScreen() {
  const MT = new TasksManager();
  const studentTasks = MT.getAllTasks();

  removeItems();

  if (studentTasks.length) {
    studentTasks.forEach((task, index) => {
      showOnHTML(task, index);
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
