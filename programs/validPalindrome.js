// 125. Valid Palindrome - a phrase id palindrome, if after removing all non -alphanumeric characters and uppercase to lowercase chars, it reads same both ways.

const isPalindrome = (str) => {
    let alphanumericString = str.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
    let reverseStr = '';
    for( let i = alphanumericString.length -1; i >= 0; i--) {
        reverseStr += alphanumericString[i]
    }
    return (alphanumericString === reverseStr);
}
const str = 'A man, a plan, a canal: Panama'; // true
console.log(isPalindrome(str)) 

const str2 = 'race a car'; // false
console.log(isPalindrome(str2)) 

const str3 = ""; // true
console.log(isPalindrome(str3))
