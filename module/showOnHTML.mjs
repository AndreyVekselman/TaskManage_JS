import { Student } from "../Student.mjs";
//show the tasks to an index HTML page
export function showOnHTML(task) {
  const main = document.querySelector("main");
  const mainDiv = document.createElement("div");
  mainDiv.setAttribute("class", "mainDiv");

  const taskSubject = document.createElement("div");
  taskSubject.setAttribute("class", "Subject");
  let textNode = document.createTextNode("Subject: " + task.taskSubject);
  taskSubject.appendChild(textNode);

  const taskText = document.createElement("div");
  taskText.setAttribute("class", "Text");
  textNode = document.createTextNode(task.taskText);
  taskText.appendChild(textNode);

  const deadLineTime = document.createElement("div");
  deadLineTime.setAttribute("class", "deadLineTime");
  textNode = document.createTextNode(
    "Deadline for submission: " + task.taskDeadlineTime
  );
  deadLineTime.appendChild(textNode);

  const status = document.createElement("div");
  status.setAttribute("class", "status");
  if (task.flagComplete) {
    textNode = document.createTextNode("Done");
    status.appendChild(textNode);
    status.classList.add("green");
  } else {
    status.classList.add("red");
    textNode = document.createTextNode("Need perform");
    status.appendChild(textNode);
  }
  //
  const statusCheck = document.createElement("div");
  statusCheck.setAttribute("class", "status");
  if (task.flagCheck) {
    textNode = document.createTextNode("Checked");
    statusCheck.appendChild(textNode);
    statusCheck.classList.add("green");
  } else {
    statusCheck.classList.add("red");
    textNode = document.createTextNode("Need check");
    statusCheck.appendChild(textNode);
  }

  // create button-link to task solution page
  const solution = document.createElement("div");
  solution.setAttribute("class", "solution");
  const butnSolution = document.createElement("button");
  butnSolution.setAttribute("class", "butnSolution");
  butnSolution.setAttribute("id", "butnSolution");
  const btntxt = document.createTextNode("To Solution");
  const link = document.createElement("a");
  link.setAttribute("href", "/html/taskSolutionPage.html");
  // link.setAttribute("href", "/html/taskCheckDelete.html");
  //
  // link.setAttribute("target", "_blank");
  //
  butnSolution.addEventListener("click", () => {
    task.flagSolution = true;
    const localStudent = new Student();
    localStudent.studentTasks = localStudent.loadFromLocalStorage();
    localStudent.replaceTask(task, task.taskId);
  });

  butnSolution.appendChild(btntxt);
  link.appendChild(butnSolution);
  solution.appendChild(link);
  solution.appendChild(status);
  //
  // create button-link to taskCheckDelete page
  const manage = document.createElement("div");
  manage.setAttribute("class", "solution");
  const butnManage = document.createElement("button");
  butnSolution.setAttribute("class", "butnSolution");
  butnSolution.setAttribute("id", "butnManage");
  const btnManagetxt = document.createTextNode("Task Check/Delete");
  const linkToManage = document.createElement("a");
  linkToManage.setAttribute("href", "/html/taskCheckDelete.html");
  //
  // linkToManage.setAttribute("target", "_blank");
  //
  butnManage.addEventListener("click", () => {
    task.flagCheck = true;
    const localStudent = new Student();
    localStudent.studentTasks = localStudent.loadFromLocalStorage();
    localStudent.replaceTask(task, task.taskId);
  });

  butnManage.appendChild(btnManagetxt);
  linkToManage.appendChild(butnManage);
  manage.appendChild(linkToManage);
  manage.appendChild(statusCheck);

  //
  mainDiv.appendChild(taskSubject);
  mainDiv.appendChild(deadLineTime);
  mainDiv.appendChild(solution);
  mainDiv.appendChild(manage);
  main.appendChild(mainDiv);
}
