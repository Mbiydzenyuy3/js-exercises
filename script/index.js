function calculateBanknotesWhile (amount) {
  const denominations = [10000, 5000, 2000, 1000, 500, 100]
  const result = {}
  let i = 0
  while (amount > 0 && i < denominations.length) {
    const denom = denominations[i]
    if (amount >= denom) {
      const count = Math.floor (amount / denom);
      result[denom] = count
      amount %= denom
    }
    i++
  }
  return result
}

const amount = 23700
const output = calculateBanknotesWhile (amount)
console.log (output)

const findLongestWord = (sentence) => {
  const words = sentence.split ('')
  let longestWord = ''

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i]
    }
  }

  return longestWord
}
const sentence = findLongestWord ('The quick brown fox jumps over the lazy dog')
console.log(sentence)

function calculateFinalBalance (initialBalance, transactions) {
  let finalBalance = initialBalance
  for (let i = 0; i < transactions.length; i++) {
    finalBalance += transactions[i]
  }
  return finalBalance
}

console.log(calculateFinalBalance(10000, [3000, -2000, -1500, 5000]))
