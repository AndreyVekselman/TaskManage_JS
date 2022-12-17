import { showTaskDetails } from "./showTaskDetails.mjs";
import { Student } from "../Student.mjs";

function showOnCheckDelete() {
  let localStudent = new Student();
  localStudent.studentTasks = localStudent.loadFromLocalStorage();
  let marker;

  localStudent.studentTasks.forEach((task) => {
    if (task.flagCheck) {
      marker = showTaskDetails(task);
      task.flagCheck = false;
    }
    localStudent.replaceTask(task, task.taskId);
  });
  const linkToIndex = document.getElementById("linkToIndex");
  const submitScoreBtn = document.getElementById("submitScore");
  submitScoreBtn.addEventListener("click", () => {
    const taskNotes = document.getElementById("taskNotes");
    localStudent.studentTasks[marker].taskTeacherNotes = "";
    if (taskNotes.value.length > 4) {
      localStudent.studentTasks[marker].taskTeacherNotes = taskNotes.value;
      localStudent.studentTasks[marker].flagCheckComplete = true;
      localStudent.replaceTask(localStudent.studentTasks[marker], marker);
      linkToIndex.setAttribute("href", "/index.html");
    } else {
      alert("enter Notes text, at least 5 characters");
    }
  });
}
showOnCheckDelete();
