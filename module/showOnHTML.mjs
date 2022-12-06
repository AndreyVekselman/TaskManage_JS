//show the tasks to an HTML page

export function showOnHTML(task) {
  const main = document.querySelector("main");
  const mainDiv = document.createElement("div");
  mainDiv.className = "mainDiv";
  const taskName = document.createElement("div");
  taskName.innerHTML = task.taskName;
  taskName.className = "Name";
  const taskText = document.createElement("div");
  taskText.className = "Text";
  taskText.innerHTML = task.taskText;
  const status = document.createElement("div");
  status.setAttribute("class", "status");
  status.className = "status";
  if (task.flagComplete) {
    status.innerHTML = "Done";
    status.setAttribute("id", "green");
  } else {
    status.setAttribute("id", "red");
    status.innerHTML = "Need perform";
  }
  mainDiv.appendChild(taskName);
  mainDiv.appendChild(taskText);
  mainDiv.appendChild(status);
  main.appendChild(mainDiv);
}
