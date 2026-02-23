function filterRange(arr, min, max)
{
    return arr.filter((num) => num >= min && num <= max);
}

console.log(filterRange([5, 3, 8, 1], 1, 4));