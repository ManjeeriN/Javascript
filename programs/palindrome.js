// Write a function that takes a string s and returns true if it reads the same forwards and backwards, otherwise false. 

const isPalindrome = (str) => {
    // reverse the string
    let reverse = '';
    for ( let i = str.length-1; i >= 0; i--) {
        reverse += str[i]
    }
    // compare to check if palindrome or not
    return (reverse === str) ? 'palindrome' : 'not palindrome';
}
const str = 'ABABA';

console.log(`${str} is ${isPalindrome(str)}`);
