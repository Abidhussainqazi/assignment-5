// 4. Write a function that takes an array of strings as input and returns a new array that contains only the strings that have more than three characters.

// Example input: filterStrings(["hi", "hello", "hey", "howdy"])  
// Example output: ["hello", "howdy"]
function filterStrings(ar) {
    let filteredStrings = [];
    for (let i = 0; i < ar.length; i++) { // to seperate the words with more then 3 chars
      if (ar[i].length > 3) {
        filteredStrings.push(ar[i]); //to fill the empty array with seperated words
      }
    }
    return filteredStrings;
  }
  
  let ar = ["hi", "hello", "hey", "howdy"];
  console.log(filterStrings(ar));
  