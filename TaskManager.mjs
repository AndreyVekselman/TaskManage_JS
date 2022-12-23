import { Student } from "./Student.mjs";
import { Task } from "./Task.mjs";
export class TasksManager {
  studentTasks;
  constructor() {
    this.getAllTasks();
  }
  addNewTask(taskSubject, taskText, taskId, taskDeadLineTime) {
    let newTask = new Task(taskSubject, taskText, taskId, taskDeadLineTime);
    let newStudent = new Student();
    newStudent.addTask(newTask);
  }
  getAllTasks() {
    const newStudent = new Student();
    this.studentTasks = newStudent.loadFromLocalStorage();
    return this.studentTasks;
  }
  replaceStudentTask(task, index) {
    const newStudent = new Student();
    newStudent.replaceTask(task, index);
  }
  deleteStudentTask(index) {
    const newStudent = new Student();
    newStudent.deleteTask(index);
  }
}
