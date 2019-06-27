# Sesion 19 -  Classes and Modules (13-06-2019) 

{% video %}https://vimeo.com/342044757{% endvideo %}

## [Clases](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

- Basic support
- `class` and [`extends`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends) keywords
- [`constructor`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor) definition
- [`static`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static) method definitions

BEFORE

```javascript
var Shape = function( id, x, y ) {
  this.id = id;
  this.x = x;
  this.y = y;
};
Shape.prototype.toString = function( x, y ) {
  return "Shape(" + this.id + ")"
};

var Rectangle = function( id, x, y, width, height ) {
  Shape.call( this, id, x, y );
};
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.toString = function() {
  return "Rectangle > " + Shape.prototype.toString.call( this );
};
```

AFTER

```javascript
class Shape {
  constructor (id, x, y) {
    this.id = id;
    this.x = x;
    this.y = y;
    // or Object.assign(this, {id, x, y});
  }
  toString () {
    return `Shape(${this.id})`
  }
}

class Rectangle extends Shape {
  constructor (id, x, y, width, height) {
    super(id, x, y)
  }
  toString () {
    return "Rectangle > " + super.toString()
  }
}
```

- [Examples Classes](https://googlechrome.github.io/samples/classes-es6/index.html)
- [ES6 | Classes and Inheritance](https://medium.com/ecmascript-2015/es6-classes-and-inheritance-607804080906#.yly3wqbsq)  

### ✍️ ES6 Katas: Classes

Do the following katas to assure the understanding of Classes
- [creation](http://tddbin.com/#?kata=es6/language/class/creation)
- [accessors](http://tddbin.com/#?kata=es6/language/class/accessors)
- [static](http://tddbin.com/#?kata=es6/language/class/static)
- [extends](http://tddbin.com/#?kata=es6/language/class/extends)
- [more extends](http://tddbin.com/#?kata=es6/language/class/more-extends)
- [super in method](http://tddbin.com/#?kata=es6/language/class/super-in-method)
- [super in constructor](http://tddbin.com/#?kata=es6/language/class/super-in-constructor)

## [Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/)

- Native modules, alternative to [CommonJS](http://www.commonjs.org/) and [AMD](http://requirejs.org/docs/whyamd.html)
- Modules can export multiple values (unlike the others)
- Statically analyzed to load dependencies
- Dependencies are loaded asynchronously, but can be optimized with a module bundler ([rollup](http://rollupjs.org/) or [webpack](https://webpack.github.io/))

```javascript
// -------- jquery.js --------
export default function jQuery() {
  /* code */
}

// -------- code.js --------
import $ from 'jquery';
$('body').addClass('yay');

```

```javascript
// --------- http.js --------
export function get(url) {
  /* code */
}

export function post(url, body) {
  /* code */
}

// -------- code.js --------
import { get, post } from 'http';
import { TIMEOUT as HTTP_TIMEOUT } from 'http';
import * as http from 'http';

get('/my/url').then(function(result) {
  /* code */
});

HTTP_TIMEOUT; // 1000;
http.post('/my/url', 'body');
```

### ✍️ ES6 Katas: Modules

Do the following katas to assure the understanding of Modules
- [`import` statement](http://tddbin.com/#?kata=es6/language/modules/import)
