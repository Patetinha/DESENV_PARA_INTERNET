let numero=parseInt(prompt("Digite um numero"));

const saida=document.querySelector(".saida");

if(numero%2 ==0){
    saida.innerHTML=`${numero} - Par`;
}
else{
    saida.innerHTML=`${numero} - impar`;
}

