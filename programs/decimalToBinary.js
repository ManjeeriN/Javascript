const decimalToBinary = (num) => {
    if (!(typeof num === 'number'))
       return `please enter a number`

    if (num === 0 ) return 0;
    
    let binary = '';
    while (num > 0) {
        binary = (num % 2) + binary;
        num = Math.floor(num / 2);
    }
    
    return binary;
}

console.log(decimalToBinary(33))