//Write a function that writes in the console the multiplication table (from 1 to 10)

var resultado = "";
for (var i=1; i<=10; i++){
    for (j=1; j<=10; j++){
        resultado += i*j + '\t';
    }
    resultado += '\n';
}

console.log(resultado);