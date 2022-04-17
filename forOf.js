console.log('ES6 for loop')
// looping a array
const names = ['Jane','Jack','Jill']

//console all names
// name - id the value of each key
let allnames = '';
for(n of names){
    console.log(n)
    allnames += (n+' ')
}
console.log(allnames)

// looping a string

var str = "Javascript";
for(letter of str){
    console.log(letter)
}