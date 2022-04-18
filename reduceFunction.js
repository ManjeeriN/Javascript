console.log('Reduce Function')

var arr = [1,2,3]

// finf sum of array
// accumulator , current
const resultArr = arr.reduce((sum,current)=>{
    return sum+current
},0); // default value of sum

console.log(resultArr)