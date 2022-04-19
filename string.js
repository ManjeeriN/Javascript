console.log('String')

const str1 = "Jane";
console.log(str1.length) // 4

// string defined as object

let str2 = new String('Amber');
console.log(str2)

//slice() extracts a part of a string and returns the extracted part in a new string.

let str3 = "Apple Oranges";
let sliced = str3.slice(3,8);
console.log(sliced) // le Or
// start,length
console.log(str3.substring(3,6))
console.log(str3.substring(3)) // le Oranges
console.log(str3.substr(-3)) // ges

// replace
console.log( str3.replace('Apple','Banana') ) // Banana Oranges

// replace with quotes
let text = "Please visit Microsoft!";
let newText = text.replace(/MICROSOFT/i, "W3Schools"); // no quotes in first argument
console.log(newText)

// replace all occurunces
let str4 = "for is for abc"
let strRes = str4.replace(/for/g,'xyz') // no quotes in first argument
//console.log(strRes)
// UPPER CASE
//console.log(strRes.toUpperCase())
// lowercase
//console.log(strRes.toUpperCase().toLowerCase())

// trim
let str5 = " hello There!   ";
//console.log(str5)
//console.log(str5.trim())

// PAd start replace part of string with other string
let text2 = "5";
let padResult  = text2.padStart(4,"x"); // xxx5
let padResult2  =  text2.padStart(4,"0"); //0005
let padResult3  =  text2.padEnd(4,"0"); //5000
console.log(padResult,padResult2,padResult3)

let test3 = "Hello There!";
console.log(test3.charAt(0)) // H
console.log(test3[0]) // H - ES5
console.log(test3.charCodeAt(0)) //72 - gives the character code

//string to array

console.log(test3.split(''))

// to loop through string and find ocurance of each letter in string

var letterArr = []
for (letter of test3){
    if(!letterArr[letter]){
        letterArr[letter] = 0;
    }
    letterArr[letter] ++;
}

console.log(letterArr)
console.log(test3.search("There")); // 6
console.log(test3.match(/ere/g)); // give all occurances in array
console.log(test3.match(/ain/gi)); // do a case insensitive search
test3.includes("world"); // does it include