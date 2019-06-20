/*
encodeWordPlus
Improve the previous function to add a random number between 0 and 1000 every 7 characters
*/

function encodeWordPlus( string ) {
    string = string.replace('t','7');
    string = string.replace('a','4')
    string = string.replace('s','5');
    string = string.replace('o','0');
    return string;
}