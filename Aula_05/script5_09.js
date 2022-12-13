let i; //declaração de var 1
const saida=document.querySelector(".saida"); //referencia de uma class="saida"
i=10; //var i recebe o valor 0, valor inicial
do{ // faz
    saida.innerHTML+=i + "<br>"; //saida 
    i++; //soma 1
}while (i < 3); // condição 1 menor 3
    saida.innerHTML+= "<hr>"; //saida
    i=10;
while(i<3){
    saida.innerHTML+=i + "<br>"; //saida
    i++;
}

/* 
impressão

0
1
2
*/ 