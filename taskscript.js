import { Task } from "./Task.mjs";
import { showOnHTML } from "./module/showOnHTML.mjs";
import { Student } from "./Student.mjs";

const createTaskBtn = document.getElementById("Btn_OK");
createTaskBtn.addEventListener("click", () => {
  const taskSubject = document.getElementById("taskSubject");
  const taskText = document.getElementById("taskText");
  const myTask = new Task();
  myTask.taskName = taskSubject.value;
  myTask.taskText = taskText.value;
  console.log(myTask);
});
