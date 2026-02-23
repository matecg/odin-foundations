function sortDescending(arr) {
    arr.sort((a, b) => b - a);
}

let arr = [5, 2, 1, -10, 8];

console.log(`Before: ${arr}`);
sortDescending(arr);
console.log(`After: ${arr}`);
