// css styling using style classname classlist

/*var a = document.querySelector("#page1").style.border;

//document.querySelector("#page1").style.backgroundColor = "green";

document.querySelector("#new").className = "abc xyz";

var b = document.querySelector("#new").className
console.log(b);
*/

//document.querySelector("#new").classList = "abc xyz";
document.querySelector("#new").classList.add("abc","xyz");
document.querySelector("#new").classList.remove("pqr");


var b = document.querySelector("#new").classList 
console.log(b);


//console.log(a);