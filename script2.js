// 2. Write a function that takes a string as input and returns the reverse of the string.

// Example input: reverseString("hello")  
// Example output: "olleh"
let a = 'hello'
function ra(str){
    return str.split('').reverse().join('');
}
console.log(ra(a));