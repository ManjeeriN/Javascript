console.log('Spread Syntax')
// spread operator
let arr1 = [1,2,3]
let arr2 = [...arr1,4,5]
// console.log(arr1,arr2)

// using spread syntax to sum

function sum(...nums){
    let sum = 0
    for (num of nums){
         sum += num;
    }
    return sum
}
let res1 = sum(arr2) // 01,2,3,4,5
let res = sum(...arr2) // 15
console.log(res)