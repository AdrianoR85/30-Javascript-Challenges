const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

function highterLetter(text) {
  let currentIndex = alphabet.indexOf(text[0])

  for (let i=1; i < text.length; i++) {
    if ( currentIndex < alphabet.indexOf(text[i]) ) {
      currentIndex = alphabet.indexOf(text[i])
    }
  }

  return alphabet[currentIndex]
}

console.log(highterLetter('Lorem ipsum dolore sec avanti')) // Expected: v
console.log(highterLetter ('Hello')) // Expected: o
console.log(highterLetter ('May the force be with you')) // Expected: y
console.log(highterLetter('Its over nine thousand')) // Expected: v
