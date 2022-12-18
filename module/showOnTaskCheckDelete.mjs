import { showTaskDetails } from "./showTaskDetails.mjs";
import { Student } from "../Student.mjs";

function showOnCheckDelete() {
  //
  // let localStudent = new Student();
  // localStudent.studentTasks = localStudent.loadFromLocalStorage();
  const MT = new TasksManager();
  let studentTasks = MT.getAllTasks();
  let marker = -1;

  studentTasks.forEach((task, index) => {
    if (task.flagCheck) {
      showTaskDetails(task);
      marker = index;
      task.flagCheck = false;
    }
    // localStudent.replaceTask(task, task.taskId);
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
          // replaceTask(localStudent.studentTasks[marker], marker);
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
      localStudent.deleteTask(marker);
    });
  }
}
showOnCheckDelete();
