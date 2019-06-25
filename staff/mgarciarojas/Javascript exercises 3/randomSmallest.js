/**
 * randomSmallest()
Randomizes two numbers and prints the smallest number that is greater than one, such that both numbers are divided by it with no remainder. 
For instance, for 9 and 6 you should print 3. If there isn't one a proper note should be printed.
 */

function randomSmallest() {
  var nRandomOne = Math.floor(Math.random() * 10);
  var nRandomTwo = Math.floor(Math.random() * 10);

  var nLargest = 0;
  if (nRandomOne > nRandomTwo) {
    nLargest = nRandomOne;
  } else {
    nLargest = nRandomTwo;
  }

  for (var i = nLargest; i > 0; i--) {
    if (nRandomOne % i == 0 && nRandomTwo % i == 0) {
      return "this is the smallest number " + i;
    }
  }
}
