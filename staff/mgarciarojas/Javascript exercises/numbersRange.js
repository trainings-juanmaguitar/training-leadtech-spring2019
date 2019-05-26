/**Integer Numbers Range
 * Write a function in Javascript that having two integers
 *  x1 and x2 returns all the integers between them. If x2 es lower than x1 it should return -1 */

function numbersBetween (a, b){
    var rangeBetween="";
    if (b<a) {return -1 }
     for (var i=a; i<=b; i++) {
        rangeBetween += i + '\t';
        }
    return rangeBetween;
}

