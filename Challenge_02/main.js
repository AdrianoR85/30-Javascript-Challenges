/* 
Write a recursive function that receives a number n and return a string with the following pattern:
- If n is 0, return 'empty'
- If n is 1, return 'chunks'
- If n is 2, return 'chunks-chunks'
Don't use any loop
*/

function recusiveFunction(n) {
  if (n === 0) return 'empty';

  return n===1 ? 'chunks' : recusiveFunction(n-1) + ' chunks';

}

console.log(recusiveFunction(5))
console.log(recusiveFunction(1))
console.log(recusiveFunction(8))
console.log(recusiveFunction(2))
console.log(recusiveFunction(0))

