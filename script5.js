// 5. Write a function that takes an array of numbers as input and returns a new array that contains only the even numbers.

// Example input: filterEven([1, 2, 3, 4, 5, 6])  
// Example output: [2, 4, 6]
function filterEven(numbers) {
    const result = [];
    for (let index = 0; index < numbers.length; index++) {//to seperate number by remaider
      if (numbers[index] % 2 === 0) {
        result.push(numbers[index]);// to fill empty array
      }
    }
    return result;
  }
  
  const numbers = [1, 2, 3, 4, 5, 6];
  console.log(filterEven(numbers));
  