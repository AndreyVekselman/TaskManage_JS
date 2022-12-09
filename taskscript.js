import { Task } from "./Task.mjs";
import { showOnHTML } from "./module/showOnHTML.mjs";
import { Student } from "./Student.mjs";

let LS = localStorage;
let NewTask = new Student();
if (JSON.parse(LS.getItem("student"))) {
  NewTask = JSON.parse(LS.getItem("student"));
}
const createTaskBtn = document.getElementById("Btn_OK");
createTaskBtn.addEventListener("click", () => {
  const taskSubject = document.getElementById("taskSubject");
  if (taskSubject.value.length > 5) {
    const taskText = document.getElementById("taskText");
    if (taskText.value.length > 10) {
      const myTask = new Task();
      myTask.taskName = taskSubject.value;
      myTask.taskText = taskText.value;
      NewTask.studentTasks.push(myTask);
      LS.setItem("student", JSON.stringify(NewTask));
    } else {
      alert("enter text, at least 10 characters");
    }
  } else {
    alert("enter Subject, at least 5 characters");
  }
});
