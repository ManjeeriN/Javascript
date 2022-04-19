console.log('Delete Operator')

let a = {
    name :'Jane',
    age: 20,
    country : 'India'
}
//delete a.name; // 1st way - 
//console.log(a) //{age: 20, country: 'India'}

//delete a['age']; // 2nd way - 
//console.log(a) // {country: 'India'}


let b = a

delete b.name // deletes from both a and b
console.log(a,b)

let c = {...a}
delete c.age // delete from c not a 
console.log(a,c)