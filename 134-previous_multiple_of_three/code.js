// Previous multiple of three
const prevMultOfThree = n => {
    while (n > 0){
        if (n%3 == 0){
                return n
        }
        else {
            n = Number(n.toString().substring(0, n.toString().length - 1))
        }
    }
    return null
}



// -- Instruction
// Given a positive integer n: 0 < n < 1e6, remove the last digit until you're left with a number that is a multiple of three.

// Return n if the input is already a multiple of three, and return -1 if no such number exists.

// Examples
// 1      => -1
// 25     => -1
// 36     => 36
// 1244   => 12
// 952406 => 9



// -- Sample Tests:
// const chai = require("chai");
// const assert = chai.assert;

// describe("Basic tests", function() {
//   const answer = [null, null, 36, 12, 9] ;
//   [1, 25, 36, 1244, 952406].forEach((q, i) =>
//     it(`n = ${q}`, function() {
//       assert.strictEqual( prevMultOfThree(q), answer[i] );
//     }));
// });