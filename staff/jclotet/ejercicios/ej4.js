//encodeWord
//Define a function called ​encodeWord​ that receives a string and return the codified version 
//of that string replacing the following characters:

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

// Solució 2

var encodeWord2 = (string)=> {
  var sToTranslate = string.toUpperCase()
    .split('')
    .map((elem,index)=>{
      elem === 'T' ? elem = '7' : elem;
      elem === 'A' ? elem = '4' : elem;
      elem === 'S' ? elem = '5' : elem;
      elem === 'O' ? elem = '0' : elem;
      return elem;
    })
    .join('');
    return sToTranslate;
}

console.log('encodeWord2: ', encodeWord2('Frase per traduir'));

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


// Solució 2

var encodeWordPlus2 = (string)=> {
  var sToTranslate = string.toUpperCase()
    .split('')
    .map((elem,index)=>{
      if ((index+1)%7===0) {
        elem = Math.round(Math.random() * 1000);
      } else {
        elem === 'T' ? elem = '7' : elem;
        elem === 'A' ? elem = '4' : elem;
        elem === 'S' ? elem = '5' : elem;
        elem === 'O' ? elem = '0' : elem;
      }
      return elem;
    })
    .join('');
    return sToTranslate;
}

console.log('encodeWordPlus2: ', encodeWordPlus2('Frase per traduir'));




//Hacer este ejercicio → _Write a function charFreq() that takes a string and builds a frequency listing of the 
//characters contained in it. Represent the frequency listing as a Javascript object. 
//Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab")._
//
//Empleando esta definición → `const charFreq = text => text.split('')...`
//Es decir `charFreq` devuelve directamente una concatenación de operaciones aplicadas sobre el array de caracteres 
//que resultan en un objeto que contiene la frecuencia de los caracteres en el texto
//Pista → hay que utilizar `reduce`

function charFreq(myString){
  var storage = {};
  for (var i=0; i<myString.length; i++) {
    if (!storage[myString[i]]){
      storage[myString[i]] = 1;
    } else {
      storage[myString[i]] += 1;
    }
  }
  return storage;
};

console.log(charFreq("abbabcbdbabdbdbabababcbcbab"));



const obj = {};

const charFreq2 = text => {
  text.split('').map((elem,index)=> {return !obj[elem] ? obj[elem] = 1 : obj[elem] += 1});
  return obj;
};

console.log(charFreq2("abbabcbdbabdbdbabababcbcbab"));

const charFreq3 = text => {
  var obj = {};
  text.split('').reduce((acc, elem,index)=> {return !obj[elem] ? obj[elem] = 1 : obj[elem] += 1}, obj);
  return obj;
};

console.log(charFreq3("abbabcbdbabdbdbabababcbcbabbb"));


const charFreq4 = text =>
  text.split('')
    .reduce((oCharFreq, char, index, array)=>{
      if (!oCharFreq[char]) oCharFreq[char] = 1;
      else oCharFreq[char] += 1;
      return oCharFreq;
    }, {});

console.log(charFreq4("abbabcbdbabdbdbabababcbcbabbb"));



//WordFrequency

var sText = `The path of the righteous man is beset on all sides by the
iniquities of the selfish and the tyranny of evil men. Blessed is he who, in
the name of charity and good will, shepherds the weak through the valley of
darkness, for he is truly his brother's keeper and the finder of lost
children. And I will strike down upon thee with great vengeance and furious
anger those who would attempt to poison and destroy My brothers. And you will
know My name is the Lord when I lay My vengeance upon thee.

Look, just because I don't be givin' no man a foot massage don't make it right
for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up
the way the nigger talks. Motherfucker do that shit to me, he better paralyze
my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?

Look, just because I don't be givin' no man a foot massage don't make it right
for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up
the way the nigger talks. Motherfucker do that shit to me, he better paralyze
my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?

You think water moves fast? You should see ice. It moves like it has a mind.
Like it knows it killed the world once and got a taste for murder. After the
avalanche, it took us a week to climb out. Now, I don't know exactly when we
turned on each other, but I know that seven of us survived the slide... and
only five made it out. Now we took an oath, that I'm breaking now. We said
we'd say it was the snow that killed the other two, but it wasn't. Nature is
lethal but it doesn't hold a candle to man.

My money's in that office, right? If she start giving me some bullshit about
it ain't there, and we got to go someplace else and get it, I'm gonna shoot
you in the head then and there. Then I'm gonna shoot that bitch in the
kneecaps, find out where my goddamn money is. She gonna tell me too. Hey, look
at me when I'm talking to you, motherfucker. You listen: we go in there, and
that nigga Winston or anybody else is in there, you the first motherfucker to
get shot. You understand?

Do you see any Teletubbies in here? Do you see a slender plastic tag clipped
to my shirt with my name printed on it? Do you see a little Asian child with a
blank expression on his face sitting outside on a mechanical helicopter that
shakes when you put quarters in it? No? Well, that's what you see at a toy
store. And you must think you're in a toy store, because you're here shopping
for an infant named Jeb.

Normally, both your asses would be dead as fucking fried chicken, but you
happen to pull this shit while I'm in a transitional period so I don't wanna
kill you, I wanna help you. But I can't give you this case, it don't belong to
me. Besides, I've already been through too much shit this morning over this
case to hand it over to your dumb ass.

Now that we know who you are, I know who I am. I'm not a mistake! It all makes
sense! In a comic, you know how you can tell who the arch-villain's going to
be? He's the exact opposite of the hero. And most times they're friends, like
you and me! I should've known way back when... You know why, David? Because of
the kids. They called me Mr Glass.

Look, just because I don't be givin' no man a foot massage don't make it right
for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up
the way the nigger talks. Motherfucker do that shit to me, he better paralyze
my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?

You think water moves fast? You should see ice. It moves like it has a mind.
Like it knows it killed the world once and got a taste for murder. After the
avalanche, it took us a week to climb out. Now, I don't know exactly when we
turned on each other, but I know that seven of us survived the slide... and
only five made it out. Now we took an oath, that I'm breaking now. We said
we'd say it was the snow that killed the other two, but it wasn't`;


// var wordsFreq = text =>
//     text.split(' ')
//         .reduce( (oWordFreq, word) => {
//             var cleanedWord = word
//             cleanedWord = cleanedWord.replace("A", "3")
//             cleanedWord = cleanedWord.replace(",", "")
//             cleanedWord = cleanedWord.trim()
//             if (!oWordFreq[cleanedWord]) oWordFreq[cleanedWord] = 1
//             else oWordFreq[cleanedWord]++
//             return oWordFreq
//         }, {}) 

// console.log(wordsFreq(text));


var wordsFreq = text => {
  var newText = text
    .toLowerCase()
    .replace(/\n/g, " ")
    .replace(/[\.?,]\s/g, " ")
    .split(' ')
    .reduce((acc, elem, index)=>{
      if (!acc[elem]) {
        acc[elem] = 1;
      }
      else {
        acc[elem]++;
      }
      return acc;
    },{})

// Transformar el objeto a array de arrays por parejas de key y value
// [ [key1, value1], [key2, value2],  ......]

    var aOrdered = [];

    for (var key in newText) {
      aOrdered.push([key, newText[key]]);
    }

// Ordenar por el valor de la key    
    aOrdered.sort((a,b)=>{
      return a[1]-b[1];
    });

    var result = [];

// Crear un array con los 7 últimos elementos, que son los mayores
    for( var i = 0; i<7; i++) {
      var extract = aOrdered.pop();
      result.push(extract);
    }

  return result;
};
    

console.log(wordsFreq(sText));


// Trabajando con csv's

var csv = `
name,surname,age
Pedro,Martinez,23
Juan,Garcia,35
`;

var rows = csv.split('\n').filter(row=>Boolean(row)).slice(1).map(elem=>elem.split(',')).filter(elem => parseInt(elem[2],10) < 30);


// var b = arg1 || 0; //si se cumple arg1 le asigna arg1
// var c = arg2 && 34; //si se cumple arg2 le asigno 34

function qwe(a=0,b=0) {
  var a = a || 0;
  var b = b || 0;
  return a + b;

}

const sum = (a=0,b=0) => a + b;

var array = [1,2];

var a = array[0];
var b = array[1];

//Destructuring
var [a,b] = [1,2]
var [a,b,c=0] = [1,2]

//Si no hay valor de c a la derecha le asigno cero



function fizzBuzzReducer(acc, element) {
  if (element % 15 === 0) return `${acc}Fizz Buzz\n`;
  if (element % 5 === 0) return `${acc}Fizz\n`;
  if (element % 3 === 0) return `${acc}Buzz\n`;
  return `${acc}${element}\n`;
}

const nums = [
  1, 2, 3, 4, 5, 6, 7, 8, 9,
  10, 11, 12, 13, 14, 15
];

console.log('*****************************************')
console.log(nums.reduce(fizzBuzzReducer, ''));