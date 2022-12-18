import { TasksManager } from "../TaskManager.mjs";

function createNewTask() {
  const TM = new TasksManager();
  const studentTasks = TM.getAllTasks();

  const createTaskBtn = document.getElementById("Btn_OK");
  createTaskBtn.addEventListener("click", () => {
    const taskSubject = document.getElementById("taskSubject");
    if (taskSubject.value.length > 4) {
      const taskText = document.getElementById("taskText");
      if (taskText.value.length > 4) {
        const taskDeadLineTime = document.getElementById("taskDate");
        if (taskDeadLineTime.value) {
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
}

createNewTask();
