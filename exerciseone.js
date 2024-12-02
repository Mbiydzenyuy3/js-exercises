// Write a program that swaps the values of two variables and prints the result
let a = 5
let b = 10

// console.log(a, b) // Output: 10, 5
const sum = a
a = b
b = sum

console.log ('a:', a)
console.log ('b:', b)

// 2) Write a program to calculate the area of a rectangle using variables for length and width
const length = 10
const width = 5
const area = length * width
console.log ('Area:', area)

// Write a function that checks if a given number is positive, negative, or zero
// Your code here
function checkNumber (num) {
  if (num === 0) {
    console.log ('num is zero')
  } else if (num < 0) {
    console.log ('num is negative')
  } else if (num > 0) {
    console.log ('num is Positive')
  }
}

console.log (checkNumber(-5)) // Output Negative
console.log (checkNumber(0)) // Output Zero
console.log (checkNumber(7)) // Output Positive

// Write a function that accepts a string and returns the number of vowels in it
function countVowels (str) {
  const vowelNum = str.toLowerCase ().split ('')
  const vowel = ['a', 'e', 'i', 'o', 'u']
  vowel = vowelCount
  const vowelCount = 0

  for (let i = 0; i < vowelNum.length; i++) {
    if (vowelCount.includes(vowelNum[i])) vowelCount++
  }
  return vowelCount
}
