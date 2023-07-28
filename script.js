// complete the function
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
    console.log(resultArray.join(''))

}

solution('camelCasing');