# Sesion 16 -  Ejercicios (katas) arrow functions, let, const, template strings, object literals  (05-06-2019) 

{% video %}https://vimeo.com/340456235{% endvideo %}
{% video %}https://vimeo.com/340456285{% endvideo %}

## [Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

- Shorter syntax using `=>`
- Always anonymous
- Lexically bind `this`
- Really useful for event handlers and callbacks
- Really neat when using functional programming

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


### ✍️ ES6 Katas: Arrow Functions

Do the following katas to assure the understanding of arrow functions
- [basics](http://tddbin.com/#?kata=es6/language/arrow-functions/basics)
- [function binding](http://tddbin.com/#?kata=es6/language/arrow-functions/binding)

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

### ✍️ ES6 Katas: Block Scope

Do the following katas to assure the understanding of Block Scope
- [`let` declaration](http://tddbin.com/#?kata=es6/language/block-scoping/let)
- [`const` declaration](http://tddbin.com/#?kata=es6/language/block-scoping/const)


## [Template Strings](https://hacks.mozilla.org/2015/05/es6-in-depth-template-strings-2/)

- Enclosed by back-ticks ` `` ` 
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

### ✍️ ES6 Katas: Template Strings

Do the following katas to assure the understanding of template strings
- [basics](http://tddbin.com/#?kata=es6/language/template-strings/basics)
- [multiline](http://tddbin.com/#?kata=es6/language/template-strings/multiline)
- [tagged template strings](http://tddbin.com/#?kata=es6/language/template-strings/tagged)
- [`raw` property](http://tddbin.com/#?kata=es6/language/template-strings/raw)

## [Enhanced Object Literals](https://github.com/lukehoban/es6features#enhanced-object-literals)

- Shorthand property names
- Shorthand methods names
- Dynamic property names
- [_getter_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get) and [_setter_](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/set)
- [Examples](https://gist.github.com/juanmaguitar/fa284ba904992a4ece44e6e42ec81498)

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