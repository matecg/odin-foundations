function shuffle(arr)
{
    for (let i = 0; i < arr.length; i++)
    {
        const nextIdx = Math.floor(Math.random() * arr.length);
        const next = arr[nextIdx];
        arr[nextIdx] = arr[i];
        arr[i] = next;
    }
    // Also works:
    // arr.sort(() => Math.random() - 0.5);
}

let arr = [1,2,3];
shuffle(arr);
console.log(arr);