/*

Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original
order of elements.

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/

// https://www.codewars.com/kata/54e6533c92449cc251001667

function uniqueInOrder(iterable){
    let iterableArray
    typeof iterable === 'string' ? iterableArray = iterable.split('') : iterableArray = iterable
    const resultArray = []

    for (let i = 0; i < iterableArray.length; i+=1) {
      if (iterableArray[i] !== iterableArray[i + 1]) {
        resultArray.push(iterableArray[i])
      }
    }

    return resultArray
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'))