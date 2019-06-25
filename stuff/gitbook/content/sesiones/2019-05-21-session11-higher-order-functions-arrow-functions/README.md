# Sesion 11 -  Higher Order Functions, Arrow Functions & exercises (21-05-2019) 

{% video %}https://vimeo.com/337938215{% endvideo %}

👉 <https://apuntes-javascript-intermedio.netlify.com/>

## ✍️ Javascript Challenge 3

- Do the exercises suggested at https://github.com/juanmaguitar/exercises-javascript/tree/master/03-and-more



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


## Javascript Arrays

- [Arrays](https://github.com/juanmaguitar/javascript-notes/tree/master/markdown-en/05-arrays-objects#arrays)
- [Array as an Object](https://github.com/juanmaguitar/javascript-notes/tree/master/markdown-en/06-global-objects#array)
  - [Array basic methods](https://github.com/juanmaguitar/javascript-notes/tree/master/markdown-en/06-global-objects/arrays#basic-methods-of-array)
  - [Functional programming w/ array higher order functions](https://github.com/juanmaguitar/javascript-notes/tree/master/markdown-en/06-global-objects/arrays#array-methods-as-higher-order-functions)

---


## ✍️ Javascript Challenge Arrays

- Do the exercises suggested at https://github.com/juanmaguitar/exercises-javascript/tree/master/08-exercises-arrays



## <span class="icon-github"></span> Functional programming workflow

Follow the steps on [this repository](https://github.com/juanmaguitar/functional-programming-sm-steps) to see the workflow of some functional programming code

---

## ✍️ Functional programming exercises

Do the [exercises 1-27](http://reactivex.io/learnrx/) to practice functional programming

---


## ☝️ [Block Scope](https://hacks.mozilla.org/2015/07/es6-in-depth-let-and-const/)

- Two new types of _"variables"_: [`let`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let) and [`const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
- Both with block scope

Resources

- [ECMAScript 6 equivalents in ES5: Block Scoping Functions](https://github.com/addyosmani/es6-equivalents-in-es5#block-scoping-functions)  
- [ECMAScript 6 and Block Scope](http://ariya.ofilabs.com/2013/05/es6-and-block-scope.html)


BEFORE (ES5)

```javascript
var arr = [1, 2, 3];
for (var i = 0; i < arr.length; i++) {
  // i from 0 to 2
}
i; // 3
{
  var TEMPERATURE = 32;
  TEMPERATURE = 16;
  TEMPERATURE // 16
}
TEMPERATURE; // 16
```


AFTER (ES2015)

```javascript
var arr = [1, 2, 3];
for (let i = 0; i < arr.length; i++) {
  // i from 0 to 2
}
i; // ReferenceError: i is not defined!
{
  const TEMPERATURE = 32;
  TEMPERATURE = 16;
  TEMPERATURE; // 32
}
TEMPERATURE; // ReferenceError: TEMPERATURE is not defined!
```

#### ✍️ ES6 Katas: Block Scope

Do the following katas to assure the understanding of Block Scope
- [`let` declaration](http://tddbin.com/#?kata=es6/language/block-scoping/let)
- [`const` declaration](http://tddbin.com/#?kata=es6/language/block-scoping/const)



## ☝️ [Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

- Shorter syntax using `=>`
- Always anonymous
- Lexically bind `this`
- Really useful for event handlers and callbacks
- Really neat when using functional programming

Resources

- [ECMAScript 6 equivalents in ES5: Arrow Functions](https://github.com/addyosmani/es6-equivalents-in-es5#arrow-functions)  
- [ES6 In Depth: Arrow functions](https://hacks.mozilla.org/2015/06/es6-in-depth-arrow-functions/)  
- [Understanding ECMAScript 6 arrow functions](https://www.nczonline.net/blog/2013/09/10/understanding-ecmascript-6-arrow-functions/)


Four versions:

```javascript
    (arg1, arg2, ...) => expr
    (arg1, arg2, ...) => { stmt1; stmt2; ... }
    singleArg => expr
    singleArg => { stmt1; stmt2; ... }
```

BEFORE (ES5)

```javascript
var self = this;
this.element.addEventListener('click', function(event) {
  self.registerClick(event.target.id);
});
```

AFTER (ES2015)

```javascript
this.element.addEventListener('click', event => {
  this.registerClick(event.target.id);
});
```

BEFORE (ES5)

```javascript
[1,3,4,5,6,7].filter(function(n) { return n % 2 } )
  .map(function(n, i) { return n + i } );
// [1, 4, 7, 10]
```

AFTER (ES2015)

```javascript
[1,2,3,4,5,6,7].filter(n => n % 2).map((n, i) => n+i);
```

#### ✍️ ES6 Katas: Arrow Functions

Do the following katas to assure the understanding of arrow functions
- [basics](http://tddbin.com/#?kata=es6/language/arrow-functions/basics)
- [function binding](http://tddbin.com/#?kata=es6/language/arrow-functions/binding)
