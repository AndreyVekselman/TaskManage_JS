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
  constructor() {
    this.taskText;
    this.flagCheck = false;
    this.flagComplete = false;
    this.flagSolution = false;
    this.flagCheckComplete = false;
    this.taskGrade = 0;
    this.taskSubject;
    this.taskId;
    this.taskDeadlineTime;
    this.taskTextSolution = "";
    this.taskTeacherNotes = "";
  }
}
