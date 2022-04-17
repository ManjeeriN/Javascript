console.log('constructor')
// not defined v/s undefined
var x = 100;
let y = 10;
//console.log(b) // not defined - donot execute next lines of code shows error
function a(){
    let x;
    console.log(x) // undefined
    console.log(y) // 10
}
// a()

// simple function to increment and decrement variable

function increment(){
    var count = 0;
    return function inc(){
        count++;
        console.log(count)
    }
}

// var counter1 = increment()
// var counter2 = increment()

// counter1()
// counter1()
// --------------------

// constructor function to increment and decrement variable

function Counter(){
    var count = 0;
    this.inc = function () {
        count ++;
        console.log(count);
    }
    this.dec = function(){
        count--;
        console.log(count);
    }
}

var counter1 = new Counter()
counter1.inc()
counter1.dec()

var counter2 = new Counter()
counter2.inc()
counter2.inc()
counter2.dec()

