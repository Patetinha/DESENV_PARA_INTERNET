let a,b;
a=prompt("Digite um número");
alert("Atenção!");
a=parseInt(a);
b=parseInt(prompt("Digite outro número"));
alert("Boa vou calcular pra você");
document.write (`A soma de ${a} por ${b} vale: ${(a+b)} <br>`);
document.write ("A subtração de ",a," por ",b," vale:"+ (a-b) +"<br>");
document.write (`A Multiplicação de ${a} por ${b} vale: ${(a*b)} <br>`);
document.write (`A Divisão de ${a} por ${b} vale: ${(a/b)} <br>`);
document.write (`O Módulo(resto da divisão) de ${a} por ${b} vale: ${(a%b)} <br>`);
document.write (`A Exponenciação de ${a} por ${b} vale: ${(a**b)} <br>`); 
document.write (`A multiplicação de ${a} por ${b} vale: ${a * b}<br>`);// correto
