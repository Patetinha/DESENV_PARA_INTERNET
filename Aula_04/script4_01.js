let x, y, z;
y=3;
z=5;
x = 2 * (y + z);//x=2*(3+5)//x=2*8//x=16
document.write ("x = ",x,"<br>");// , 
document.write ("x = " + x + "<br>");// + juntar(concatenar)
document.write (`x = ${x}<br>`);//
document.write (`O valor de z vale ${z}<br>`);//
document.write (`z=${z} , y=${y}, x=${x}<br>`);//crase ok
document.write ('z=${z} , y=${y}, x=${x}<br>');//exemplo aspas simples vira texto
document.write(`O valor de z vale ${2 * y + z}<br>`);// correto
