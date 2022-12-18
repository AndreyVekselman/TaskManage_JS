import { Task } from "../Task.mjs";
import { showOnHTML } from "./showOnHTML.mjs";
import { Student } from "../Student.mjs";
import { TasksManager } from "../TaskManager.mjs";

// let Student1 = new Student();
// Student1.studentTasks = Student1.loadFromLocalStorage();

const TM = new TasksManager();
let studentTasks = TM.getAllTasks();
console.log(studentTasks);

const createTaskBtn = document.getElementById("Btn_OK");
createTaskBtn.addEventListener("click", () => {
  const taskSubject = document.getElementById("taskSubject");
  if (taskSubject.value.length > 4) {
    const taskText = document.getElementById("taskText");
    if (taskText.value.length > 4) {
      const taskDeadLineTime = document.getElementById("taskDate");
      if (taskDeadLineTime.value) {
        // const myTask = new Task(
        //   taskSubject.value,
        //   taskText.value,
        //   Student1.studentTasks.length,
        //   taskDeadLineTime.value
        // );
        // Student1.addTask(myTask);

        TM.addNewTask(
          taskSubject.value,
          taskText.value,
          studentTasks.length,
          taskDeadLineTime.value
        );
      } else {
        alert("enter correct Date for Dead line for submission");
      }
    } else {
      alert("enter text, at least 5 characters");
    }
  } else {
    alert("enter Subject, at least 5 characters");
  }
});
