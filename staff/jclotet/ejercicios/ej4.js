//encodeWord
//Define a function called ​encodeWord​ that receives a string and return the codified version of that string replacing the following characters:

//7 instead of T
//4 instead of A
//5 instead of S
//0 instead of O

function encoded(stringToEncode) {

  var upperCase = stringToEncode.toUpperCase().split('');
  
  return trans(upperCase).join('');
}

function trans(sentence) {
  var translated = sentence.map((element, index) => {
    switch (element) {
      case 'T':
        element = '7';
        break;
      case 'A':
        element = '4';
        break;
      case 'S':
        element = '5';
        break;
      case 'O':
        element = '0';
        break;
      default:
        element;
    }
    return element;
  });
  return translated;
}

console.log(encoded('Frase per traduir'));

//encodeWordPlus
//Improve the previous function to add a random number between 0 and 1000 every 7 characters

// function encoded(stringToEncode) {

//   var upperCase = stringToEncode.toUpperCase().split('');
  
//   return trans(upperCase).join('');
// }

// function trans(sentence) {
  
//   var translated = sentence.map((element, index) => {
//   var count = 0;

//     if (count !== 7 ) {

//       switch (element) {
//         case 'T':
//           element = '7';
//           break;
//         case 'A':
//           element = '4';
//           break;
//         case 'S':
//           element = '5';
//           break;
//         case 'O':
//           element = '0';
//           break;
//         default:
//           element;
//       }
//       count += 1;
//       return element;

//     } else {

//     }

    
//   });
//   return translated;
// }

// console.log(encoded('Frase per traduir'));