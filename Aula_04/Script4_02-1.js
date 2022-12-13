let a, b;
a=prompt("Digite um número");//"10.5"
a=parseFloat(a);//10.5

b=parseInt(prompt("Digite outro número"));//3.7  //3

document.write (`soma: ${(a+b)} <br>`);//102
document.write ("subtração: "+(a-b)+"<br>");
document.write (`A multiplicação de ${a} por ${b} vale ${(a*b)}<br>`);