/*

Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.

Examples:(Input1, Input2 --> Output (explanation)))
*/

// https://www.codewars.com/kata/55cbd4ba903825f7970000f5

function addBinary(a,b) {
    return (a + b).toString(2);
}

console.log(addBinary(5, 9))