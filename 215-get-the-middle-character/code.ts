// Get the Middle Character
export class Challenge {
  static getMiddle(s:string) {
    return s ? s.length%2===0 ? s[Math.floor(s.length/2)-1] + s[Math.floor(s.length/2)] : s[Math.floor(s.length/2)] : ''
  }
}



// -- Instruction
// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"
// #Input

// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// #Output

// The middle character(s) of the word represented as a string.



// -- Sample Tests:
// /// <reference path="/runner/typings/main/ambient/mocha/index.d.ts" />
// /// <reference path="/runner/typings/main/ambient/chai/index.d.ts" />
// import solution = require('./solution');
// import {assert} from "chai";

// function test(string, expected) {
//   assert.strictEqual(solution.Challenge.getMiddle(string), expected)
// }

// describe("solution", function(){
//   it("should handle basic tests", function() {
//     test("test", "es");
//     test("testing", "t");
//   });
// });