export class Task {
  taskId;
  taskName;
  flagComplite;
  taskSubject;
  taskText;
  taskGrade;
  taskDeadlineTime;
  constructor(name, text) {
    this.taskName = name;
    this.taskText = text;
    this.flagComplete = false;
    this.taskGrade = 0;
    this.taskSubject;
    this.taskId;
    this.taskDeadlineTime;
  }
  showTask() {
    console.log(
      `Perform task: ${this.taskName} do ${this.taskText}. show if task complete: ${this.flagComplete} task ID is ${this.taskId} Deadline for submission ${this.taskDeadlineTime}`
    );
  }
}
