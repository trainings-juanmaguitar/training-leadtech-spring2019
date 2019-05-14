## ️☝️ Session 8 - Jueves 9 Mayo

https://apuntes-javascript-intermedio.netlify.com/

## Javascript Objects

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

## Working w/ Primitives vs Objects

![Reference vs Value](./img/pass-by-reference-vs-pass-by-value-animation.gif)


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

```javascript
>>> var book = { title: "1984", author: "Orwell" }
>>> var newBook = book
>>> newBook.title = "Old Man and the Sea"
>>> book.title
"Old Man and the Sea"
```
---


## ✍️ Practice Javascript

Choose a partner and do the following exercises online (in pairs) to practice Javascript

- Do ALL exercises in the block → [Basic Javascript](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript)

----


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

---

## ✍️ Javascript Challenge 1

- Do the exercises suggested at https://github.com/juanmaguitar/exercises-javascript/tree/master/01-first-steps

---

## ✍️ Javascript Challenge 1** Extra

- Do the exercises suggested at https://github.com/juanmaguitar/exercises-javascript/tree/master/06-extra-exercises

---

## ✍️ Javascript Challenge 2

- Do the exercises suggested at https://github.com/juanmaguitar/exercises-javascript/tree/master/02-more-steps

---

## ✍️ Javascript Challenge 3

- Do the exercises suggested at https://github.com/juanmaguitar/exercises-javascript/tree/master/03-and-more

---

## ✍️ Javascript Challenge Functions

- Do the exercises suggested at https://github.com/juanmaguitar/exercises-javascript/tree/master/07-exercises-functions

---

## Javascript Arrays

- [Arrays](https://github.com/juanmaguitar/javascript-notes/tree/master/markdown-en/05-arrays-objects#arrays)
- [Array as an Object](https://github.com/juanmaguitar/javascript-notes/tree/master/markdown-en/06-global-objects#array)
  - [Array basic methods](https://github.com/juanmaguitar/javascript-notes/tree/master/markdown-en/06-global-objects/arrays#basic-methods-of-array)
  - [Functional programming w/ array higher order functions](https://github.com/juanmaguitar/javascript-notes/tree/master/markdown-en/06-global-objects/arrays#array-methods-as-higher-order-functions)

---

## ✍️ Javascript Challenge Strings

- Do the exercises suggested at https://github.com/juanmaguitar/exercises-javascript/tree/master/09-exercises-strings

---

## ✍️ Javascript Challenge Strings** Extra

- Do the exercises suggested at https://github.com/juanmaguitar/exercises-javascript/tree/master/13-exercises-string-plus

---

## ✍️ Javascript Challenge Arrays

- Do the exercises suggested at https://github.com/juanmaguitar/exercises-javascript/tree/master/08-exercises-arrays

---

## ✍️ Javascript Challenge Math

- Do the exercises suggested at https://github.com/juanmaguitar/exercises-javascript/tree/master/11-exercises-math

---

## ✍️ Javascript Challenge Date

- Do the exercises suggested at https://github.com/juanmaguitar/exercises-javascript/tree/master/12-exercises-date

---

## <span class="icon-github"></span> Functional programming workflow

Follow the steps on [this repository](https://github.com/juanmaguitar/functional-programming-sm-steps) to see the workflow of some functional programming code

---

## ✍️ Functional programming exercises

Do the [exercises 1-27](http://reactivex.io/learnrx/) to practice functional programming

---


## Javascript Extra

- [Functions Scope in depth](https://toddmotto.com/everything-you-wanted-to-know-about-javascript-scope/)
- [Regular Expressions](https://github.com/juanmaguitar/javascript-notes/tree/master/markdown-en/08-regular-expressions)


