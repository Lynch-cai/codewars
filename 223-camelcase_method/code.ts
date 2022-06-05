// CamelCase Method
export function camelCase(str: string): string {
  return str === "" ? str : str.split(' ').map(s => s.slice(0,1).toUpperCase() + s.slice(1, s.length)).join('')
}



// -- Instruction
// Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

// For instance:

// camelCase("hello case"); // => "HelloCase"
// camelCase("camel case word"); // => "CamelCaseWord"



// -- Sample Tests:
// import solution = require('./solution');
// import {assert} from "chai";

// describe("Sample Test Cases", function(){
//   it("Should return a CamelCased string", function() {
//     assert.equal(solution.camelCase(""), "");
//     assert.equal(solution.camelCase("test case"), "TestCase");
//     assert.equal(solution.camelCase("camel case method"), "CamelCaseMethod");
//     assert.equal(solution.camelCase("say hello "), "SayHello");
//     assert.equal(solution.camelCase(" camel case word"), "CamelCaseWord");
//   });
// });