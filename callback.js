console.log('Callback')
setTimeout(()=>{
    console.log('1000')
},1000)

// callback function is a function which is passed inside another function with an intention to call it later
//ex: in set timeout the function is passed as an argument will will execute after 2 sec
// another example

var names = ['ankita','mahesh','Jerry']
var shortnames = names.filter((name)=>{
    if(name.length <= 5) return name
})
console.log(shortnames)

//A callback is a function passed as an argument to another function.
// 1. How to Use a callback fction
    function callbackSum (sum){
        return 'Sum is: '+sum;
    }

    function Sum(a,b,cb){
        let sum = a+b;
        let result = cb(sum);
        console.log(result)
    }

    Sum(1,2,callbackSum)

    //Functions running in parallel with other functions are called asynchronous
