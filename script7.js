// 7. Write a function that takes a string as input and returns true if the string is a palindrome (reads the same backwards as forwards), and false otherwise.

// Example input: isPalindrome("racecar")  
// Example output: true
function isPalindrome(str) {

  const reverseStr = str.split('').reverse().join('');//reversing string
  
  return str === reverseStr;//compairing string
}

let str = 'racecar';
console.log(isPalindrome(str));


  