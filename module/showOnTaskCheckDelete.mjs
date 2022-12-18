import { showTaskDetails } from "./showTaskDetails.mjs";
import { Student } from "../Student.mjs";
import { TasksManager } from "../TaskManager.mjs";

function showOnCheckDelete() {
  const MT = new TasksManager();
  const studentTasks = MT.getAllTasks();
  let marker = -1;

  studentTasks.forEach((task, index) => {
    if (task.flagCheck) {
      showTaskDetails(task);
      marker = index;
      task.flagCheck = false;
    }
    MT.replaceStudentTask(task, task.taskId);
  });
  const linkToIndex = document.getElementById("linkToIndex");
  const submitScoreBtn = document.getElementById("submitScore");
  const deleteButton = document.getElementById("deleteButton");
  if (marker == -1) {
    submitScoreBtn.innerText = "Back to tasks";
    submitScoreBtn.addEventListener("click", () => {
      linkToIndex.setAttribute("href", "/index.html");
    });
  } else {
    submitScoreBtn.addEventListener("click", () => {
      const gradeScore = Number(document.getElementById("gradeScore").value);
      const taskNotes = document.getElementById("taskNotes");
      studentTasks[marker].taskTeacherNotes = "";
      if (taskNotes.value.length >= 5) {
        if (gradeScore <= 100 && gradeScore > 0) {
          studentTasks[marker].taskTeacherNotes = taskNotes.value;
          studentTasks[marker].flagCheckComplete = true;
          studentTasks[marker].taskGrade = gradeScore;
          MT.replaceStudentTask(studentTasks[marker], marker);
          linkToIndex.setAttribute("href", "/index.html");
        } else {
          alert("enter correct score from 1 to 100");
        }
      } else {
        alert("enter Notes text, at least 5 characters");
      }
    });
    deleteButton.addEventListener("click", () => {
      MT.deleteStudentTask(marker);
    });
  }
}
showOnCheckDelete();
