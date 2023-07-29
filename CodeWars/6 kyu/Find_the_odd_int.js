/*
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
*/

// https://www.codewars.com/kata/54da5a58ea159efa38000836

function findOdd(A) {

    const objСollection = new Set()
    const objСoincidence = {}

    A.forEach((item) => {
      if (objСollection.has(item)) {
        objСoincidence[item] += 1
      } else {
        objСollection.add(item)
        objСoincidence[item] = 1
      }
    })

    const objValues = Object.values(objСoincidence)

    for (let i = 0; i < objValues.length; i++) {
      if (objValues[i] % 2 !== 0) {
        return Number(Object.keys(objСoincidence)[i]);
      }
    }
}

console.log(findOdd([0,1,0,1,0]))