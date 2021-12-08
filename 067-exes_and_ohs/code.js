// Exes and Ohs
function XO(str) {
    let count = 0
    str.toLowerCase().split('').map( x => {
        if (x == 'x'){ count++ }
        else if (x == 'o'){ count-- }
    })
    return count == 0 ? true : false
}



// -- Instruction
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false



// -- Sample Tests:
// describe("Tests", () => {
//     it("test", () => {
//   Test.assertEquals(XO('xo'),true);
//   Test.assertEquals(XO("xxOo"),true);
//   Test.assertEquals(XO("xxxm"),false);
//   Test.assertEquals(XO("Oo"),false);
//   Test.assertEquals(XO("ooom"),false);
//     });
// });