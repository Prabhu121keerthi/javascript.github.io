
// insertAdjucentElement  beforebegin/afterbegin
/*
var ele = document.createElement("h2");
var text = document.createTextNode("This is just text");

ele.appendChild(text);

var target = document.getElementById("test");

target.insertAdjacentElement("beforebegin",ele);
//target.insertAdjacentElement("afterbegin",ele);

*/

//insertAdjucentHTML beforebegin/afterbegin
 var target = document.getElementById("test");
  
var text = "<h1>Good Morning</h1>";

//target.insertAdjacentHTML("afterbegin",text);
//target.insertAdjacentHTML("beforebegin",text);
//target.insertAdjacentHTML("beforeend",text);
target.insertAdjacentHTML("afterend",text);


//insertAdjucentText beforebegin/afterbegin
/* var target = document.getElementById("test");
  
var text = "Good Morning";

//target.insertAdjacentText("afterbegin",text);
//target.insertAdjacentText("beforebegin",text);
target.insertAdjacentText("afterend",text);
*/

