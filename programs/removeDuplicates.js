const removeDuplicates = (str) => {
    if(str === '') return '';
    let result = '';
    if (str.indexOf(' ') > -1) {
        const arr = str.split(' ');
        result = [...new Set(arr)].join(' ');
    } else {
        const arr = str.split('');
        result =  [...new Set(arr)].join('');
    }
    return result
}

console.log(removeDuplicates(''))
console.log(removeDuplicates('Javascript is fun and Javascript is powerful'))
console.log(removeDuplicates('programming'))