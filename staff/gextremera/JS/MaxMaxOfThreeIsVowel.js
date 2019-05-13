/** 
 * {max() función
 * Defina una función max () que toma dos números como argumentos y devuelve el mayor de ellos. 
 * Use la construcción if-then-else disponible en Javascript.} 
 */
 function max (a , b){
     if (a > b) {
         console.log(a);
         return a;
     }else{
         console.log(b);
         return b;
     }
 }

 /**
  * 
  * {maxOfThree() función
  * Defina una función maxOfThree () que toma tres números como argumentos y devuelve el mayor de ellos.} vowel 
  */

  function maxOfThree(a, b, c){
      if( a > b && a > c){
          return a;
      } else if (b > a && b > c){
          return b;
      } else {
          return c;
      }
  }



  /**
   * 
   * isVowel() función
   * Escriba una función que tome un carácter (es decir, una cadena de longitud 1) y 
   * devuelva verdadero si es una vocal, de lo contrario, falso.
   */
   function isVowel(w){
       var vowel = w;
       switch(vowel){
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            return true;
            break;
        default:
            return false;
            break;
       }
   }
/**
 * 
 * Solución JuanMa
 */
function isVowel(vowel){
    return ['a', 'e','i', 'o', 'u'].includes(vowel);
}



/**
 * Hexadecimal
 * Escribe una función que convierte un color hexadecimal, "azul" por ejemplo "# 0000FF" en su representación RGB rgb (0,0,255) ". 
 * Asigne a la función el nombre getRGB () y pruébela con este código
 */

 function getRGB(a){
    var hexadecimal = a;
    var rgbPrev = hexadecimal.split('#');
    var rgb = rgbPrev[1].split('FF');
    if(rgb[0] === 'FF'){
        rgb = "rgb(255,0,0)"
        return rgb;
    } else if(rgb[1] === 'FF'){
        rgb = "rgb(0,255,0)"
        return rgb;
    }else{
        rgb = "rgb(0,0,255)"
        return rgb;
    }
 }
//Me he quedado enganchado aqui.... no se como seguir.. siempre me devuelve el else.....