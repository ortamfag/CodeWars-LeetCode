/*

Design a Calculator class. The class should provide the mathematical operations of addition, subtraction, multiplication, division, and exponentiation. It should also allow consecutive operations to be performed using method chaining. The Calculator class constructor should accept a number which serves as the initial value of result.

Your Calculator class should have the following methods:

add - This method adds the given number value to the result and returns the updated Calculator.
subtract - This method subtracts the given number value from the result and returns the updated Calculator.
multiply - This method multiplies the result  by the given number value and returns the updated Calculator.
divide - This method divides the result by the given number value and returns the updated Calculator. If the passed value is 0, an error "Division by zero is not allowed" should be thrown.
power - This method raises the result to the power of the given number value and returns the updated Calculator.
getResult - This method returns the result.
Solutions within 10-5 of the actual result are considered correct.


*/

// https://leetcode.com/problems/calculator-with-method-chaining/

class Calculator {

    /**
     * @param {number} value
     */
    constructor(value) {
        this.initialValue = value
        return this
    }

    /**
     * @param {number} value
     * @return {Calculator}
     */
    add(value){
        this.initialValue += value
        return this
    }

    /**
     * @param {number} value
     * @return {Calculator}
     */
    subtract(value){
        this.initialValue -= value
        return this
    }

    /**
     * @param {number} value
     * @return {Calculator}
     */
    multiply(value) {
        this.initialValue *= value
        return this
    }

    /**
     * @param {number} value
     * @return {Calculator}
     */
    divide(value) {
        this.initialValue /= value
        return this
    }

    /**
     * @param {number} value
     * @return {Calculator}
     */
    power(value) {
        this.initialValue = Math.pow(this.initialValue, value)
        return this
    }

    /**
     * @return {number}
     */
    getResult() {
        if (!isFinite(this.initialValue)) {
            return "Division by zero is not allowed"
        } else {
            return this.initialValue;
        }
    }
}

const action = new Calculator(20).divide(0).getResult()