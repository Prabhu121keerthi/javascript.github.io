var id = setTimeout(startFunc,5000);

function startFunc()
{
  document.getElementById("test").style.width = "500px";
}

function clickFunc()
{
  clearTimeout(id);
}