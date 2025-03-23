/*
Escreva uma função que recebe um número qualquer de
números inteiros como argumentos e retorne a média
aritmética entre eles.
*/

function average(numbers) {
  let soma = 0
  numbers.forEach((n) => {
    soma += n 
  }) 
  return soma / numbers.length
}

console.log(average([10, 9, 6, 8, 9, 1, 5, 7]))
console.log(average([2, 5, 7, 1, -2]))
console.log(average([10, 10, 10, 10, 9]))