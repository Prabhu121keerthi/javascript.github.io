var newElement = document.createElement("p");
var newText = document.createTextNode("This is just text");
var newComment = document.createComment("This is Comment");

newElement.appendChild(newText);

//document.getElementById("test").appendChild(newElement);

var target = document.getElementById("test");

target.insertBefore(newElement,target.childNodes[2]);

console.log(newElement);
console.log(newText);
console.log(newComment);
