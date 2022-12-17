import { Student } from "./Student.mjs";
import { Task } from "./Task.mjs";
export class TasksManager {
  studentTasks;
  constructor() {
    this.getAllTasks();
  }
  addNewTask(task) {
    // const newTask = new Task();
    const newStudent = new Student();
    newStudent.addTask(task);
  }
  getAllTasks() {
    const newStudent = new Student();
    this.studentTasks = newStudent.loadFromLocalStorage();
    return this.studentTasks;
  }
}
