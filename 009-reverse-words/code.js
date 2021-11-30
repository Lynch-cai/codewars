// Reverse words
function reverseWords(str) {
    let result = ""
    let startPos = 0
    for (let i = 0; i < str.length+1; i++){
        if (str[i] == " " || i == str.length){
            for (let j = i-1; j >= startPos; j--){
                result += str[j]
            }
            result += " "
            startPos = i+1
        }
    }
    return result = result.slice(0, result.length - 1)
}



// -- Instruction

// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"



// -- Sample Tests:
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(reverseWords('The quick brown fox jumps over the lazy dog.'), 'ehT kciuq nworb xof spmuj revo eht yzal .god');
//     assert.strictEqual(reverseWords('apple'), 'elppa');
//     assert.strictEqual(reverseWords('a b c d'), 'a b c d');
//     assert.strictEqual(reverseWords('double  spaced  words'), 'elbuod  decaps  sdrow');
//   });
// });