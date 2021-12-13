// Bumps in the Road
function bump(x){
    return x.replace(/_/g, '').length < 16 ? 'Woohoo!' : 'Car Dead'
}



// -- Instruction
// Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

// Unfortunately for you, your drive is very bumpy! Given a string showing either flat road ("_") or bumps ("n"), work out if you make it home safely. 15 bumps or under, return "Woohoo!", over 15 bumps return "Car Dead".



// -- Sample Tests:
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Bumps in the Road", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(bump("n"), "Woohoo!");
//     assert.strictEqual(bump("_nnnnnnn_n__n______nn__nn_nnn"), "Car Dead");
//     assert.strictEqual(bump("______n___n_"), "Woohoo!");
//   });
// });