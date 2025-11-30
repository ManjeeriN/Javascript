const reverseStr = (str) => {
    if(str === '') return '';
    let reversed = '';
    for (let i = str.length-1; i >= 0; i--) {
        reversed += str[i];
    }
    return `Rverese of ${str} is ${reversed}`;
}

console.log(reverseStr('Manjeeri'))