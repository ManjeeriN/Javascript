console.log('ES6 Arrow Functions');
// normal function
function a(){
    console.group('normal function')
}

// arrow function

const b = () => {
    console.log('Arrow function with  no arguments')
}
// arrow function with argument
var name = "Jane";
const c = (name) =>{
    console.log('Argument:'+name);
}
// short hand syntax
const d = (name,age) => console.log(name,age)
const e = name => console.log(name)
d(name,30)
e('abc')
b()
a()