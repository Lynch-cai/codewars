// Single digit
function singleDigit(n) {
    let res = 0
    if (n < 10){
        return n
    }
    else{
        while (n > 9){
            const bin = n.toString(2)
            for (let i = 0; i < bin.length; i++){
            res += Number(bin[i])
            }
            n = res
            res = 0
        }
        return n
    }
}



// -- Instruction
// The goal of this Kata is to reduce the passed integer to a single digit (if not already) by converting the number to binary, taking the sum of the binary digits, and if that sum is not a single digit then repeat the process.

// If the passed integer is already a single digit there is no need to reduce
// n will be an integer such that 0 < n < 10⁹
// For example given 5665 the function should return 5:

// 5665 --> (binary) 1011000100001
// 1011000100001 --> (sum of binary digits) 5
// Given 123456789 the function should return 1:

// 123456789 --> (binary) 111010110111100110100010101
// 111010110111100110100010101 --> (sum of binary digits) 16
// 16 --> (binary) 10000
// 10000 --> (sum of binary digits) 1



// -- Sample Tests:
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold = 0;

// describe("Basic Tests", () => {
//   it("Should return a single digit integer", () => {
//     assert.strictEqual(singleDigit(5), 5)
//     assert.strictEqual(singleDigit(999), 8)
//     assert.strictEqual(singleDigit(1234444123), 1)
// //     assert.strictEqual(singleDigit(443566), 2)
//     assert.strictEqual(singleDigit(565656565), 3)
//     assert.strictEqual(singleDigit(4868872), 8)
//     assert.strictEqual(singleDigit(234234235), 2)
//     assert.strictEqual(singleDigit(567448), 7)
//     assert.strictEqual(singleDigit(1000000000), 3)
//   })
// })