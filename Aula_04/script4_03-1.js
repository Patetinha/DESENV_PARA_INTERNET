let a,b;
a=5; //5
b=3; //3
a+=b; // a=a+b
b+=8;
document.write(a); // resultado: 8
a = b  //a = b             //a recebe o conteúdo de b
document.write(`a=${a} , b=${b} , res=${a + b}</br>`);
document.write(`a=${a} , b=${b} , res=${a - b}</br>`);
document.write(`a=${a} , b=${b} , res=${a * b}</br>`);
document.write(`a=${a} , b=${b} , res=${a / b}</br>`);
document.write(`a=${a} , b=${b} , res=${a % b}</br>`);
document.write(`a=${a} , b=${b} , res=${a ** b}</br>`);

//a += b //a = a + b        //a passa a receber a soma de a mais b
//a -= b //a = a - b        //a passa a receber a diferença de a menos b
//a *= b //a = a * b        //a passa a receber a resultado da multiplicação de a vezes b
//a /= b //a = a / b        //a passa a receber a quociente de a divido b
//a %= b //a = a % b        //a passa a receber o resto da divisão de a dividido por b
//a **=b //a = a ** b       //a passa a receber $a elevado a b (exponenciação)
