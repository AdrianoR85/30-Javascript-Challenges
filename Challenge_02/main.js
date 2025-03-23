function recusiveFunction(n) {
  if (n === 0) return 'empty';

  return n===1 ? 'chunks' : recusiveFunction(n-1) + ' chunks';

}

console.log(recusiveFunction(5))
console.log(recusiveFunction(1))
console.log(recusiveFunction(8))
console.log(recusiveFunction(2))
console.log(recusiveFunction(0))

