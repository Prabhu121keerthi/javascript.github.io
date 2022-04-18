//addevent listener method

/*
//document.getElementById("new").onclick = abc;
//document.getElementById("new").onmouseenter = abc;

document.getElementById("new").addEventListener("click",abc);




document.getElementById("tst").addEventListener("mouseenter", function() {

  this.style.border = "2px solid red";
});


function abc()
{
  document.getElementById("new").style.background="green";
}

*/

//capture.html

document.querySelector("#outer").addEventListener("click",function(){

  alert("outer");
},true);

document.querySelector("#inner").addEventListener("click",function(){

  alert("inner");
},true);