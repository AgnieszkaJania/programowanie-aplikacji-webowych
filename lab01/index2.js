var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var users = [
    { name: 'John', surname: 'Smith', age: 25, role: 'user' },
    { name: 'Adam', surname: 'Johnson', age: 35, role: 'user' },
    { name: 'Andy', surname: 'Cole', age: 18, role: 'user' },
];
var admins = [
    { name: 'Matthew', surname: 'Ryan', age: 43, role: 'admin' },
    { name: 'Adam', surname: 'Terry', age: 24, role: 'admin' },
];
function logPerson(person) {
    // TODO: dodać wypisywanie na konsoli danych osoby: "imię nazwisko, wiek, rola"
    console.log('Imie: ' + person.name + ' Nazwisko: ' + person.surname + ' Wiek: ' + person.age + ' Rola: ' + person.role);
}
function filterPersons(persons, criteria) {
    // TODO: zaimplementować funkcję, która przefiltruje tablicę persons za pomocą predykatu criteria
    var filteredPersons = persons.filter(function (x) {
        var meetsCriteria = true;
        for (var key in criteria) {
            if (x[key] != criteria[key]) {
                meetsCriteria = false;
            }
        }
        return meetsCriteria;
    });
    return filteredPersons;
}
console.log('Zadanie 1');
users.forEach(logPerson);
admins.forEach(logPerson);
console.log('Zadanie 2');
var persons = __spreadArray(__spreadArray([], users), admins);
persons.forEach(logPerson);
console.log('Zadanie 3');
var arrayByAge = persons.filter(function (person) { return person.age > 25; });
arrayByAge.forEach(logPerson);
console.log('Zadanie 4');
var filtered = filterPersons(persons, { name: 'Adam' });
filtered.forEach(logPerson);
for (var i = 0; i < 10; i++) {
    console.log(i);
}
var arr = ['aga', 'kasia', 'tomek'];
console.log(arr);
// TODO:
// 1. Przy pomocy funkcji logPerson wypisać osoby z tablicy users i admins (patrz foreach)
// 2. Złączyć tablice users i admins i wypisać zawartość złączonej tablicy na konsoli (patrz operator spread)
// 3. Wypisać osoby powyżej 25 lat (patrz operator filter)
// 4. Wypisać osoby o imieniu Adam (zaimplementować funkcję filterPersons) -> const filtered = filterPersons(persons, { name: 'Adam' });
