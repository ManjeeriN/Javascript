// iterative method
const factorial = (num) => {
    if(num < 0) return 'Enter a non-negative number';
    if(num === 1) return 1;

    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact *= i;
    }
    return fact;
}
console.log(factorial(5));

// recursive method

const rFactorial = (num) => {
    if(num < 0) return 'Enter a non-negative number';
    if(num === 1) return 1;
    return num * rFactorial(num-1);
}
console.log(rFactorial(5));
