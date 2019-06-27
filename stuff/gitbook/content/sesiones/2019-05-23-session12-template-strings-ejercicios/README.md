# Sesion 12 -  Template Strings y Ejercicios (21-05-2019) 

🙁 _El video de esta sesión no se grabó bien_ 

👉 <https://apuntes-javascript-intermedio.netlify.com/>

## ✍️ Ejercicio

_Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab")._

Empleando esta definición → `const charFreq = text => text.split('')...`

Es decir `charFreq` devuelve directamente una concatenación de operaciones aplicadas sobre el array de caracteres que resultan en un objeto que contiene la frecuencia de los caracteres en el texto
Pista → hay que utilizar `reduce`

## ✍️ Ejercicio

Randomizes three numbers in range (0.. 100) and prints the largest one.

```
const getThreeRandomNumbers = () => 
    new Array(3)
        .fill(0)
        .map(() => Math.round(Math.random()*100))
```

```
const largestNumberWay1 = numbers => 
    numbers
        .reduce( (largest, number) => 
            number > largest ? number : largest
        , 0)

const largestNumberWay2 = numbers => Math.max.apply(null,numbers)

// 👇 OJO con esta!! ¿Qué problema hay aqui?
const largestNumberWay3 = numbers => numbers.sort((a,b) => a-b).pop() 
```

## [Template Strings](https://hacks.mozilla.org/2015/05/es6-in-depth-template-strings-2/)

- Enclosed by back-ticks @@` `` ` @@
- Multi-line support
- Can contain placeholders `${ expression }`

```javascript
`string text`

`string text line 1
 string text line 2`

`string text ${expression} string text`
```

BEFORE (ES5)

```javascript
var name = "juanma";
var getSuitableDrink = function(who) {
  return who === 'juanma' ? 'beer' : 'cocktail'
};

console.log( 'Hello, '+name+'!\nFancy a '+getSuitableDrink()+'?' );

// Hello, juanma!
// Fancy a beer?
```

AFTER (ES2015)

```javascript
var name = "juanma";
var getSuitableDrink = function(who) {
  return who === 'juanma' ? 'beer' : 'cocktail'
};

console.log( `Hello, ${ name }!
  Fancy a ${ getSuitableDrink() }?` );
```

- [Template Strings](https://hacks.mozilla.org/2015/05/es6-in-depth-template-strings-2/)
- [ECMAScript 6 equivalents in ES5: Template Literals](https://github.com/addyosmani/es6-equivalents-in-es5#template-literals)  

## ✍️ ES6 Katas: Template Strings

Do the following katas to assure the understanding of template strings
- [basics](http://tddbin.com/#?kata=es6/language/template-strings/basics)
- [multiline](http://tddbin.com/#?kata=es6/language/template-strings/multiline)
- [tagged template strings](http://tddbin.com/#?kata=es6/language/template-strings/tagged)
- [`raw` property](http://tddbin.com/#?kata=es6/language/template-strings/raw)

## ✍️ Ejercicio

```
var text = `The path of the righteous man is beset on all sides by the
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
we'd say it was the snow that killed the other two, but it wasn't`
```

```
var wordsFreq = text =>
    text.split(' ')
        .reduce( (oWordFreq, word) => {
            var cleanedWord = word
            cleanedWord = cleanedWord.replace(".", "")
            cleanedWord = cleanedWord.replace(",", "")
            cleanedWord = cleanedWord.trim()
            if (!oWordFreq[cleanedWord]) oWordFreq[cleanedWord] = 1
            else oWordFreq[cleanedWord]++
            return oWordFreq
        }, {}) 
```