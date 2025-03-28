function arrayJoin(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      result.push(arr[i][j]);
    }
  }
  return result.sort((a, b) => a - b);
}
                    
console.log(arrayJoin([ [1, 5, 3], [6, 19, 11], [47, 128, 5], [1, 93, 57, 42, 103] ])) // Output: 1 1 3 5 5 6 11 19 42 47 57 93 103 128
console.log(arrayJoin(([ [1, 3], [4, 8], [7, 5], [2, 6] ]))) // Output: 1 2 3 4 5 6 7 8)                       
console.log(arrayJoin(([[],[],[],[]]))) // Output: []                       
console.log(arrayJoin(([ [100, 50], [60, 100], [20, 100, 70], [10, 40, 80, 90] ]))) // Output: 10, 20, 40, 50, 60, 70, 80, 90, 100, 100, 100                    