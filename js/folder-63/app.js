 /*

 // Get Attributes using innertext innerhtml getattribute/node attributes


var text = document.getElementById("test").innerText;
console.log(text);



var text = document.getElementById("page1").innerHTML;
console.log(text);


//var text = document.getElementById("page1").getAttribute("class");
//var text = document.getElementById("page1").getAttribute("style");
//var text = document.getElementById("page1").getAttributeNode("style");
var text = document.getElementById("page1").attributes[2];

console.log(text);
*/

//Set Attributes

 document.getElementById("test").innerText = "<h1>wow</h1>";
 document.getElementById("test").innerHTML = "wow";

 document.getElementById("page1").setAttribute("class","abc");
  document.getElementById("page1").attributes[2].value = "3px solid blue";
  document.getElementById("page1").removeAttribute("style");
