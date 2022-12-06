export class Task {
  taskId;
  taskName;
  flagComplite;
  taskSubject;
  taskText;
  taskGrade;
  constructor(name, text) {
    this.taskName = name;
    this.taskText = text;
    this.flagComplete = false;
    this.taskGrade = 0;
    this.taskSubject;
    this.taskId;
  }
  showTask() {
    console.log(
      `Perform task: ${this.taskName} do ${this.taskText}. show if task complete: ${this.flagComplete}`
    );
  }
}
