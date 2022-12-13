let av1, av2, media, resultado;
av1 = parseFloat(prompt("Digite Nota Av1"));
av2 = parseFloat(prompt("Digite Nota Av2"));
media = (av1+av2)/2;
resultado = (media>=6) ? "Aprovado 😎" : "Reprovado 😭";
document.write (`Av1= ${av1}<br> Av2= ${av2}<br> Media= ${media}<br>`);
document.write(`Media do aluno = ${media}<br>`);
document.write(`Aluno está = ${resultado}<br>`);

