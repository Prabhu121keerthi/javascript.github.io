//replacechild
/*
var ele = document.createElement("li");
var text = document.createTextNode("New text");

ele.appendChild(text);

var target = document.getElementById("test");

var oldEle = target.children[1];

target.replaceChild(ele,oldEle);
*/

//removechild
var target = document.getElementById("test");

var oldEle = target.children[1];

target.removeChild(oldEle);
