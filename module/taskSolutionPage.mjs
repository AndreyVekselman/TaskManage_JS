export function taskSolutionPage() {
  let txtNode = "";

  const capsule1 = document.createElement("div");
  capsule1.setAttribute("class", "capsule1");

  const title = document.createElement("div");
  title.setAttribute("class", "title");

  const subjTxt = document.createComment("p");
  subjTxt.setAttribute("class", "p");
  subjTxt.setAttribute("id", "subjTxt");

  const details = document.createComment("p");
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
}
