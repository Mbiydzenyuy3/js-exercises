// Write a function to return the factorial of a number.
// 10! (Read as 10 factorial) == 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1

let factorial = (num) => {
  if (num === 0 || num === 1) {
    return 1
  }
  let result = 1
  for (let newNumber = 2; newNumber <= num; newNumber++) {
    result *= newNumber
  }
  return result
}

console.log(factorial(4))
