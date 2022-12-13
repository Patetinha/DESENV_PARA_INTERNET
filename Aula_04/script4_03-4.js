let a,b,c;
a=10;//a=10
b=5;//b=5
c=7;//c=7
a+=5;//a+a+5//a=15
b+=3;//b+b+3//b=8
c%=2;//c+c%2//c=1
document.write(`a=${a} , b=${b}, c=${c}`);

/*

7 |_2_
1   3
1 = resto
operador de atribuição
+= -= *= /= %= **=


a=2;
a+=2;
a+=3;
a+=4;
a=4
*/


//a += b //a = a + b   //a passa a receber a soma de a mais b
//a -= b //a = a - b   //a passa a receber a diferença de a menos b
//a *= b //a = a * b   //a passa a receber a resultado da multiplicação de a vezes b
//a /= b //a = a / b   //a passa a receber a quociente de a divido b
//a %= b //a = a % b   //a passa a receber o resto da divisão de a dividido por b
//a **=b //a = a ** b  //a passa a receber $a elevado a b (exponenciação)