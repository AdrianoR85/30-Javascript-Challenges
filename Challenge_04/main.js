/*
Write a function that receives any integer, squares each of its digits, and then concatenates the result, returning a single integer.
*/

function quatratic(number) {
  let str_number = number.toString()
  let output = ''

  for (let i=0; i < str_number.length; i++) {
    output += str_number[i]**2
  }
  return output
}

console.log(quatratic(3514)) // out: 925116
console.log(quatratic(94571)) //  out: 811625494
console.log(quatratic(24)) // out: 416
console.log(quatratic(745821698)) // out: 491641164964164 
