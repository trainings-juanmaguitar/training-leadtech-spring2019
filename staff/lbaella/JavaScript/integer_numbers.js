/*
Integer Numbers Range
Write a function in Javascript that having two integers x1 and x2 returns all the integers between them. If x2 es lower than x1 it should return -1
*/

function numbersRange(x1, x2) {
    var numbers = '';
    if (x1<x2) {
        for (x1; x1<= x2; x1++) {
            if (x1<x2) numbers += x1+ '\t';
            else numbers += x1;
        }
    } else numbers = -1;
    return numbers;
}

