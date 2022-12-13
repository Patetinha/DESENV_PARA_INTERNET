//Operador ! (not)
let a,b,res;
a=90;
b=10;
res=(a<b);
document.write(`a = ${a} , b = ${b} <br>`); //a = 9 , b = 10
document.write(`a < b : ${(a<b)} <br>`); //a < b : true
document.write(`!( a < b) : ${!(a<b)}<br>`); //!( a < b) : false
//document.write("res : "+typeof(res)); //res : boolean
document.write(`res : +${typeof(res)}`); //res : boolean