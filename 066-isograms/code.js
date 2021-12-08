// Isograms
function isIsogram(str){
    str = str.toLowerCase()
    while (str.length > 0){
        const letter = str[0]
        str = str.substring(1)
        if (str.includes(letter)){
            return false
        }
    }
    return true
}



// -- Instruction
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter casing)



// -- Sample Tests:
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Tests", () => {
//   it("test", () => {
//     assert.strictEqual( isIsogram("Dermatoglyphics"), true );
//     assert.strictEqual( isIsogram("isogram"), true );
//     assert.strictEqual( isIsogram("aba"), false, "same chars may not be adjacent" );
//     assert.strictEqual( isIsogram("moOse"), false, "same chars may not be same case" );
//     assert.strictEqual( isIsogram("isIsogram"), false );
//     assert.strictEqual( isIsogram(""), true, "an empty string is a valid isogram" );
//   });
// });