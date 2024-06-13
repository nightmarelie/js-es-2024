let people = [
    {name: 'Alice', age: 21, specializations: 'frontend', active: false},
    {name: 'Max', age: 20, specializations: 'backend', active: true},
    {name: 'Helen', age: 23, specializations: 'frontend', active: true},
    {name: 'John', age: 22, specializations: 'backend', active: false},
    {name: 'Andrew', age: 24, specializations: 'frontend', active: true},
    {name: 'Steve', age: 19, specializations: 'backend', active: true},
    {name: 'Kate', age: 25, specializations: 'frontend', active: false},
    {name: 'Sam', age: 26, specializations: 'backend', active: true},
    {name: 'Tom', age: 27, specializations: 'frontend', active: false},
    {name: 'Nick', age: 28, specializations: 'backend', active: true}
]

const groupedPeople = Object.groupBy(people, 'specializations');

console.log(groupedPeople);

const groupedPeopleWithDynamicKey = Object.groupBy(people, person => `Active: ${person.active}`);

console.log(groupedPeopleWithDynamicKey);

// Every iterable object has a groupBy method

console.log(people[Symbol.iterator]);
