import { Task } from "../Task.mjs";
import { showOnHTML } from "./showOnHTML.mjs";
import { Student } from "../Student.mjs";
import { loadFromLocalStorage } from "./loadFromLocalStorage.mjs";
import { saveToLocalStorage } from "./saveToLocalStorage.mjs";

let Student1;
if (loadFromLocalStorage()) {
  Student1 = loadFromLocalStorage();
} else {
  Student1 = new Student();
}
const createTaskBtn = document.getElementById("Btn_OK");
createTaskBtn.addEventListener("click", () => {
  const taskSubject = document.getElementById("taskSubject");
  if (taskSubject.value.length > 5) {
    const taskText = document.getElementById("taskText");
    if (taskText.value.length > 10) {
      const taskDeadLineTime = document.getElementById("taskDate");
      if (taskDeadLineTime.value) {
        const myTask = new Task();
        myTask.taskSubject = taskSubject.value;
        myTask.taskText = taskText.value;
        myTask.taskId = Student1.studentTasks.length;
        myTask.taskDeadlineTime = taskDeadLineTime.value;
        Student1.addTask(myTask);

        saveToLocalStorage(Student1);
        // check point
        myTask.showTask();
      } else {
        alert("enter correct Date for Dead line for submission");
      }
    } else {
      alert("enter text, at least 10 characters");
    }
  } else {
    alert("enter Subject, at least 5 characters");
  }
});
