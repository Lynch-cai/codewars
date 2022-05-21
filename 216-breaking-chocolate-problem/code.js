// Breaking chocolate problem
export function breakChocolate(n: number, m: number): number {
  return n*m ? n*m-1 : 0
}



// -- Instruction
// Your task is to split the chocolate bar of given dimension n x m into small squares. Each square is of size 1x1 and unbreakable. Implement a function that will return minimum number of breaks needed.

// For example if you are given a chocolate bar of size 2 x 1 you can split it to single squares in just one break, but for size 3 x 1 you must do two breaks.

// If input data is invalid you should return 0 (as in no breaks are needed if we do not have any chocolate to split). Input will always be a non-negative integer.



// -- Sample Tests:
// import { assert } from "chai";

// import { breakChocolate } from "./solution";

// describe( "Breaking chocolate", ()=>{
//   it( "Fixed tests", ()=>{
//     assert.strictEqual( breakChocolate(5,5), 24 );
//     assert.strictEqual( breakChocolate(7,4), 27 );
//     assert.strictEqual( breakChocolate(1,1), 0 );
//     assert.strictEqual( breakChocolate(0,0), 0, "What If I Told You There is No Chocolate?" );
//     assert.strictEqual( breakChocolate(6,1), 5 );
//   });
// });
