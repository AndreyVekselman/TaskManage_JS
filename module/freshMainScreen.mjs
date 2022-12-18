import { removeItems } from "./removeItems.mjs";
import { showOnHTML } from "./showOnHTML.mjs";
// import { loadFromLocalStorage } from "./loadFromLocalStorage.mjs";
import { Student } from "../Student.mjs";
import { TasksManager } from "../TaskManager.mjs";

export function freshMainScreen() {
  // let localStudent = new Student();
  // localStudent.studentTasks = localStudent.loadFromLocalStorage();
  const MT = new TasksManager();
  let studentTasks = MT.getAllTasks();

  removeItems();

  if (studentTasks.length) {
    studentTasks.forEach((element) => {
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
