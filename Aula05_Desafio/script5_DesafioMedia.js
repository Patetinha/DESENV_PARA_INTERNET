let av1, av2;
av1=parseFloat(prompt("Digite Nota Av1"));
av2=parseFloat(prompt("Digite Nota Av2"));
const media=(av1+av2)/2;
const resultado=document.querySelector(".media");

if ( media >= 6 ) {
    resultado.innerHTML+=(`Aprovado Media Final: ${media}`);
    alert(`Aprovado! \n\nMedia Final: ${media}`);

}
else if (media >= 5) {
    resultado.innerHTML+=(`Recuperação! Media Final: ${media}`);
       alert(`Recuperação! \n\nMedia Final: ${media}`);

}
else {
    resultado.innerHTML+=(`Reprovado! Media Final: ${media}`);
        alert(`Reprovado \n\nMedia Final: ${media}`);

    }