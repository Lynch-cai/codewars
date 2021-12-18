// Chicken Sexing
function correctness(bobsDecisions, expertDecisions) {
    let score = 0
    bobsDecisions.map((bobDecision, i) => {
        if(bobDecision == expertDecisions[i]){score++}
        else if (bobDecision == '?' || expertDecisions[i] == "?"){score += 0.5}
    })
    return score
}



// -- Instruction
// Bob is a chicken sexer. His job is to sort baby chicks into a Male(M) and Female(F) piles. When bob can't guess can throw his hands up and declare it with a '?'.

// Bob's bosses don't trust Bob's ability just yet, so they have paired him with an expert sexer. All of Bob's decisions will be checked against the expert's choices to generate a correctness score.

// Scoring Rules
// When they agree, he gets 1 point.
// When they disagree but one has said '?', he gets 0.5 points.
// When they disagree completely, he gets 0 points.



// -- Sample Tests:
// describe("Tests", () => {
//     it("test", () => {
//   Test.assertEquals(correctness(['M', '?', 'M'], ['M', 'F', '?']), 2, 'guessed')
  
//     });
// });