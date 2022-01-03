// Billiards triangle
function pyramid(balls) {
    let res = 1
    while (balls - res >= 0){
        balls -= res
        res++
    }
    return res-1
}



// -- Instruction
// Remember the triangle of balls in billiards? To build a classic triangle (5 levels) you need 15 balls. With 3 balls you can build a 2-level triangle, etc.

// For more examples,

// pyramid(1) == 1

// pyramid(3) == 2

// pyramid(6) == 3

// pyramid(10) == 4

// pyramid(15) == 5
// Write a function that takes number of balls (≥ 1) and calculates how many levels you can build a triangle.



// -- Sample Tests:
// const {assert} = require("chai");

// describe("Basic tests", function(){
//   it("Testing for balls: 1", function(){
//     assert.strictEqual(pyramid(1) , 1);
//   });  
//   it("Testing for balls: 4", function(){
//     assert.strictEqual(pyramid(4) , 2);
//   });
//   it("Testing for balls: 20", function(){
//     assert.strictEqual(pyramid(20) , 5);
//   });
//   it("Testing for balls: 100", function(){
//     assert.strictEqual(pyramid(100) , 13);
//   });
//   it("Testing for balls: 9999", function(){
//     assert.strictEqual(pyramid(9999) , 140);
//   });
// });