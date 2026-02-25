let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ pete, john, mary ];

sortByAge(arr);

// now: [john, mary, pete]
alert(arr[0].name); // John
alert(arr[1].name); // Mary
alert(arr[2].name); // Pete

alert( getAverageAge(arr) ); // 28

function sortByAge(arr) {
    arr.sort((a, b) => a.age - b.age);
}

function getAverageAge(arr) {
    const sum = arr.reduce((acc, cur) => acc += cur.age, 0)
    return sum / arr.length;
}