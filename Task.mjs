export class Task {
  tasksId;
  taskName;
  flagComplite;
  taskText;
  constructor(name, text) {
    this.taskName = name;
    this.taskText = text;
    this.flagComplete = false;
  }
  showTaks() {
    console.log(
      `Perform task: ${this.taskName} do ${this.taskText}. show if task complete: ${this.flagComplete}`
    );
  }
}
