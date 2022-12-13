let i,j; // cria variavel
const saida=document.querySelector(".saida"); //referencia de uma class="saida"
for (i=0; i<2; i++) { //looping externo
    for (j=0; j<4; j++) { // looping interno
        for(k=0;k<2;k++){
            saida.innerHTML+=`${i} ${j} ${k}<br>`;
        }
    }
}
/*
i j 
0 0
0 1
0 2
0 3
1 0
1 1
1 2
1 3
*/