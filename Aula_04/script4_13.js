//Operador || (or)
let a,b,c,d;
a=50;
b=120;
c=200;
document.write(`a = ${a}, b = ${b}, c = ${c} <br>`);
d=(a<=b) || (a>=c); //d=(true) || (false // d=true)
document.write("(a<=b) || (a>=c) = "+d);
//document.write("(a<=b) || (a>=c) = "+d);//true
document.write(`(a<=b) || (a>=c) = ${d}`);