// Drone Fly-By
function flyBy(l, d){
    return 'o'.repeat( l.length - d.length > 0 ? d.length : l.length) + ((l.length - d.length > 0) ? 'x'.repeat(l.length - d.length) : '')
}



// -- Instruction
// The other day I saw an amazing video where a guy hacked some wifi controlled lightbulbs by flying a drone past them. Brilliant.

// In this kata we will recreate that stunt... sort of.

// You will be given two strings: lamps and drone. lamps represents a row of lamps, currently off, each represented by x. When these lamps are on, they should be represented by o.

// The drone string represents the position of the drone T (any better suggestion for character??) and its flight path up until this point =. The drone always flies left to right, and always begins at the start of the row of lamps. Anywhere the drone has flown, including its current position, will result in the lamp at that position switching on.

// Return the resulting lamps string. See example tests for more clarity.



// -- Sample Tests:
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Drone Fly-By", () => {
//   it("Testing for fixed tests", () => {
// //     assert.strictEqual(flyBy('xxxxxx', '====T'), 'ooooox');
// //     assert.strictEqual(flyBy('xxxxxxxxx', '==T'), 'oooxxxxxx'); 
// //     assert.strictEqual(flyBy('xxxxxxxxxxxxxxx', '=========T'), 'ooooooooooxxxxx'); 
//   })
// })