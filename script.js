var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
  return input.value.length;
}

function createListElements() {
  //declaration of the variable reference to the address of the target node.
  var li = document.createElement("li");
  var delButton = document.createElement("button");

  //appending all the created childred to the parent element
  ul.append(li, delButton);

 //appending the text to the li tag
  li.appendChild(document.createTextNode(input.value));
 
  //creating the class and the button itself
  delButton.classList.add("delClass");
  delButton.innerHTML = "Del";
 
  
 //clearing the input field
  input.value = "";
  
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElements();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElements();
  }
}

function doneTask(task) {
  if (task.target.tagName === "LI") { //For some reason, the function node.tagName() (where you replace node with the node object) always returns letters in UPPERCASE. JavaScript is also case-sensitive, meaning the character "A" and the character "a" are totally different.
    task.target.classList.toggle("done");
  }
}

function deleteListElement(element) {
  if (element.target.className === "delClass") {
    element.target.parentElement.remove();
  }
}

function handleUlClick(element) {
  doneTask(element);
  deleteListElement(element);
}

ul.addEventListener("click", handleUlClick);
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
