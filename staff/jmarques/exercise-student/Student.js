class Student {
    constructor(name, company) {
        this.name = name;
        this.company = company;
    }
    sayHi() {
        return `Hi I'm ${this.name} I Work at ${this.company}`;
    }
}
export default Student
