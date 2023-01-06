import { showTaskDetails } from "./showTaskDetails.mjs";
import { checkDate } from "./checkDate.mjs";
import { TasksManager } from "../TaskManager.mjs";

function showOnTaskSolution() {
  const MT = new TasksManager();
  const studentTasks = MT.getAllTasks();
  let marker = -1;

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
      MT.replaceStudentTask(task, index);
    }
  });

  const linkToIndex = document.getElementById("linkToIndex");
  const submitSolutionBtn = document.getElementById("submitSolution");

  if (taskSolution.disabled || marker == -1) {
    const txt = document.getElementById("noButton");
    const txtNode = document.createTextNode(
      "Task all ready checked or time expired"
    );
    const btnDiv = document.getElementById("btn");
    txt.appendChild(txtNode);
    btnDiv.appendChild(txt);
    submitSolutionBtn.remove();
    submitSolutionBtn.disabled = true;
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
