// Stop gninnipS My sdroW!
export function spinWords(words: string): string {
  return words.split(' ').map(word => word.length >= 5 ? word.split('').reverse().join('') : word).join(' ')
}



// -- Instruction
// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"



// -- Sample Tests:
// import {assert} from "chai";
// import {spinWords} from './solution';

// describe("spinWords", () =>{
//   it("should pass some fixed tests", () => {
//     assert.strictEqual(spinWords("Hey fellow warriors"), "Hey wollef sroirraw");
//   });
// });