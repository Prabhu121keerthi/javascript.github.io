var first = document.getElementById("list1").firstElementChild;
//var sec = document.getElementById("list2").firstElementChild;
var sec = document.getElementById("list2").children[1];

var ans = first.isEqualNode(sec);
console.log(ans);