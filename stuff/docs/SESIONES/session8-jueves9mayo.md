## ️☝️ Session 8 - Jueves 9 Mayo

https://apuntes-javascript-intermedio.netlify.com/

### Ejemplos de Closures

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

## Javascript Extra

- [Functions Scope in depth](https://toddmotto.com/everything-you-wanted-to-know-about-javascript-scope/)
- [Regular Expressions](https://github.com/juanmaguitar/javascript-notes/tree/master/markdown-en/08-regular-expressions)


## ✍️ Practice Javascript

Choose a partner and do the following exercises online (in pairs) to practice Javascript

- Do ALL exercises in the block → [Basic Javascript](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript)

## ✍️ Javascript Challenge 1

- Do the exercises suggested at https://github.com/juanmaguitar/exercises-javascript/tree/master/01-first-steps

