/*
max() function
Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
*/

function max(i,j) {
    if (i<j) return j;
    else if (i>j) return i;
    else return "equals";
}

/*
maxOfThree() function
Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
*/

function maxOfThree(i,j,x) {
    return Math.max(i,j,x);
}
