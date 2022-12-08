export class Student {
  studentName;
  studentID;
  studentTasks;
  studentGrade;
  constructor() {
    this.studentName;
    this.studentID;
    this.studentGrade;
    this.studentTasks = [];
  }
  addTask(task) {
    this.studentTasks.push(task);
  }
}
