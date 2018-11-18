
var b = document.getElementById("b");

var pp = document.getElementById("pp");


var d = document.getElementById("d");

var p = document.getElementById("p");

d.addEventListener('animationend',funcion);

var n = 1;


function funcion()
{
p.innerHTML = n ++;
d.style.animationIterationCount = n;



}
