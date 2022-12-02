class Task {
  tasksId;
  taskName;
  flagComplite;
  taskText;
  constructor(name, text) {
    this.taskName = name;
    this.taskText = text;
  }
  showTaks() {
    console.log(`Perform task ${this.taskName} do ${this.taskText}`);
  }
}

let Task1 = new Task();
Task1.taskName = "suka";
Task1.taskText = "blyad";
Task1.showTaks();
