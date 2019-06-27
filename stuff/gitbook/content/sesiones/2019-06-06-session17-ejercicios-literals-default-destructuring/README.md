# Sesion 17 -  Ejercicios (katas) enhanced object literals, default parameters, destructuring assignment  (06-06-2019) 

{% video %}https://vimeo.com/340678800{% endvideo %}

{% video %}https://vimeo.com/340678863{% endvideo %}

{% video %}https://vimeo.com/340678953{% endvideo %}

## Enhanced Object Literals

```javascript
var a = "foo",
    b = 42,
    c = {};

function myMethod() {
    console.log('ooOoh!');
}

// Shorthand property names
var o = { a, b, c };

// Shorthand method name and dynamic property name
var o2 = {
  myMethod,
  ['myPropertyNum'+b]: 'bar'
}
```

```javascript
var messages = {
  get latest () {
    if (this.log.length == 0) return undefined;
    return this.log[this.log.length - 1]
  },
  set current (str) {
    this.log[this.log.length] = str;
  },
  log: []
}

messages.current = "hey!";
messages.latest // hey!
```

### ✍️ ES6 Katas: Enhanced Object Literals

Do the following katas to assure the understanding of Enhanced Object Literals
- [basics](http://tddbin.com/#?kata=es6/language/object-literal/basics)
- [computed properties](http://tddbin.com/#?kata=es6/language/object-literal/computed-properties)
- [getter](http://tddbin.com/#?kata=es6/language/object-literal/getter)
- [setter](http://tddbin.com/#?kata=es6/language/object-literal/setter)

## [Default parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)

```javascript
function f(x, y=12) {
  // y is 12 if not passed (or passed as undefined)
  return x + y;
}

f(3) === 15;
f(3, undefined) === 15;
```

### ✍️ ES6 Katas: Default parameters

Do the following katas to assure the understanding of Default parameters
- [basic](http://tddbin.com/#?kata=es6/language/default-parameters/basics)


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