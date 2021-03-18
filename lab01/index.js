var personName = 'John';
document.body.innerHTML = "<h1>Hello " + personName + "</h1>";
var Person = /** @class */ (function () {
    function Person(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    Person.prototype.Show = function () {
        document.body.innerHTML = "<h2>Witaj " + this.firstName + " " + this.lastName + " mam " + this.age + " lat</h2>";
    };
    return Person;
}());
var p = new Person("John", "Blake", 11);
p.Show();
