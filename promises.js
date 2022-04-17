console.log('Promises')
// defination of promise
let myPromise = new Promise(function (resolve,reject) {
    resolve('Resolved');
})

// myPromise.then(res =>console.log(res)).catch(error => console.log(error));

// return a Promise

function sum(a,b){
    return new Promise((resolve,reject)=>{
        if(a>b){
            resolve(a+b)
        }else{
            reject('A cannot be less than B')
        }
    })
}
// call promise
// sum(10,20).
// then(res=>console.log(res)).
// catch(err => console.log(err))

// Promise chaining

sum(30,20)
.then(res=> {return sum(res,40)})
.then(res2=> {return sum(res2,40)})
.then(res3=>console.log(res3))
.catch(err=> console.log(err))

// to overcome this async await