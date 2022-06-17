// Grasshopper - Messi goals function
export function goals (laLigaGoals:number, copaDelReyGoals:number, championsLeagueGoals:number): number {
  return laLigaGoals+copaDelReyGoals+championsLeagueGoals
}



// -- Instruction
// Messi goals function
// Messi is a soccer player with goals in three leagues:

// LaLiga
// Copa del Rey
// Champions
// Complete the function to return his total number of goals in all three leagues.

// Note: the input will always be valid.

// For example:

// 5, 10, 2  -->  17



// -- Sample Tests:
// import solution = require('./solution');
// // import the type of assertion library you wish to use (Chai recommended)
// import {assert} from "chai";

// describe("goals test", function(){
//   it('should be 0', function() {
//     assert.equal(0, 0)
//   });
// });