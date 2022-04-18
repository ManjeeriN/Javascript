console.log('Filter Function')

const arr = [1,-5,8,6,74];
// function takes each element from array and check the condition for true or false, if it fullfills return the element
const resultArr = arr.filter( (num) => num > 0 ); // short hand syntax
console.log(resultArr);