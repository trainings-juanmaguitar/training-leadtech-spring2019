## ️☝️ Session 6 - Jueves 2 Mayo

## Javascript Functions

- [Funciones](https://github.com/juanmaguitar/javascript-notes/tree/master/markdown-en/04-functions#functions)
  - [Estructura y Parametros](https://github.com/juanmaguitar/javascript-notes/tree/master/markdown-en/04-functions#parameters)
  - [Funciones pre-definidas](https://github.com/juanmaguitar/javascript-notes/tree/master/markdown-en/04-functions#pre-defined-functions)
  - [Scope de las funciones](https://github.com/juanmaguitar/javascript-notes/tree/master/markdown-en/04-functions#functions-scope)
  - [Funciones Callback](https://github.com/juanmaguitar/javascript-notes/tree/master/markdown-en/04-functions#callback-functions)
  - [Closures](https://github.com/juanmaguitar/javascript-notes/tree/master/markdown-en/04-functions#closures) [[1]](https://developer.mozilla.org/es/docs/Web/JavaScript/Closures) [[2]](http://www.variablenotfound.com/2012/10/closures-en-javascript-entiendelos-de.html) [[3]](https://jherax.wordpress.com/2015/02/13/javascript-closures/)
    - [Closures Examples](https://msdn.microsoft.com/en-us/magazine/ff696765.aspx)

## Javascript Objects

- [Arrays and Objects (Constructors)](https://github.com/juanmaguitar/javascript-notes/blob/master/markdown-en/05-arrays-objects)
- [Global Objects (Object, Function, Array, Number, Boolean, Math and Date)](https://github.com/juanmaguitar/javascript-notes/blob/master/markdown-en/06-global-objects)


```
var mathy = function(x) {
    return function (y) {
        return function (z) {
            return (x / y) - z;
        }
    }
}
```

¿Cómo hariamos la operación `(4 / 3) - 2` con este código en una linea?

<!-- http://jtfmumm.com/blog/2013/08/31/nested-higher-order-functions-in-javascript/ -->

```
var superGreeter = function(greeting) {
    return function(place) {
        return function(nickname) {
            return function(name) {
                return greeting + ', ' + name + '! Welcome to ' + place + ', ' + nickname + '.';
            }
        }
    }
};

superGreeter('Hey')('Berlin')('old pal')('Hans')
//'Hey, Hans! Welcome to Berlin, old pal.'

hiParisBuddyGreeter = superGreeter('Hi')('Paris')('buddy');
helloTokyoGreeter = superGreeter('Hello')('Tokyo');

hiParisBuddyGreeter('Franz')
//'Hi, Franz! Welcome to Paris, buddy.'
helloTokyoGreeter('friend')
//[Function]
helloTokyoGreeter('friend')('Yuki')
//'Hello, Yuki! Welcome to Tokyo, friend.'

```

<!-- http://jtfmumm.com/blog/2013/08/31/nested-higher-order-functions-in-javascript/ -->


## ✍️ Closures practice

https://github.com/Bloc/mentor-exercises/blob/master/exercises/javascript/closure-scoping-exercises.md


## Working w/ Primitives vs Objects

![Reference vs Value](img/pass-by-reference-vs-pass-by-value-animation.gif)


!SLIDE javascript smallcode

```javascript
>>> var data = {
  name: "juanma",
  location: "barcelona"
}

>>> var age = 35;

>>> function setData( oData, nAge ) {
  oData.location = "dublin";
  nAge = 40;
  return oData.location + " - " + nAge;
}

>>> setData(data, age)
"dublin - 40"
>> data
Object {name: "juanma", location: "dublin"}
>> age
35
```


!SLIDE javascript smallcode

```javascript
>>> var number = 10;
>>> var newNumber = number;
>>> newNumber = newNumber + 1000;
>>> number
10

>>> var arrayNumbers = [1,2,3,4]
>>> var newArrayNumbers = arrayNumbers
>>> newArrayNumbers.push(10)
>>> arrayNumbers
[1, 2, 3, 4, 10]

>>> var book = { title: "1984", author: "Orwell" }
>>> var newBook = book
>>> newBook.title = "Old Man and the Sea"
>>> book.title
"Old Man and the Sea"
```

!SLIDE javascript

```javascript
>>> var book = { title: "1984", author: "Orwell" }
>>> var newBook = book
>>> newBook.title = "Old Man and the Sea"
>>> book.title
"Old Man and the Sea"
```


!SLIDE javascript exercise

## <span class="icon-laptop"></span> Practice Javascript

Choose a partner and do the following exercises online (in pairs) to practice Javascript

- Do exercises from [Comment your JavaScript Code](https://www.freecodecamp.com/challenges/comment-your-javascript-code) to [Invert Regular Expression Matches with JavaScript](https://www.freecodecamp.com/challenges/invert-regular-expression-matches-with-javascript)


!SLIDE javascript smallcode

```javascript
var a; typeof a;
var s = '1s'; s++;
!!"false"
!!undefined
undefined == null
false == ""
false === ""
typeof "2E+2"
a = 3e+3; a++;
```

What will be the result of executing these lines in the console? Why?

!SLIDE javascript smallcode

```javascript
var v = v || 10;
var v = 100;
var v = v || 10;
var v = 0;
var v = v || 10;
var v = null;
var v = v || 10;
```

What is the value of `v` after this?

!SLIDE javascript smallcode

```
var x = 'Hello World';
function foo(){
    var x;
    alert( x );
    x = 'New Value';
    alert( x );
}
foo();
```

What will return the `alert`s? Why?

!SLIDE javascript smallcode

```
function test() {
    foo();
    bar();
    var foo = function () {
        alert("this won't run!");
    }
    function bar() {
        alert("this will run!");
    }
}
test();

```

What will return the execution of `test()`? Why?

!SLIDE javascript smallcode

```
var a = 1;
function f() {
    var a = 2;
    function n() {
        alert(a);
    }
    n();
}
f();

```

What will show this code in the `alert()`? Why?

!SLIDE javascript exercise

## <span class="icon-laptop"></span> Javascript Challenge 1

- Do the exercises suggested at https://github.com/juanmaguitar/exercises-javascript/tree/master/01-first-steps

!SLIDE javascript exercise

## <span class="icon-laptop"></span> Javascript Challenge 1** Extra

- Do the exercises suggested at https://github.com/juanmaguitar/exercises-javascript/tree/master/06-extra-exercises


!SLIDE javascript exercise

## <span class="icon-laptop"></span> Javascript Challenge 2

- Do the exercises suggested at https://github.com/juanmaguitar/exercises-javascript/tree/master/02-more-steps

!SLIDE javascript exercise

## <span class="icon-laptop"></span> Javascript Challenge 3

- Do the exercises suggested at https://github.com/juanmaguitar/exercises-javascript/tree/master/03-and-more

!SLIDE javascript exercise

## <span class="icon-laptop"></span> Javascript Challenge Functions

- Do the exercises suggested at https://github.com/juanmaguitar/exercises-javascript/tree/master/07-exercises-functions


!SLIDE javascript  theory

## Javascript Arrays

- [Arrays](https://github.com/juanmaguitar/javascript-notes/tree/master/markdown-en/05-arrays-objects#arrays)
- [Array as an Object](https://github.com/juanmaguitar/javascript-notes/tree/master/markdown-en/06-global-objects#array)
  - [Array basic methods](https://github.com/juanmaguitar/javascript-notes/tree/master/markdown-en/06-global-objects/arrays#basic-methods-of-array)
  - [Functional programming w/ array higher order functions](https://github.com/juanmaguitar/javascript-notes/tree/master/markdown-en/06-global-objects/arrays#array-methods-as-higher-order-functions)

!SLIDE javascript exercise

## <span class="icon-laptop"></span> Javascript Challenge Strings

- Do the exercises suggested at https://github.com/juanmaguitar/exercises-javascript/tree/master/09-exercises-strings

!SLIDE javascript exercise

## <span class="icon-laptop"></span> Javascript Challenge Strings** Extra

- Do the exercises suggested at https://github.com/juanmaguitar/exercises-javascript/tree/master/13-exercises-string-plus

!SLIDE javascript exercise

## <span class="icon-laptop"></span> Javascript Challenge Arrays

- Do the exercises suggested at https://github.com/juanmaguitar/exercises-javascript/tree/master/08-exercises-arrays

!SLIDE javascript exercise

## <span class="icon-laptop"></span> Javascript Challenge Math

- Do the exercises suggested at https://github.com/juanmaguitar/exercises-javascript/tree/master/11-exercises-math

!SLIDE javascript exercise

## <span class="icon-laptop"></span> Javascript Challenge Date

- Do the exercises suggested at https://github.com/juanmaguitar/exercises-javascript/tree/master/12-exercises-date


!SLIDE javascript

## <span class="icon-github"></span> Functional programming workflow

Follow the steps on [this repository](https://github.com/juanmaguitar/functional-programming-sm-steps) to see the workflow of some functional programming code

!SLIDE javascript exercise

## <span class="icon-laptop"></span> Functional programming exercises

Do the [exercises 1-27](http://reactivex.io/learnrx/) to practice functional programming


!SLIDE javascript theory

## Javascript Extra

- [Functions Scope in depth](https://toddmotto.com/everything-you-wanted-to-know-about-javascript-scope/)
- [Regular Expressions](https://github.com/juanmaguitar/javascript-notes/tree/master/markdown-en/08-regular-expressions)


!SLIDE javascript exercise

## <span class="icon-laptop"></span> Javascript The First Parts

Group yourself in pairs and solve the challenges proposed at: http://mosaic.academy/

!SLIDE javascript

## TDD

- [Unit Testings](https://github.com/juanmaguitar/javascript-notes/tree/master/markdown-en/07-TDD#1--unit-testings)
- [TDD y BDD](https://github.com/juanmaguitar/javascript-notes/tree/master/markdown-en/07-TDD#2--tdd-y-bdd)
- [Testing Frameworks](https://github.com/juanmaguitar/javascript-notes/tree/master/markdown-en/07-TDD#3--testing-frameworks)
- [Testing Runners](https://github.com/juanmaguitar/javascript-notes/tree/master/markdown-en/07-TDD#4--testing-runners)

!SLIDE javascript

## Jasmine

- [Jasmine](http://jasmine.github.io/edge/introduction.html) [[1]](http://addyosmani.github.com/backbone-fundamentals/#jasmine)
  - [Suites `describe` & Specs `it`](http://jasmine.github.io/edge/introduction.html#section-It&rsquo;s_Just_Functions) [1](http://addyosmani.github.com/backbone-fundamentals/#suites-specs-spies)
  - [Expectations & Matchers `expect(true).toBe(true)`](http://jasmine.github.io/edge/introduction.html#section-Matchers)

!SLIDE javascript

## Jasmine Advanced

- [Grouping Related Specs with `describe`](http://jasmine.github.io/edge/introduction.html#section-Grouping_Related_Specs_with_<code>describe</code>)
    - [Setup `beforeEach` and Teardown `afterEach`](http://jasmine.github.io/edge/introduction.html#section-Setup_and_Teardown)
* [Spies](http://jasmine.github.io/edge/introduction.html#section-Spies)
  * [Spy cheatsheet](http://tobyho.com/2011/12/15/jasmine-spy-cheatsheet/)
* [jQuery matchers and fixture loader](https://github.com/velesin/jasmine-jquery)
* [Faking response AJAX](https://github.com/jasmine/jasmine-ajax)

!SLIDE javascript exercise

## <span class="icon-laptop"></span> Javascript Koan

- Group yourselves in pairs
- Read the following tutorial together: http://javascript.didacto.net/
- Do the exercises together when suggested
- Reach till the _Fibonacci Challenge_ (included)

!SLIDE javascript exercise

## <span class="icon-laptop"></span> Javascript Kata: Drink About

- Group yourselves in pairs
- Do the following kata by doing pair programming and applying TDD: https://github.com/juanmaguitar/exercises-katas-js/tree/master/DrinkAbout
- Use Jasmine as test runner

!SLIDE javascript exercise

## <span class="icon-laptop"></span> Javascript Kata: Grade Boook

- Group yourselves in pairs
- Do the following kata by doing pair programming and applying TDD: https://github.com/juanmaguitar/exercises-katas-js/tree/master/GradeBook
- Use Jasmine as test runner

!SLIDE javascript exercise

## <span class="icon-laptop"></span> Javascript Kata: Fizz Buzz

- Group yourselves in pairs
- Do the following kata by doing pair programming and applying TDD: https://github.com/juanmaguitar/exercises-katas-js/tree/master/FizzBuzz
- Use Jasmine as test runner

!SLIDE javascript exercise

## <span class="icon-laptop"></span> Javascript Kata: Rock Paper Scissors

- Group yourselves in pairs
- Do the following kata by doing pair programming and applying TDD: https://github.com/juanmaguitar/exercises-katas-js/tree/master/RockPaperScissors
- Use Jasmine as test runner

!SLIDE javascript exercise

## <span class="icon-laptop"></span> Javascript Kata: Password Validation

- Group yourselves in pairs
- Do the following kata by doing pair programming and applying TDD: https://github.com/juanmaguitar/exercises-katas-js/tree/master/PasswordValidation
- Use Jasmine as test runn


!SLIDE javascript exercise

## <span class="icon-laptop"></span> KOAN Javascript-Jasmine

Do the following [KOAN](https://github.com/mrdavidlaing/javascript-koans) to practice javascript concepts


!SLIDE javascript no-bullet-list resources

## More resources for this Unit

- <span class="fa fa-youtube"></span> [Javascript fundamentals](https://www.youtube.com/watch?v=JTpjqYjrPyU) _7h_  
- <span class="fa fa-book"></span> [Test Driven JavaScript Development](http://www.amazon.es/Driven-JavaScript-Development-Developers-Library/dp/0321683919)
- <span class="fa fa-link"></span> [Testing Your JavaScript with Jasmine](http://code.tutsplus.com/tutorials/testing-your-javascript-with-jasmine--net-21229)
- <span class="fa fa-github"></span> [JS Unit Testing Guide](https://github.com/mawrkus/js-unit-testing-guide)
- <span class="fa fa-external-link"></span> [Advanced Javascript](http://ejohn.org/apps/learn/)
- <span class="fa fa-github"></span> [Awesome JavaScript](https://github.com/sorrycc/awesome-javascript)
- <span class="fa fa-external-link"></span> [RegExr](http://regexr.com/)
- <span class="fa fa-external-link"></span> [JS Standards](http://bguiz.github.io/js-standards/intro/)

!SLIDE javascript no-bullet-list resources

## Katas

- <span class="fa fa-link"></span> [Code Kata | pernix](http://katas.softwarecraftsmanship.org/)  
- <span class="fa fa-link"></span> [Code Kata | Dave Thomas](http://codekata.com/)  
- <span class="fa fa-link"></span> [Project Euler](https://projecteuler.net/archives)  
- <span class="fa fa-link"></span> [codekatas.org](http://www.codekatas.org/)  
- <span class="fa fa-link"></span> [Javascript Katas](http://www.javascriptkata.com/)  
- <span class="fa fa-link"></span> [Cyber Dojo](http://cyber-dojo.org/)  
- <span class="fa fa-link"></span> [CodeWars](http://www.codewars.com/)  

