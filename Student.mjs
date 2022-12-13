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
    this.saveToLocalStorage();
  }
  addTask(task) {
    this.studentTasks.push(task);
  }
  loadFromLocalStorage() {
    this.studentTasks = JSON.parse(localStorage("studentTasks"));
    return this.studentTasks;
  }
  saveToLocalStorage(task) {
    this.addTask(task);
    localStorage.setItem("studentTasks", JSON.stringify(this.studentTasks));
  }
}
