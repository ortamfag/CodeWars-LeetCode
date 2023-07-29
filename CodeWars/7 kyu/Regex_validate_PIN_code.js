/*

ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

"1234"   -->  true
"12345"  -->  false
"a234"   -->  false
*/

// https://www.codewars.com/kata/55f8a9c06c018a0d6e000132

function validatePIN (pin) {
    if (Number(pin) % 1 !== 0) {
      return false
    }
    const re = /^\d*(\.\d+)?$/
    const pinElements = pin.toString().split('')

    let isRealNumber = true;

    pinElements.forEach((item => {
      if (item === '.' || item.match(re) === null)  {
        isRealNumber = false
      }
    }))

    if ((pinElements.length === 4 || pinElements.length === 6) && (isRealNumber === true)) {
      return true
    } else {
      return false
    }
}

console.log(validatePIN("1234"))