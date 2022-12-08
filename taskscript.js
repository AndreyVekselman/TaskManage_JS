import { Task } from "./Task.mjs";
import { showOnHTML } from "./module/showOnHTML.mjs";
import { Student } from "./Student.mjs";

let LS = localStorage;
let NewTask = new Student();
NewTask = LS.getItem("student");
NewTask = JSON.parse(NewTask);
console.log(NewTask);
const createTaskBtn = document.getElementById("Btn_OK");
createTaskBtn.addEventListener("click", () => {
  const taskSubject = document.getElementById("taskSubject");
  const taskText = document.getElementById("taskText");
  const myTask = new Task();
  myTask.taskName = taskSubject.value;
  myTask.taskText = taskText.value;
  // NewTask.addTask(myTask);
  NewTask.studentTasks.push(myTask);
  LS.setItem("student", JSON.stringify(NewTask));

  console.log(myTask);
});
