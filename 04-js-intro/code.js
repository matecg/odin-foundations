console.log("Hello, World! ✌️");

let firstName = 'John';
let lastName = 'Doe';

console.log(firstName + ' ' + lastName);
console.log(23 + 97);
console.log(11 + 28 + 125 + 78 + 3 + 46);
console.log((4 + 6 + 9) / 77);

let a = 10;
console.log(a);
a = 0.5;
console.log(a);
let b = 7 * a;
console.log(b);

const max = 57;
const actual = max - 13;
const percentage = actual / max;
console.log(percentage);

console.log("" + 1 + 0); // "10"
console.log("" - 1 + 0); // -1
console.log(true + false); // "1"
console.log(6 / "3"); // 2
console.log("2" * "3"); // 6
console.log(4 + 5 + "px"); // "9px"
console.log("$" + 4 + 5); // "$45"
console.log("4" - 2); // 2
console.log("4px" - 2); // NaN
console.log("  -9  " + 5); //"    -9   5"
console.log("  -9  " - 5); // -14
console.log(null + 1); // 1
console.log(undefined + 1); // NaN
console.log(" \t \n" - 2); // -2

let z = +prompt("First number?", 1);
let x = +prompt("Second number?", 2);

alert(z + x);

function capitalize(str) {
    return `${str[0].toUpperCase()}${str.slice(1)}`;
}

console.log(capitalize("abcd"));
console.log(capitalize("ABCD"));
console.log(capitalize("aBcD"));