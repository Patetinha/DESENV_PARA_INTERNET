let msg; // declaração da variavel 
const saida=document.querySelector(".saida"); //seletor de class="saida"
const h1=document.querySelector("h1"); //seletor de nome tag <h1>
const teste=document.querySelector("#teste"); //seletor de id=teste

msg="Hoje a Aula Mudou!";

teste.innerHTML="Teste com H2"


saida.innerHTML=`${msg}`;
saida.innerHTML+=`<br>Mesmo!`;
saida.innerHTML+=`<br>${msg}`;

h1.innerHTML+=" - JavaScript";

