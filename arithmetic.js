console.log('Arithmetic')
// instanceOf

function Company(name){
    this.name = name
}

const tata = new Company('TATA') 

console.log(tata instanceof Company)// true

// Generator Functions and yield

function* foo(a){
    while(a<=2){
        yield a; 
        a++;
    }
}

const iterator = foo(0)
console.log(iterator.next().value); // 0
console.log(iterator.next().value); // 1
console.log(iterator.next().value); // 2



