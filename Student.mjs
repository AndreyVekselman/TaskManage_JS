export class Student {
  // studentName;
  // studentID;
  // studentTasks;
  // studentGrade;
  studentTasks;
  constructor() {
    // this.studentName;
    // this.studentID;
    // this.studentGrade;
    this.studentTasks = [];
    // this.saveToLocalStorage();
    // this.loadFromLocalStorage();
  }
  addTask(task) {
    this.studentTasks.push(task);
    localStorage.setItem("studentTasks", JSON.stringify(this.studentTasks));
  }
  loadFromLocalStorage() {
    this.studentTasks = JSON.parse(localStorage.getItem("studentTasks")) || [];
    return this.studentTasks;
  }
  replaceTask(task, index) {
    this.studentTasks.splice(index, 1, task);
    localStorage.setItem("studentTasks", JSON.stringify(this.studentTasks));
  }
  deleteTask(index) {
    this.studentTasks.splice(index, 1);
    this.studentTasks.forEach((task, index) => {
      task.taskId = index;
    });
    localStorage.setItem("studentTasks", JSON.stringify(this.studentTasks));
  }
}
