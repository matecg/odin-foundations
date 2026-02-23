function camelize(str) {
    const words = str.split('-');
    /**
     * OPTION 01:
    */
    // let output = "";
    // for (let i = 0; i < words.length; i++)
    // {
    //     if (!words[i]) continue;
    //     if (i === 0) output += words[i].toLowerCase();
    //     else {
    //         output += (words[i][0].toUpperCase() + words[i].slice(1));
    //     }
    // }
    // return output;  

    // OPTION 02:
    // return words.reduce((output, cur) => {
    //     if (!output) output += cur.toLowerCase();
    //     else {
    //         output += cur[0].toUpperCase() + cur.slice(1);
    //     }
    //     return output;
    // }, "");

    // OPTION 03:
    return words
        .map(
            (word, idx) => idx == 0 ? word : word[0].toUpperCase() + word.slice(1))
        .join('');
}

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));
console.log(camelize("Webkit-transition"));