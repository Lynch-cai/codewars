// Beginner Series #3 Sum of Numbers
function getSum( a,b )
{
    let inf = a
    let sup = b
    let res = 0
    if (a > b){
        inf = b
        sup = a
    }
    if (a == b){ 
        res = a
    }
    else{
        for (let i = inf; i <= sup; i++){
        res += i
        }
    }
    return res
}



// -- Instruction
// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)



// -- Sample Tests:
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {         
//     assert.strictEqual(getSum(0,-1),-1);
//     assert.strictEqual(getSum(0,1),1);
//   })
// });