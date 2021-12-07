// Vowel Count
function getCount(str) {
    let res = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u']
    str.split('').map(s => {
        vowels.map(v => {
            res += s==v ? 1 : 0
        })
    })
    return res;
}



// -- Instruction
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.



// -- Sample Tests:
const chai = require("chai");
const assert = chai.assert;

describe("Case 1", function(){
    it ("should be defined", function(){
        assert.strictEqual(getCount("abracadabra"), 5)
    });
});