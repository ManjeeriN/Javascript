console.log('Functions')

// function decleration/statement
a() // A
function a(){ // global scope as function
    console.log('A');
}
// function defination
//b() // Error: b is not a function
var b = function (){ // global scope as function
    console.log('B')
}
b() // B 
// cannot call before declaring

//c() // Cannot access 'c' before initialization
const c = () =>{ // inside 'script scope'
    console.log('C')
}
//c()

//d() //Cannot access 'd' before initialization
let d = function(){ // insode 'script scope'
    console.log('D')
}
d()