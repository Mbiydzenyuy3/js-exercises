// Initialization of Variables
// an Array of denominations, result and initialise i=0
// loop through tha Array containing the notes
// divide each element by the amount
// take the remender and keep looping till amount = 0
// return result
// print

// funtion def
function calculateBanknotesWhile (amount) {
  // initialisation of variables
  const denominations = [10000, 5000, 2000, 1000, 500, 100]
  const result = {}
  let i = 0
  // while 23700 > 0 and i < legth of array loop
  while (amount > 0 && i < denominations.length) {
    const denom = denominations[i]
    if (amount >= denom) {
      const count = Math.floor (amount / denom) // divides
      result[denom] = count
      amount %= denom // get the remainder
    }
    i++ // keep looping
  }
  return result
}
// function call
const amount = 23700
const output = calculateBanknotesWhile(amount)
console.log(output)

// Write a function that takes a sentence as input and returns the longest word in the sentence
// If there are multiple words of the same length, return the first one

// create a function
// split the sentence in to individual words
// initialize a variable to keep track of the longest word and its length
// iterate through each word in the list of words
// update longestWord to the current longest word
// return the longest word found
// console.log findLongestWord()

const findLongestWord = (sentence) => {
  const words = sentence.split('')
  let longestWord = ''

  for (let i = 0; i < words.length; i++) { 
    if (words[i].length > longestWord.length) {
      longestWord = words[i]
    }
  }

  return longestWord  
}
const sentence = findLongestWord('The quick brown fox jumps over the lazy dog')
console.log(sentence)


// Bank Transaction Tracker
// Write a function that takes an initial balance and a list of transactions 
// (both deposits and withdrawals) and calculates the final balance
// Transactions are represented as integers: positive for deposits and negative for withdrawals
// pseudo code
// create a function calculateFinalBalance with two para initialBalance and transactions
// init variables
// use a for loop that goes through all transactions and adds or substract based on the transaction
// update the finalBalnce without redeclaring it
// RETURN finaBalance
// consolelog function

function calculateFinalBalance (initialBalance, transactions){
  let finalBalance = initialBalance
  for (let i = 0; i < transactions.length; i++) {
    finalBalance += transactions[i]
  }
  return finalBalance
}

console.log (calculateFinalBalance( 10000, [3000, -2000, -1500, 5000]))
