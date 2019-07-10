class Student {
    constructor (name, company){
        this.name = name
        this.company = company
    }
    sayHi() {
        return `Hi I'm ${this.name} and I work at ${this.company} `
    }

}

export default Student

