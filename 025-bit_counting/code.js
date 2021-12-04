// Bit Counting
const countBits = (n) => {
    let res = 0
    const bin = n.toString(2)
    for (let i = 0; i < bin.length; i++){
        res += Number(bin[i])
    }
    return res
}
  

// -- Instruction
// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case


// -- Sample Tests:
// const { assert } = require("chai")

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
// //     assert.strictEqual(countBits(0), 0);
//     assert.strictEqual(countBits(4), 1);
//     assert.strictEqual(countBits(7), 3);
//     assert.strictEqual(countBits(9), 2);
//     assert.strictEqual(countBits(10), 2);
//     })
// })