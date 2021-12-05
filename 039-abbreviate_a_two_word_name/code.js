// Abbreviate a Two Word Name
function abbrevName(name){
    name = name.split(' ')
    let abb = []
    for (let i = 0; i < name.length; i++){
        abb.push(name[i][0])
    }
    return abb.join('.').toUpperCase()
}



// -- Instruction
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F



// -- Sample Tests:
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(abbrevName("Sam Harris"), "S.H");
//     assert.strictEqual(abbrevName("Patrick Feenan"), "P.F");
//     assert.strictEqual(abbrevName("Evan Cole"), "E.C");
//     assert.strictEqual(abbrevName("P Favuzzi"), "P.F");
//     assert.strictEqual(abbrevName("David Mendieta"), "D.M");
//   });
// });