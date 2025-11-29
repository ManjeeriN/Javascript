const decimalToBase = (num, base) => {
    if(!(typeof num === 'number'))
        return "Please enter a valid postive number";

    if(num === 0) return 0;

    if(num > 0) {
        let result = '';
        while (num > 0) {
            result = (num % base) + result;
            num = Math.floor(num / base);
        }
        return result;
    } else{
         return "Please enter a valid postive number";
    }
}

// Test the function
let decimalNumber = 79;
let octalResult = decimalToBase(decimalNumber,8);

console.log(`${decimalNumber} in decimal = ${octalResult} in octal`);
console.log(`Verification: ${parseInt(octalResult, 8)} === ${decimalNumber}`); //

 decimalNumber = 79;
 BinaryResult = decimalToBase(decimalNumber,2);

console.log(`${decimalNumber} in decimal = ${BinaryResult} in octal`);
console.log(`Verification: ${parseInt(BinaryResult, 2)} === ${decimalNumber}`); //