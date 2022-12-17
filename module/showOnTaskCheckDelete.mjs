import { showTaskDetails } from "./showTaskDetails.mjs";
import { Student } from "../Student.mjs";

function showOnCheckDelete() {
  let localStudent = new Student();
  localStudent.studentTasks = localStudent.loadFromLocalStorage();
  let marker = -1;

  localStudent.studentTasks.forEach((task) => {
    if (task.flagCheck) {
      marker = showTaskDetails(task);
      task.flagCheck = false;
    }
    localStudent.replaceTask(task, task.taskId);
  });
  const linkToIndex = document.getElementById("linkToIndex");
  const submitScoreBtn = document.getElementById("submitScore");
  if (marker == -1) {
    submitScoreBtn.innerText = "Back to tasks";
    submitScoreBtn.addEventListener("click", () => {
      linkToIndex.setAttribute("href", "/index.html");
    });
  } else {
    submitScoreBtn.addEventListener("click", () => {
      const gradeScore = Number(document.getElementById("gradeScore").value);
      const taskNotes = document.getElementById("taskNotes");
      localStudent.studentTasks[marker].taskTeacherNotes = "";
      if (taskNotes.value.length >= 5) {
        if (gradeScore <= 100 && gradeScore > 0) {
          localStudent.studentTasks[marker].taskTeacherNotes = taskNotes.value;
          localStudent.studentTasks[marker].flagCheckComplete = true;
          localStudent.studentTasks[marker].taskGrade = gradeScore;
          localStudent.replaceTask(localStudent.studentTasks[marker], marker);
          linkToIndex.setAttribute("href", "/index.html");
        } else {
          alert("enter correct score from 1 to 100");
        }
      } else {
        alert("enter Notes text, at least 5 characters");
      }
    });
  }
}
showOnCheckDelete();
