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

export default Person