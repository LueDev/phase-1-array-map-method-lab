const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  let newTitleCasedTutorials = []
  let titleCasing = tutorials.map((element) => {
      let titledCasedElement = [] //holds the element which will be titlecased
      let splitty = element.split(" ") // split the element into words. 
      splitty.map((word) => { //for each word, split into letters
        let splitWord = word.split("") //splitting into letters
        splitWord.splice(0, 1, splitWord[0].toUpperCase()) //destructively replace first element to uppercase, including symbols.
        let assembledWord = splitWord.join("") //join the letters to reform the titlecased word
        titledCasedElement.push(assembledWord) //the temp array housing each word upon each iteration
      })
      newTitleCasedTutorials.push(titledCasedElement.join(" ")) //the array containing all elements titlecased
  })
  return newTitleCasedTutorials 
}

console.log(titleCased())