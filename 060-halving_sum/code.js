// Halving Sum
function halvingSum(n) {
    let half = Math.floor(n/2)
    let res = n + half
    while (half > 1){
        half = Math.floor(half/2)
        res += half
    }
    return res
}



// -- Instruction
// Task
// Given a positive integer n, calculate the following sum:

// n + n/2 + n/4 + n/8 + ...
// All elements of the sum are the results of integer division.

// Example
// 25  =>  25 + 12 + 6 + 3 + 1 = 47



// -- Sample Tests:
// describe("Test Case", function() {
//     it("Test", function() {
//       Test.assertEquals(halvingSum(25),47);
//       Test.assertEquals(halvingSum(127),247);
//     });
// });