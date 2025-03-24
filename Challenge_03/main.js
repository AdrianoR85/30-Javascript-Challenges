/*
  Write a function that takes an array as an argument and returns a new array containing all of the items that are in the input array in reverse order.
  The input array should remain unchanged after the function runs.
*/

function reverse_array(list) {
  let reversed = [];
  for (let i = list.length - 1; i >= 0; i--) {
    reversed.push(list[i]);
  }
  return reversed;
}

console.log(reverse_array([ 0, 9, 6, 8, 9, 1, 5, 7 ])) // out: [ 7, 5, 1, 9, 8, 6, 9, 0 ]
console.log(reverse_array( [ 'Oh', 'Hi', 'Mark' ])) // out: [ 'Mark', 'Hi', 'Oh' ]
console.log(reverse_array( [ false, true, true, true ])) // out: [ true, true, true, false ]
console.log(reverse_array( [ "It's", "not", true, 0 ])) // out: [ 0, true, 'not', "It's" ]