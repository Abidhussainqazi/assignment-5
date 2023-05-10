// 10. Write a function that takes an array of numbers as input and returns the index of the first number in the array that is greater than or equal to 10.

// Example input: firstGreater([1, 5, 15, 20])  
// Example output: 2
function firstGreater(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= 10) {// index of 1st number that is greater than 10
        return i;
      }
    }
    return -1;
  }
  
  const num = [1, 5, 15, 20];
  console.log(firstGreater(num)); 
  