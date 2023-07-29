/*

As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

For example:

gimme([2, 3, 1]) => 0
2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

Another example (just to make sure it is clear):

gimme([5, 10, 14]) => 1
10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.
*/

// https://www.codewars.com/kata/545a4c5a61aa4c6916000755

function gimme (triplet) {
    const unsortedArray = [...triplet]
    const sortedArray = triplet.sort((a, b) => {
      return Number(a) - Number(b)
    })

    for (let i = 0; i < unsortedArray.length; i += 1) {
      if (Number(sortedArray[1]) === Number(unsortedArray[i])) {
        return i
    }
    }
}

console.log(gimme([2, 3, 1]))