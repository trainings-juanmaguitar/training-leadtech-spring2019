// 1. What’s the result of executing this code and why.
function test() {
    console.log(a);
    console.log(foo());
    
    var a = 1;
    function foo() {
       return 2;
    }
 }
/**
 * Si ejecutamos test() el resultado será undefined y 2, porque
 * estamos decarando la variable despues de hacer el console.log 
 * y por eso da undefined, en el caso de foo() ya nos está diciendo
 * que la función nos tiene que hacer un return de 2. Es consecuencia
 * del LexicalScope
 */ 

// 2.What is result?
var a = 1; 
function someFunction(number) {
  function otherFunction(input) {
    return a;
  }
  
  a = 5;
  
  return otherFunction;
}

var firstResult = someFunction(9);
var result = firstResult(2);

/** Si lanzamos la función someFunction() en la consola este realiza
 * una segunda función que nos dará un return de a=1 poque es el valor
 * que se le da a al inicio del código.
 * Una vez lanza otherFunction vuelve a cambiar el valor de a a 5 y
 * crea un return de la función otherfunction.
 * cuando ejecutamos result, la primera función ha modificado el 
 * valor de a y nos devolverá 5 que es el valor que tiene en el primer
 * ámbito.
 * Los valores que le damos entre parentesis a las funciones no los 
 * utilizamos para nada.
 */

 //3. What is the result of the following code? Explain your answer.
 var fullname = 'John Doe';
 var obj = {
    fullname: 'Colin Ihrig',
    prop: {
       fullname: 'Aurelio De Rosa',
       getFullname: function() {
          return this.fullname;
       }
    }
 };
 
 console.log(obj.prop.getFullname());
 
 var test = obj.prop.getFullname;
 
 console.log(test());

 /**
  * El resultado que nos va a devolver la consola en primer lugar
  * será Aurelio De Rosa porque aplicamos console.log(obj.prop.getFullname());
  * y como tenemos un this.fullname nos devuelve Aurelio porque es el
  * valor que le hemos dado a fullname dentro del objeto mediante la función.
  * En el caso del console.log(test()); segun la consola nos dará John Doe
  * porque no estamos llamando a la función getFullname() y nos devuelve
  * el valor inicial que le hemos dado al inicializar la variable.
  */

//4. What will you see in the console for the following example?

var a = 1; 
function b() { 
   function a() {} // = var a= function () {} 
   a = 10; 
   return; 
} 
b(); 
console.log(a);

/**
 * Según la consola nos devolverá 1 pero no entiendo porqué. Si en
 * la función b() damos un nuevo valor de 10 a a y además tenemos una
 * función a() que no hace nada.
 */

