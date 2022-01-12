// Paul's Misery
function paul(x){
    let res = 0
    const misery = [['life', 0], ['eating', 1], ['kata', 5], ['Petes kata', 10]]
    x.map(y => {
        misery.map(z => {
            res += y == z[0] ? z[1] : 0
        })
    })
    if (res < 40) { return 'Super happy!'}
    else if (res < 70) { return 'Happy!'}
    else if (res < 100) { return 'Sad!'}
    else { return 'Miserable '}
}



// -- Instruction
// Paul is an excellent coder and sits high on the CW leaderboard. He solves kata like a banshee but would also like to lead a normal life, with other activities. But he just can't stop solving all the kata!!

// Given an array (x) you need to calculate the Paul Misery Score. The values are worth the following points:

// kata = 5
// Petes kata = 10
// life = 0
// eating = 1
// The Misery Score is the total points gained from the array. Once you have the total, return as follows:

// < 40 = 'Super happy!'
// < 70 >= 40 = 'Happy!'
// < 100 >= 70 = 'Sad!'
// > 100 = 'Miserable!'



// -- Sample Tests:
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Paul's Misery", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(paul(['life', 'eating', 'life']), 'Super happy!');
//     assert.strictEqual(paul(['life', 'Petes kata', 'Petes kata', 'Petes kata', 'eating']), 'Super happy!');
//     assert.strictEqual(paul(['Petes kata', 'Petes kata', 'eating', 'Petes kata', 'Petes kata', 'eating']), 'Happy!');
//   });
// });