// 3. Write a function that takes an array of numbers as input and returns the sum of the two largest numbers in the array.

// Example input: sumLargest([1, 2, 3, 4])  
// Example output: 7
function sumLargest(numbers) { //decend ord
    numbers.sort(function (a, b) {
        return b - a;
    });
    return numbers[0] + numbers[1]; //sum of 1st two num
}
console.log(sumLargest([1, 2, 3, 4]));
