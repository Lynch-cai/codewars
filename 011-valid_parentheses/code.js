// Valid Parentheses
function validParentheses(parens) {
    let result = true
    let valid = 0
    for (let i = 0; i < parens.length; i++){
        if (valid >= 0) {
            if (parens[i] == "(") {
            valid++
            }
            else if (parens[i] == ")") {
                valid--
            }
        }
        // if valid <= -1
        else {
            result = false
        }
    }
    if (valid != 0) {
        result = false
    }
    return result 
}



// -- Instruction

// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true



// -- Sample Tests:
// const { assert } = require('chai');

// describe("Tests", () => {
//   it(`values: "("`, () => assert.strictEqual(validParentheses( "(" ), false));
//   it(`values: ")"`, () => assert.strictEqual( validParentheses( ")" ), false));
//   it(`values: ""`, () => assert.strictEqual(validParentheses( "" ), true));
//   it(`values: "()"`, () => assert.strictEqual(validParentheses( "()" ), true));
//   it(`values: "())"`, () => assert.strictEqual(validParentheses( "())" ), false));
// });
