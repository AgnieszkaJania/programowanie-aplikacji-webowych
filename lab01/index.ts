const personName = 'John';
document.body.innerHTML = `<h1>Hello ${personName}</h1>`

class Person {
    firstName: string;
    lastName: string;
    age: number;

    constructor(firstName: string, lastName: string, age: number){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;

    }

    Show() {
        document.body.innerHTML =  `<h2>Witaj ${this.firstName} ${this.lastName} mam ${this.age} lat</h2>`;
    }

}
let p = new Person("John", "Blake", 11);
p.Show();