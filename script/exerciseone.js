// Write a program that swaps the values of two variables and prints the result
let a = 5
let b = 10

// console.log(a, b) // Output: 10, 5
const sum = a
a = b
b = sum

console.log('a:', a)
console.log('b:', b)

// 2) Write a program to calculate the area of a rectangle using variables for length and width
const length = 10
const width = 5
const area = length * width
console.log('Area:', area)

// Write a function that checks if a given number is positive, negative, or zero
// Your code here
function checkNumber (num) {
  if (num === 0) {
    console.log('num is Zero')
  } else if (num < 0 && num <= -5) {
    console.log('num is negative')
  } else if (num > 0 && num === 7) {
    console.log('num is Positive')
  }
}

console.log(checkNumber(0))
console.log(checkNumber(-5))
console.log(checkNumber(7))

// Write a function that accepts a string and returns the number of vowels in it
function countVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  let vowelCount = 0

  for (let numberOfVowels of str.toLowerCase()) {
    if (vowels.includes(numberOfVowels)) vowelCount++;
  }
  return vowelCount
}

console.log(countVowels("Hello World"))

