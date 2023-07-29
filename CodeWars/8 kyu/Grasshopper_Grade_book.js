/*

Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
90 <= score <= 100	'A'
80 <= score < 90	'B'
70 <= score < 80	'C'
60 <= score < 70	'D'
0 <= score < 60	'F'
*/

// https://www.codewars.com/kata/55cbd4ba903825f7970000f5

function getGrade (s1, s2, s3) {
    const average = (s1 + s2 + s3) / 3
    switch (true) {
        case average >= 90:
          return 'A'

        case average < 90 && average >= 80:
          return 'B'

        case average < 80 && average >= 70:
          return 'C'

        case average < 70 && average >= 60:
          return 'D'

        default:
          return 'F'
    }
}

console.log(getGrade(95,90,93))