function recursiveSearch(arr, target) {
  // type your code here
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === target) {
    return true
    } else {
      recursiveSearch(arr[i], target)
    }
  } 
  return false
  }


if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: true");
  console.log("=>", recursiveSearch([1, 2, 3], 2));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", recursiveSearch([3, 2, 1], 4));
}

module.exports = recursiveSearch;

// Please add your pseudocode to this file 
 // loop through targeted array
 // set up contitional on if array element equals target
 // if target found return true
 // otherwise call function again passing next array element and target
 // return false if loop completed and target not found
// And a written explanation of your solution
