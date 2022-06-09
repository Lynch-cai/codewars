// Grasshopper - Summation
export const summation = (n:number) =>  { 
  return (n*(n+1))/2
}



// -- Instruction
// Summation
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example:

// summation(2) -> 3
// 1 + 2

// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8



// -- Sample Tests:
// import {summation} from "./solution";
// import {assert} from "chai";

// describe('summation', () => {
//   it('basic tests', () => {
//     assert.equal(summation(1), 1)
//     assert.equal(summation(8), 36)
//   })
// })