var x = 100;
console.log(x)
{
    let y = 10;
    let y = 20; // Uncaught SyntaxError: Identifier 'y' has already been declared (at let.js:5:9)
    console.log(y)
}