# Sesion 18 -  Destructuring and Rest & Spread Operators (11-06-2019) 

{% video %}https://vimeo.com/341584424{% endvideo %}

## [Rest operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)

- Bind trailing parameters to an array using `...`
- Replaces the need for @@arguments@@

```javascript
function multiply(multiplier, ...numbers) {
  return numbers.map(n => multiplier * n);
}

var arr = multiply(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]
```

### ✍️ ES6 Katas: Rest operator

Do the following katas to assure the understanding of Rest operator
- [as parameter](http://tddbin.com/#?kata=es6/language/rest/as-parameter)
- [with destructuring](http://tddbin.com/#?kata=es6/language/rest/with-destructuring)

## [Spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator)

- For **function calls**: allows an expression to be expanded in places where multiple arguments are expected
- For **array litterals**: allows an expression to be expanded in places where multiple elements are expected

```javascript
function f(x, y, z) {
  return x + y + z;
}

var arr = [1, 2, 3];
f(...arr) === 6; // true

[0, ...arr, 4, 5, 6, 7]; // [0, 1, 2, 3, 4, 5, 6, 7]
```
### ✍️ ES6 Katas: Spread operator

Do the following katas to assure the understanding of Spread operator
- [with arays](http://tddbin.com/#?kata=es6/language/spread/with-arrays)
- [with strings](http://tddbin.com/#?kata=es6/language/spread/with-strings)

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

### ✍️ ES6 Katas: Destructuring Assignment

Do the following katas to assure the understanding of Destructuring Assignment
- [array](http://tddbin.com/#?kata=es6/language/destructuring/array)
- [string](http://tddbin.com/#?kata=es6/language/destructuring/string)
- [object](http://tddbin.com/#?kata=es6/language/destructuring/object)
- [defaults](http://tddbin.com/#?kata=es6/language/destructuring/defaults)
- [parameters](http://tddbin.com/#?kata=es6/language/destructuring/parameters)
- [assign](http://tddbin.com/#?kata=es6/language/destructuring/rename)