// Create a class Person with the following properties and methods:
// Properties:
// name (string)
// age (number)
// Methods:
// introduce(): Logs Hi, my name is [name] and I am [age] years old.
// Create a class Student that extends Person and adds a course property. Add a method study() that logs [name] is studying [course].
// Add a static method greet() in the Person class that logs Hello! This is a general greeting.
// Create a promise that resolves after 2 seconds with the message Promise resolved!.
// Create a promise that rejects with an error message Something went wrong. and handle the error using catch.
// Create a function doubleAfter2Seconds that doubles a number after 2 seconds. Chain the calls to double 5 three times.

const person = {
  name: 'Leila',
  age: 25
}

function introducePerson (person) {
  if (person && typeof person.name === 'string' && typeof person.age === 'number'){
    return `Hi, my name is ${person.name} and I am ${person.age} years old`
  } else {
    return 'Person data not found'
  }
}

console.log(introducePerson(person))
