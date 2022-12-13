let a,b;// declaro as variaveis 
a=prompt("Digite um número");// o comando Prompt ele abre uma caixa para digitar
a=parseInt(a);//converte a entrada de dados para numeros 
b=parseInt(prompt("Digite outro número"));
document.write (`soma: ${(a+b)} <br>`);
document.write ("subtração: "+ (a-b)+"<br>");
document.write (`A multiplicação de ${a} por ${b} vale= ${(a*b)}<br>`);

document.write ("Divisao: "+ (a/b)+"<br>");
document.write (`A divisão de ${a} por ${b} vale= ${(a/b)}<br>`);

document.write ("modulo: "+ (a%b)+"<br>");
document.write (`o modulo de ${a} por ${b} vale= ${(a%b)}<br>`);

document.write ("potencia: "+ (a**b)+"<br>");
document.write (`a potencia de ${a} por ${b} vale= ${(a**b)}<br>`);

/*

+ Soma numero + numero

+ Juntar string + numero 

o comando Prompt ele abre uma caixa para digitar

parseFloat  o comando  transforma o texto em numeros quebrados exemplo 10.5 ele permanece 

parseInt o comando que converte para numeros inteiros exemplos 10.5 vai permanecer so no numero 5 para ficar numeracao inteira nao quebrada
*/