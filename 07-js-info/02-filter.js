function filterRange(arr, min, max)
{
    return arr.filter((num) => num >= min && num <= max);
}

function filterRangeInPlace(arr, min, max)
{
    for (let i = arr.length; i > 0; i--)
    {
        const next = arr.pop();
        if (next >= min && next <= max) arr.unshift(next);   
    }
}

console.log(filterRange([5, 3, 8, 1], 1, 4));
let a = [5, 3, 8, 1];
filterRangeInPlace(a, 1, 4)
console.log(a);