//Ejercicio4
//Write a program that writes in the console all the multiples of 23 less than 500 and at the end writes the sum of all of them

var result = "";
var sum = 0;
function program(){
    for (i=23; i<500; i+=23){
        if (i%23 == 0){
            result += i + '\t';
            sum += i;
        }
    }
    result += '\n' + `Sum: ${sum}`;
    return result;
}
console.log(program());