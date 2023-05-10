// 9. Write a function that takes an array of strings as input and returns a new array that contains the length of each string in the original array.

// Example input: stringLengths(["hi", "hello", "hey", "howdy"])  
// Example output: [2, 5, 3, 5]
function strLengths(ar) {
    const result = [];
    for (let i = 0; i < ar.length; i++) {// for loop for i lengths
        result.push(ar[i].length);// fill the empty array with i lengths.
    }
    return result;
}

const input = ["hi", "hello", "hey", "howdy"];
console.log(strLengths(input));
