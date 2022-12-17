import { Student } from "./Student.mjs";
import { Task } from "./Task.mjs";
export class TasksManager {
  studentTasks;
  constructor() {
    this.getAllTasks();
  }
  addNewTask(taskSubject, taskText, taskId, taskDeadLineTime) {
    const newTask = new Task(taskSubject, taskText, taskId, taskDeadLineTime);
    const newStudent = new Student();
    newStudent.addTask(newTask);
  }
  getAllTasks() {
    const newStudent = new Student();
    this.studentTasks = newStudent.loadFromLocalStorage();
    return this.studentTasks;
  }
}
