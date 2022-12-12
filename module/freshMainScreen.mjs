import { removeItems } from "./removeItems.mjs";
import { showOnHTML } from "./showOnHTML.mjs";
import { loadFromLocalStorage } from "./loadFromLocalStorage.mjs";
import { saveToLocalStorage } from "./saveToLocalStorage.mjs";

export function freshMainScreen() {
  removeItems();
  if (loadFromLocalStorage()) {
    const NewTask = loadFromLocalStorage();

    NewTask.studentTasks.forEach((element) => {
      showOnHTML(element);
    });
    saveToLocalStorage(NewTask);
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
  // ineresno?!
}
