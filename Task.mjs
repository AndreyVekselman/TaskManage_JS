export class Task {
  taskId;
  flagComplete;
  flagSolution;
  flagCheck;
  flagCheckComplete;
  taskSubject;
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
    this.taskSubject = taskSubject;
    this.taskId = taskId;
    this.taskDeadlineTime = taskDeadLineTime;
    this.taskTextSolution = "";
    this.taskTeacherNotes = "";
  }
}
