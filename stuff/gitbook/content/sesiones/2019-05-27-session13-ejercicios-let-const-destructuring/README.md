# Sesion 13 -  Ejercicios, let, const, destructuring (27-05-2019) 

{% video %}https://vimeo.com/338734274{% endvideo %}

👉 <https://apuntes-javascript-intermedio.netlify.com/>

## [Block Scope](https://hacks.mozilla.org/2015/07/es6-in-depth-let-and-const/)

- Two new types of _"variables"_: [`let`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let) and [`const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
- Both with block scope

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

## ✍️ ES6 Katas: Block Scope

Do the following katas to assure the understanding of Block Scope
- [`let` declaration](http://tddbin.com/#?kata=es6/language/block-scoping/let)
- [`const` declaration](http://tddbin.com/#?kata=es6/language/block-scoping/const)

## [Destructuring Assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) [[1]](http://exploringjs.com/es6/ch_destructuring.html)

- Array destructuring
- Object destructuring
- [Examples](https://gist.github.com/mikaelbr/9900818)

```javascript
var [first, second, third, , fifth = 5] = [1, 2];
first // 1
second // 2
third // undefined
fifth // 5

[second, first] = [first, second] // swap values
first // 2
second // 1
```

```javascript
var customer = {
  name: 'John',
  surname: 'Doe',
  dateOfBirth: {
    year: 1988
  }
};

var {name, surname, dateOfBirth: {year}, children} = customer;
name // 'John'
surname // 'Doe'
year // 1988
children // undefined
```


## ✍️ ES6 Katas: Destructuring Assignment

Do the following katas to assure the understanding of Destructuring Assignment
- [array](http://tddbin.com/#?kata=es6/language/destructuring/array)
- [string](http://tddbin.com/#?kata=es6/language/destructuring/string)
- [object](http://tddbin.com/#?kata=es6/language/destructuring/object)
- [defaults](http://tddbin.com/#?kata=es6/language/destructuring/defaults)
- [parameters](http://tddbin.com/#?kata=es6/language/destructuring/parameters)
- [assign](http://tddbin.com/#?kata=es6/language/destructuring/rename)