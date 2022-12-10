export class Task {
  taskId;
  taskName;
  flagComplite;
  taskSubject;
  taskText;
  taskGrade;
  taskDeadlineTime;
  constructor() {
    this.taskText;
    this.flagComplete = false;
    this.taskGrade = 0;
    this.taskSubject;
    this.taskId;
    this.taskDeadlineTime;
  }
  showTask() {
    console.log(
      `Perform task: ${this.taskSubject} do ${this.taskText}. show if task complete: ${this.flagComplete} task ID is ${this.taskId} Deadline for submission ${this.taskDeadlineTime}`
    );
  }
}
