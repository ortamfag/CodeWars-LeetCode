/*

Very simple, given an integer or a floating-point number, find its opposite.
1: -1
14: -14
-34: 34
*/

// https://www.codewars.com/kata/56dec885c54a926dcd001095

function opposite(number) {
    return number < 0 ? Math.abs(number) : number - number - number
}

console.log(opposite(-1000))
