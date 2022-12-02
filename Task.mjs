export class Task {
  taskId;
  taskName;
  flagComplete;
  taskText;
  taskGrade;
  constructor(name, text) {
    this.taskName = name;
    this.taskText = text;
    this.flagComplete = false;
    this.taskGrade = 0;
  }
  showTask() {
    console.log(
      `Perform task: ${this.taskName} do ${this.taskText}. show if task complete: ${this.flagComplete}`
    );
  }
}
