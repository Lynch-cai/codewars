// Shared Bit Counter
function sharedBits(a, b) {
    const decToBin = (num) => {return num.toString(2).split('')}
    const binA = decToBin(a)
    const binB = decToBin(b)
    let count = 0
    while (count < 2) {
        for (let i = 0; i < Math.min(a, b); i++){
            if (count >= 2){
                return true
            }
            else if (binA[binA.length - 1 - i] == binB[binB.length - 1 - i] && binA[binA.length - 1 - i] == 1){
                count++
            }
        }
        return false
    } 
}
  


// -- Instruction
// Complete the method that returns true if 2 integers share at least two 1 bits, otherwise return false. For simplicity assume that all numbers are non-negative.

// Examples
//  7  =  0111 in binary
// 10  =  1010
// 15  =  1111
// 7 and 10 share only a single 1-bit (at index 2) --> false
// 7 and 15 share 3 1-bits (at indexes 1, 2, and 3) --> true
// 10 and 15 share 2 1-bits (at indexes 0 and 2) --> true
// Hint: you can do this with just string manipulation, but binary operators will make your life much easier.



// -- Sample Tests:
// const chai = require("chai");
// const assert = chai.assert;

// const TESTS = [
//   [1, 2, false], 
//   [16, 8, false],
//   [1, 1, false],
//   [2, 3, false],
//   [7, 10, false],
//   [43, 77, true],
//   [7, 15, true],
//   [23, 7, true],
// ];

// describe("Sample tests", () =>
//     it(`${TESTS.length} fixed tests`, () => 
//       TESTS.forEach(([a, b, c]) => 
//          assert.strictEqual(sharedBits(a, b), c, `sharedBits(${a}, ${b}) should be equal ${c}`)
//       )
//     )
// );
