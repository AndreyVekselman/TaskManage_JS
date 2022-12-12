export class Task {
  taskId;
  flagComplete;
  flagSolution;
  taskSubject;
  taskText;
  taskGrade;
  taskDeadlineTime;
  taskTextSolution;
  constructor() {
    this.taskText;
    this.flagComplete = false;
    this.flagSolution = false;
    this.taskGrade = 0;
    this.taskSubject;
    this.taskId;
    this.taskDeadlineTime;
    this.taskTextSolution = "";
  }
  showTask() {
    console.log(
      `Perform task: ${this.taskSubject} do ${this.taskText}. show if task complete: ${this.flagComplete} task ID is ${this.taskId} Deadline for submission ${this.taskDeadlineTime}`
    );
  }
}
