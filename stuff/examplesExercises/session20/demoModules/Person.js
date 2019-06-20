const sayBye = city => `Bye Bye from ${city}!!`
const sum = (a,b) => a + b 

class Person {
    constructor(name, city) {
        this.name = name
        this.city = city
    }

    sayHi() {
        return `Hi I'm ${this.name}!`
    }

    sayCurrentLocation() {
        return `Hi I'm currently in ${this.city}!`
    }
}

export {sayBye, sum}
export default Person