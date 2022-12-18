import { removeItems } from "./removeItems.mjs";
import { showOnHTML } from "./showOnHTML.mjs";

import { loadFromLocalStorage } from "./loadFromLocalStorage.mjs";
import { saveToLocalStorage } from "./saveToLocalStorage.mjs";

import { showTaskDetails } from "./showTaskDetails.mjs";
import { Student } from "../Student.mjs";
import { checkDate } from "./checkDate.mjs";
import { TasksManager } from "../TaskManager.mjs";

function showOnTaskSolution() {
  // let localStudent = new Student();
  // localStudent.studentTasks = localStudent.loadFromLocalStorage();
  const MT = new TasksManager();
  const studentTasks = MT.getAllTasks();
  let marker = -1;

  // localStudent.studentTasks.forEach((task, index) => {
  studentTasks.forEach((task, index) => {
    if (task.flagSolution) {
      showTaskDetails(task);
      marker = index;
      if (
        studentTasks[marker].flagCheckComplete ||
        !checkDate(studentTasks[marker].taskDeadlineTime)
      ) {
        taskSolution.disabled = true;
      }

      task.flagSolution = false;
    }
    MT.replaceStudentTask(task, task.taskId);
  });
  const linkToIndex = document.getElementById("linkToIndex");
  const submitSolutionBtn = document.getElementById("submitSolution");

  if (taskSolution.disabled || marker == -1) {
    submitSolutionBtn.innerText = "Back to tasks";
    submitSolutionBtn.addEventListener("click", () => {
      linkToIndex.setAttribute("href", "/index.html");
    });
  } else {
    submitSolutionBtn.addEventListener("click", () => {
      const taskSolution = document.getElementById("taskSolution");
      studentTasks[marker].taskTextSolution = "";
      if (taskSolution.value.length >= 5) {
        studentTasks[marker].taskTextSolution = taskSolution.value;
        studentTasks[marker].flagComplete = true;
        MT.replaceStudentTask(studentTasks[marker], marker);
        linkToIndex.setAttribute("href", "/index.html");
      } else {
        alert("enter solution text, at least 5 characters");
      }
    });
  }
}
showOnTaskSolution();
