/*

Complete the solution so that the function will break up camel casing, using a space between words.
"camelCasing"  =>  "camel Casing"
*/

// https://www.codewars.com/kata/5208f99aee097e6552000148

function solution(string) {
    const wordsArray = string.split('');
    const resultArray = []

    wordsArray.forEach((char) => {
      if (char === char.toUpperCase()) {
        resultArray.push(' ')
        resultArray.push(char)
      } else {
        resultArray.push(char)
      }
    })
    return resultArray.join('')
}

console.log(solution("camelCasing"))