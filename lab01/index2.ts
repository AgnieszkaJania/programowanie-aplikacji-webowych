interface Person {
    // TODO: dodać pola: imię (string), nazwisko (string), wiek (number) oraz rola (string)
        name:string;
        surname: string;
        age: number;
        role: string;
    }
    
    const users: Person[] = [
        { name: 'John', surname: 'Smith', age: 25, role: 'user'},
        { name: 'Adam', surname: 'Johnson', age: 35, role: 'user'},
        { name: 'Andy', surname: 'Cole', age: 18, role: 'user'},
    ]
    
    const admins: Person[] = [
        { name: 'Matthew', surname: 'Ryan', age: 43, role: 'admin'},
        { name: 'Adam', surname: 'Terry', age: 24, role: 'admin'},
    ]
    
    function logPerson(person: Person) {
    // TODO: dodać wypisywanie na konsoli danych osoby: "imię nazwisko, wiek, rola"
        console.log('Imie: ' + person.name + ' Nazwisko: ' + person.surname + ' Wiek: ' + person.age + ' Rola: ' + person.role);
        
    }
    
    function filterPersons(persons: Person[], criteria: any): Person[] {
    // TODO: zaimplementować funkcję, która przefiltruje tablicę persons za pomocą predykatu criteria
        const filteredPersons = persons.filter(x => {
            let meetsCriteria: boolean = true;
            for(const key in criteria){
                if(x[key] != criteria[key]){
                    meetsCriteria = false;
                }
            }
            return meetsCriteria;
        })
        return filteredPersons;
    }
    console.log('Zadanie 1');
    users.forEach(logPerson);
    admins.forEach(logPerson);

    console.log('Zadanie 2');
    const persons: Person[] = [...users, ...admins];
    persons.forEach(logPerson);

    console.log('Zadanie 3');
    const arrayByAge: Person[] = persons.filter(person => person.age > 25);
    arrayByAge.forEach(logPerson);

    console.log('Zadanie 4');
    const filtered = filterPersons(persons, {name: 'Adam'});
    filtered.forEach(logPerson);
    
    // TODO:
    // 1. Przy pomocy funkcji logPerson wypisać osoby z tablicy users i admins (patrz foreach)
    // 2. Złączyć tablice users i admins i wypisać zawartość złączonej tablicy na konsoli (patrz operator spread)
    // 3. Wypisać osoby powyżej 25 lat (patrz operator filter)
    // 4. Wypisać osoby o imieniu Adam (zaimplementować funkcję filterPersons) -> const filtered = filterPersons(persons, { name: 'Adam' });
     