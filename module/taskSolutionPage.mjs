export function taskSolutionPage() {
  let txtNode = "";

  const capsule1 = document.createElement("div");
  capsule1.setAttribute("class", "capsule1");

  const title = document.createElement("div");
  title.setAttribute("class", "title");

  const subjTxt = document.createElement("p");
  subjTxt.setAttribute("class", "p");
  subjTxt.setAttribute("id", "subjTxt");

  const details = document.createElement("p");
  details.setAttribute("id", "details");
  txtNode = document.createTextNode("Task details:");
  details.appendChild(txtNode);

  const text = document.createElement("div");
  text.setAttribute("class", "text");
  text.setAttribute("id", "text");

  const btn = document.createElement("div");
  btn.setAttribute("class", "btn");
  btn.setAttribute("id", "linkindex1");

  const linkIndex1 = document.createElement("a");
  linkIndex1.setAttribute("id", "linkIndex1");
  linkIndex1.setAttribute("href", "../routeIndex.html");

  const button = document.createElement("button");
  button.setAttribute("id", "linkToIndex1");
  txtNode = document.createTextNode("Back to Tasks Page");
  button.appendChild(txtNode);
  linkIndex1.appendChild(button);
  btn.appendChild(linkIndex1);

  title.appendChild(subjTxt);
  title.appendChild(details);
  capsule1.appendChild(title);
  capsule1.appendChild(text);
  capsule1.appendChild(btn);
  ///////
  const capsule2 = document.createElement("div");
  capsule2.classList.add("capsule2");

  const title2 = document.createElement("div");
  title.classList.add("title");

  const subjTxt2 = document.createElement("p");
  subjTxt2.classList.add("p");
  subjTxt2.id = "subjTxt";
  title.appendChild(subjTxt2);

  const details2 = document.createElement("p");
  details2.id = "details";
  details2.textContent = "Solution details:";
  title.appendChild(details2);

  const text2 = document.createElement("div");
  text2.classList.add("text");

  const label1 = document.createElement("label");
  label1.setAttribute("for", "taskSolution");
  label1.textContent = "Add Solution:";

  const textarea1 = document.createElement("textarea");
  textarea1.name = "solution";
  textarea1.id = "taskSolution";
  textarea1.placeholder = "Text solution";

  const label2 = document.createElement("label");
  label2.setAttribute("for", "taskNotes");
  label2.textContent = "Teacher notes";

  const textarea2 = document.createElement("textarea");
  textarea2.name = "taskNotes";
  textarea2.id = "taskNotes";
  textarea2.placeholder = "Teacher notes";
  textarea2.disabled = true;

  const btn2 = document.createElement("div");
  btn.classList.add("btn");
  btn.id = "btn";

  const linkToIndex = document.createElement("a");
  linkToIndex.id = "linkToIndex";

  const submitSolution = document.createElement("button");
  submitSolution.id = "submitSolution";
  submitSolution.textContent = "Submit Solution";
  linkToIndex.appendChild(submitSolution);

  const noButton = document.createElement("p");
  noButton.id = "noButton";

  btn2.appendChild(linkToIndex);
  btn2.appendChild(noButton);

  capsule2.appendChild(title2);
  capsule2.appendChild(text2);
  capsule2.appendChild(label1);
  capsule2.appendChild(textarea1);
  capsule2.appendChild(label2);
  capsule2.appendChild(textarea2);
  capsule2.appendChild(btn2);
  //////////////
  const main = document.getElementById("main");
  main.appendChild(capsule1);
  main.appendChild(capsule1);
}
