
let a = 2;
let b = 3;
console.log("Before:", a, b);
let temp = a;
a = b;
b = temp;
console.log("After:", a, b);


// Another method
[a, b] = [b, a];
console.log("Swapped again:", a, b);