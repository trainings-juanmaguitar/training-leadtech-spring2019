//Calculation
//Write a program that writes in the console all the multiples of 23 less than 500 and at the end writes the sum of all of them
function multiInteger23(){
    var listMultiIntegerOf23 = '';
    var sumMultiIntegerOf23 = '';
    var messageResults= '';

    for(var i=23; i <500; i+=23){
        listMultiIntegerOf23 += i + '\t';
        sumMultiIntegerOf23 += i;
    }
    messageResults = 'Elements :' + listMultiIntegerOf23 + 'Sum :' +sumMultiIntegerOf23;
    return messageResults
}