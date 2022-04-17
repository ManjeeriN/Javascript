console.log('Symbol')

// A JavaScript Symbol is a primitive datatype just like Number, String, or Boolean.

// It represents a unique "hidden" identifier that no other code can accidentally access.

// For instance, if different coders want to add a person.id property to a person object belonging to a third-party code, they could mix each others values.

// Using Symbol() to create a unique identifiers, solves this problem:

const Person = {
    name : 'Jane',
    age : 30
}
Person['Place'] = 'India';

let id = Symbol('id');
Person [id] = 1
console.log(Person.name,Person[id],Person.id) // Jane 1 undefined