function unique(arr) {
    return arr.slice().reduce((newArr, cur) => {
        if (!newArr.includes(cur)) newArr.push(cur);
        return newArr;
    }, [])
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
let newStrings = unique(strings);

console.log(`Original: ${strings}`);
console.log(`Uniques: ${newStrings}`);