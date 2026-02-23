function sortDescending(arr) {
    arr.sort((a, b) => b - a);
}

function copySorted(arr)
{
    // Or: return arr.slice().sort();
    return Array.from(arr).sort();
}

let arr = [5, 2, 1, -10, 8];

console.log(`Before: ${arr}`);
sortDescending(arr);
console.log(`After: ${arr}`);

let new_arr = ["HTML", "JavaScript", "CSS"];
console.log(`Before: ${new_arr}`);
console.log(`After: ${new_arr} (original) ${copySorted(new_arr)} (sorted)`)
