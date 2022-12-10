//show the tasks to an index HTML page

export function showOnHTML(task) {
  const main = document.querySelector("main");
  const mainDiv = document.createElement("div");
  mainDiv.className = "mainDiv";

  const taskSubject = document.createElement("div");
  taskSubject.className = "Subject";
  let textNode = document.createTextNode(task.taskSubject);
  taskSubject.appendChild(textNode);

  const taskText = document.createElement("div");
  taskText.className = "Text";
  textNode = document.createTextNode(task.taskText);
  taskText.appendChild(textNode);

  const status = document.createElement("div");
  status.setAttribute("class", "status");
  status.className = "status";
  if (task.flagComplete) {
    textNode = document.createTextNode("Done");
    status.appendChild(textNode);
    status.classList.add("green");
  } else {
    status.classList.add("red");
    textNode = document.createTextNode("Need perform");
    status.appendChild(textNode);
  }

  mainDiv.appendChild(taskSubject);
  // mainDiv.appendChild(taskText);
  mainDiv.appendChild(status);
  main.appendChild(mainDiv);
}
