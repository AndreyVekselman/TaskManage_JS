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
  textNode = document.createTextNode(task.taskDeadlineTime);
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

  mainDiv.appendChild(taskSubject);
  mainDiv.appendChild(deadLineTime);
  // mainDiv.appendChild(taskText);
  mainDiv.appendChild(status);
  main.appendChild(mainDiv);
}
