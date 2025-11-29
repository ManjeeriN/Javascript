const decimalToBinary = (num) => {
    try {
        if (!(typeof num === 'number'))
            return `please enter a number`

        if (num < 0 )
            return "Enter a positive number";

        if (num === 0 ) return 0;
        
        let binary = '';
        while (num > 0) {
            binary = (num % 2) + binary;
            num = Math.floor(num / 2);
        }

        return binary;
    } catch (err) {
        console.error('Please enter a valid positive number')
    }
}

 console.log(decimalToBinary(55));
 console.log(decimalToBinary(-55));
 console.log(decimalToBinary('55'));
 console.log(decimalToBinary(0));
