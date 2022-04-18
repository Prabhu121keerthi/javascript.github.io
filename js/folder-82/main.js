var a = 0;

var b = setInterval(move,1000);


function move()
{
  a = a + 10;

  if (a==100)
  {
    clearInterval(b);
  }
  else 
  {
    document.getElementById("test").style.marginLeft = a + 'px';
  }
}