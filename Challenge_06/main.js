let input = ['Lorem ipsum dolore sec avanti', 'This is an apple', 'May the force be with you', 'It s over nine thousand'];
let out = ['merol muspi erolod ces itnava', 'siht si na elppa', 'yam eht ecrof eb htiw uoy', 'ti s revo enin dnasuoht'];

let reversetext = '';

function reverseWords(text) {
    let listOfWords = text.split(' ');
    let reversedWords = listOfWords.map(word => {
      return word.split('').reverse().join('').toLowerCase();
    })
    return reversedWords.join(' ');
}

function checkOutput(input) {
    for (let i = 0; i < input.length; i++) {
      if (reverseWords(input[i]) === out[i]) {
          console.log(`Input: ${input[i]}\nOutput: ${out[i]}`);
          console.log(`Test case ${i + 1} is Passed\n`);
      }
      else {
          console.log(`Test case ${i + 1} is Failed`);
      }
  }
}



checkOutput(input);