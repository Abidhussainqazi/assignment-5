//1. Write a function that takes two parameters, an array of numbers and a target number. The function should return a pair of numbers from the array that adds up to the target number. If no such pair is found, the function should return null.

// Example input: findPair([1, 2, 3, 4], 5)  
// Example output: [1, 4]
function findPair(arr, aim) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === aim) {
          return [arr[i], arr[j]];
        }
      }
    }
  
    return null;
  }
console.log(findPair([1,2,3,4,5],5));  