const numbers =[34, 45, 24, 64, 654];

// forma tradicional de asignar un valor de un array a una variable:
const number1 = numbers[0],
const number2 = numbers[1],
const number3 = numbers[2],
const number4 = numbers[3],
const number5 = numbers[4],

//deestructuración:

const [num1, num2, num3, num4, num5] = [34, 45, 24, 64, 654];

const [age1, , , , age2] = [34, 45, 24, 64, 654];

// Resultado: 
age1 = 34;
age2 = 654 

//default parameters para que por defecto tengan un valor

const arrayAges = [];
const [age1=0, age2=0, age3=0] = arrayAges



// los valores de la izquierda despues de los : cambian el nombre de la variable y los valores a la derecha despues de los : asigna un valor
var {user: x} = {user: 5};
console.log(x);
// => 5

/**
 * Rest operator asigna cualquier valor separado por comas en forma de array
 * Enlazar los parámetros finales a una matriz usando ...
 * Reemplaza la necesidad de @@ argumentos @@
 */

function multiply(multiplier, ...numbers) {
    return numbers.map(n => multiplier * n);
  }
  
  var arr = multiply(2, 1, 2, 3);
  console.log(arr); // [2, 4, 6]


/**
 * Spread operator
 */

function f(x, y, z) {
    return x + y + z;
  }
  
  var arr = [1, 2, 3];
  f(...arr) === 6; // true = f(1,2,3)
  
  [0, ...arr, 4, 5, 6, 7]; // [0, 1, 2, 3, 4, 5, 6, 7]

  /**
   * Funcion Constuctora
   */
  function Person(name, city){
      this.name = name
      this.city = city
  }
  const me = new Person("juanma", "larnaca")
  const you = new Person("paco", "madrid")
  const him = new Person("raul", "barna")

  me -> {name : "juanama", city: "larnaca"}

  //----------------
/**
 * Clases que se utilizan para crear objetos.
 */

  class Person {
      constructor(name, city){
          this.name = name
          this.city= city
      }
      sayHi(){
          return `Hi I'm ${this.name} i'm form ${this.city}`
      }
  }

var Shape = function( id, x, y ) {
  this.id = id;
  this.x = x;
  this.y = y;
};

var rectangle = new Shape("rectangle", 20, 20)
rectangle = {
    id: "rectangle",
    x: 20,
    y: 20
}

Shape.prototype.toString = function( x, y ) {
  return "Shape(" + this.id + ")"
};
var Rectangle = function( id, x, y, width, height ) {
  Shape.call( this, id, x, y );
  this.width = width, 
  this.height = height
};
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.toString = function() {
  return "Rectangle > " + Shape.prototype.toString.call( this );
};
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
  
  var rectangle = new Shape("rectangle", 20, 20)
  //-----------

  class Rectangle extends Shape {
    constructor (id, x, y, width, height) {
      super(id, x, y) // llama al constructor de la clase que está heredando que en este caso es de Shape.
    }
    toString () {
      return "Rectangle > " + super.toString()
    }
  }


  /**
   * Modulos!!!!
   */

   