/*
Reto para esta tarde...

Hacer este ejercicio → _Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab")._

Empleando esta definición → `const charFreq = text => text.split('')...`
Es decir `charFreq` devuelve directamente una concatenación de operaciones aplicadas sobre el array de caracteres que resultan en un objeto que contiene la frecuencia de los caracteres en el texto
Pista → hay que utilizar `reduce`
*/

/*
const charFreQU = text => text.split('')
                            .reduce((freq, valorActual) => {
                                    if (freq[valorActual]) freq[valorActual] += 1;
                                    else freq[valorActual] = 1;
                                    return freq;
                              }, {})

*/
var text = `hola hola adiós texto de prueba de` 

const charFreC = text => 
        text
                .split(' ')
                .reduce((freq, valorActual) => {
                        var cleanWord = valorActual;
                        cleanWord = cleanWord.replace(".","");
                        cleanWord = cleanWord.replace(",","");
                        cleanWord = cleanWord.replace("?","");
                        cleanWord = cleanWord.replace(" ","");
                        if (freq[cleanWord]) freq[cleanWord] += 1;
                        else freq[cleanWord] = 1;
                        return freq;
                        }, {})

//Solución Marta
const oObjectResult = wordFreq(text)

var result = Object.keys(oObjectResult).map(key => [key, oObjectResult[key]])
        .sort((a,b) => {
                if (a[1]==b[1]) return 0
                else return (a[1] > b[1] ? -1 : 1)
                }
        ).splice(0,10)
        .map(key => key[0])



//clase 27 Mayo

var csv = `
name,surname,age
juan,lopez,34
paco,martinez,23
maria,perez,35
`
csv
        .split('\n')
        .filter(row => (Boolean)(row))
        .slice(1)
        .map( element => element.split(',') )
        .filter(elem => parseInt(elem[2],10) < 30)

