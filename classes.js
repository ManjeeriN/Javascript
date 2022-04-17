console.log('Javascript Objects')

//JavaScript Classes are templates for JavaScript Objects.
//Use the keyword class to create a class.
//Always add a method named constructor()

class Person {
    constructor(name,age){
        this.name = name
        this.age = age
    }
}

const Jane = new Person('Jane',30)
const Jill = new Person('Jill',25)

console.log(Jane,Jill) // Person {name: 'Jane', age: 30} Person {name: 'Jill', age: 25}