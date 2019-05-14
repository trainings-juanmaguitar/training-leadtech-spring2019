/*
Calculation
Write a program that writes in the console all the multiples of 23 less than 500 and at the end writes the sum of all of them
*/

function calculation() {
    var sum = 0;
    var elements='';
    for (var i=0; i<=500; i+=23) {
         elements += i;
         elements +=" ";
         //sum = sum+i;
         sum+=i;

    }
    return "ELEMENTS: "+elements+"\n SUMA: "+sum;
}