console.log('Async Await');

// create a promise to return - sum of 2 numbers

function sum(a,b){
     return new Promise((resolve,reject)=>{
        if(a>b){
            resolve(a+b)
        }else{
           return reject('Error')
        }
    })
}

async function calculateSum(){
    let sum1 = await sum(20,10);
    let sum2 = await sum(sum1,10);
    let sum3 = await sum(sum2,10);
    console.log(sum3)
}
calculateSum()