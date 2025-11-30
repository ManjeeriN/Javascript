// Write a function that takes an integer n and returns true if it’s even and false otherwise. 
const isEven = (n) => {
    if (!(typeof n === 'number')) return 'Enter a valid integer';
    return( n % 2 === 0) ? true : false;
}
let num = 7;
console.log(isEven(num))
