export class Task {
  taskId;
  flagComplete;
  flagSolution;
  flagCheck;
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
    this.taskGrade = 0;
    this.taskSubject;
    this.taskId;
    this.taskDeadlineTime;
    this.taskTextSolution = "";
    this.taskTeacherNotes = "";
  }
  showTask() {
    console.log(
      `Perform task: ${this.taskSubject} do ${this.taskText}. show if task complete: ${this.flagComplete} task ID is ${this.taskId} Deadline for submission ${this.taskDeadlineTime}`
    );
  }
}
