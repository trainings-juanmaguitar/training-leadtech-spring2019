import Person from './Person.js'
import Student from './Student.js'
import { sum, multiply } from './utils.js'

const me = new Person("juanma", "larnaca")

console.log(me)
console.log (me.sayHi())
console.log (me.sayCurrentLocation())

const resultSum = sum(3,4)
const resultMult = multiply(3,4)

console.log(resultSum)
console.log(resultMult)


const pepe = new Student("pepe", "leadtech")
console.log (pepe.sayHi())
