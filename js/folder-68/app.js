// parentelement & parentnode
/*
document.getElementById("inner").parentElement.style.background = "red";

// if there is no parent element returns null where as node returns some value
var a = document.getElementById("main").parentElement; 

var b = document.getElementById("main").parentNode;

console.log(a);
console.log(b);

*/

// children targets tags, childNodes targets spaces,comments etc...

/*

document.getElementById("inner").children[1].style.background = "red";

var a = document.getElementById("inner").children[1];
//console.log(a);

var b = document.getElementById("inner").childNodes[2];
console.log(b);

*/

/*
// firstchild & lastchild targets space,comments etc...
//document.getElementById("inner").firstElementChild.style.background = "red";

document.getElementById("inner").lastElementChild.style.background = "red";

var a = document.getElementById("inner").firstElementChild
console.log(a);

var b = document.getElementById("inner").firstChild
console.log(b);
var c = document.getElementById("inner").lastChild
console.log(c);

*/

// previous & next sibling targets apace, comment etc
document.getElementById("child-C").previousElementSibling.style.background = "red";

document.getElementById("child-C").nextElementSibling.style.background = "red";


var a = document.getElementById("child-C").previousElementSibling;
console.log(a);

var b = document.getElementById("child-C").previousSibling;
var c = document.getElementById("child-C").nextSibling;
console.log(b);
console.log(c);