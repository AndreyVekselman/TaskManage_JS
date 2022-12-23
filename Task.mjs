export class Task {
  taskId;
<<<<<<< HEAD
  taskName;
  flagComplete;
=======
  flagComplete;
  flagSolution;
  flagCheck;
  flagCheckComplete;
  taskSubject;
>>>>>>> master
  taskText;
  taskGrade;
  taskDeadlineTime;
  taskTextSolution;
  taskTeacherNotes;
  constructor(taskSubject, taskText, taskId, taskDeadLineTime) {
    this.taskText = taskText;
    this.flagCheck = false;
    this.flagComplete = false;
    this.flagSolution = false;
    this.flagCheckComplete = false;
    this.taskGrade = 0;
<<<<<<< HEAD
  }
  showTask() {
    console.log(
      `Perform task: ${this.taskName} do ${this.taskText}. show if task complete: ${this.flagComplete}`
    );
=======
    this.taskSubject = taskSubject;
    this.taskId = taskId;
    this.taskDeadlineTime = taskDeadLineTime;
    this.taskTextSolution = "";
    this.taskTeacherNotes = "";
>>>>>>> master
  }
}
