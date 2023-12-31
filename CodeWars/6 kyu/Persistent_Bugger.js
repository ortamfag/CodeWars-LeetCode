/*

Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)
*/

// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec

const persistence = (num) => {
    const numToString = num.toString().split('');
    if (numToString.length === 1) {
        return 0
    }
    let result = 1;

    for (let i = 0; i < numToString.length; i += 1) {
        result *= numToString[i]
    }

    return result.toString().length > 1 ? 1 + persistence(result) : 1
}

console.log(persistence(999))