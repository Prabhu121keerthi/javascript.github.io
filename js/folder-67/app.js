// classlist methods add, length,toggle, item,contains

document.getElementById("new").addEventListener("click",abc);

function abc()
{
  document.getElementById("new").classList.add("abc");
  //document.getElementById("new").classList.toggle("abc");
  var b = document.getElementById("new").classList.item(0);
  var c = document.getElementById("new").classList.contains("abc");


  var a = document.getElementById("new").classList.length;
  console.log(a);
  console.log(b);
  console.log(c);

}