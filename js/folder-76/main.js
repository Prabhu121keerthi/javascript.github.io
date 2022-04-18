var target = document.getElementById("list1").children[0];
var copy = target.cloneNode(true);

document.getElementById("list2").appendChild(copy);

console.log(target);