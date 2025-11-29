const isPrime = (num) => {
    if (!(typeof num === 'number'))
            return `please enter a number`;
    if (num <= 1 ) return 'Not prime';
    if(num <= 3) return 'prime';

    if( num % 2 === 0 || num % 3 === 0) return false;

    // check if num is divisible by 5 or sqrt of num
    // 6k+1/6k-1 algorithm
    for ( let i = 5; i * i <= num; i += 6 ) {
        if(num % i === 0 || num % (i +  2) === 0) { // 5,7
            return 'Not Prime';
        }
    }
    return 'Prime';
}

console.log(isPrime(49)); // Not Prime
console.log(isPrime(43)); // Prime
console.log(isPrime(3)); // Prime
console.log(isPrime(2)); // Prime
console.log(isPrime(1)); //Not Prime
console.log(isPrime(0)); // Not Prime
console.log(isPrime(-1)); //Not Prime

